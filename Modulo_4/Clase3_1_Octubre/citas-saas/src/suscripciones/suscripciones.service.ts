import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import Stripe from 'stripe';
import { PrismaService } from '../prisma/prisma.service';
import { Plan, EstadoSuscripcion } from '../generated/prisma/client';

@Injectable()
export class SuscripcionesService {
  // Cliente de Stripe. Si no hay llave real, igual se instancia con un
  // placeholder: la verificación de webhooks NO usa la llave secreta,
  // solo el secreto del webhook, así que funciona en modo prueba.
  private readonly stripe = new Stripe(
    process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder',
  );

  constructor(private readonly prisma: PrismaService) {}

  private async verificarNegocioPropio(negocioId: number, duenoId: number) {
    const negocio = await this.prisma.negocio.findUnique({
      where: { id: negocioId },
    });
    if (!negocio) {
      throw new NotFoundException('El negocio no existe');
    }
    if (negocio.duenoId !== duenoId) {
      throw new ForbiddenException('Este negocio no es tuyo');
    }
    return negocio;
  }

  async estado(negocioId: number, duenoId: number) {
    await this.verificarNegocioPropio(negocioId, duenoId);
    return this.prisma.suscripcion.findUnique({ where: { negocioId } });
  }

  // Crea una sesión de pago (Checkout) para que el negocio suba a PRO.
  async crearCheckout(negocioId: number, duenoId: number) {
    const negocio = await this.verificarNegocioPropio(negocioId, duenoId);

    const session = await this.stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: { name: `AgendaFácil PRO — ${negocio.nombre}` },
            unit_amount: 900, // USD 9.00 / mes
            recurring: { interval: 'month' },
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.APP_URL}/suscripcion-ok`,
      cancel_url: `${process.env.APP_URL}/suscripcion-cancelada`,
      // Guardamos a qué negocio pertenece este pago para usarlo en el webhook.
      metadata: { negocioId: String(negocioId) },
    });

    return { url: session.url };
  }

  // Procesa el evento que Stripe envía al webhook, tras verificar su firma.
  async procesarEvento(rawBody: Buffer, firma: string) {
    const secret = process.env.STRIPE_WEBHOOK_SECRET || '';

    let evento: Stripe.Event;
    try {
      evento = this.stripe.webhooks.constructEvent(rawBody, firma, secret);
    } catch {
      throw new BadRequestException('Firma de webhook inválida');
    }

    if (evento.type === 'checkout.session.completed') {
      const session = evento.data.object as Stripe.Checkout.Session;
      const negocioId = Number(session.metadata?.negocioId);

      if (negocioId) {
        await this.prisma.suscripcion.update({
          where: { negocioId },
          data: {
            plan: Plan.PRO,
            estado: EstadoSuscripcion.ACTIVA,
            stripeCustomerId: (session.customer as string) ?? null,
            stripeSubscriptionId: (session.subscription as string) ?? null,
            vigenteHasta: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
          },
        });
      }
    }

    return { recibido: true };
  }
}
