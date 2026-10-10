import { Controller, Headers, Post, Req } from '@nestjs/common';
import type { RawBodyRequest } from '@nestjs/common';
import { ApiExcludeController } from '@nestjs/swagger';
import type { Request } from 'express';
import { SuscripcionesService } from './suscripciones.service';

// Endpoint PÚBLICO que recibe los eventos de Stripe. No lleva JwtAuthGuard:
// quien llama es Stripe, no un usuario. La seguridad es la FIRMA del webhook.
@ApiExcludeController()
@Controller('webhooks/stripe')
export class StripeWebhookController {
  constructor(private readonly suscripcionesService: SuscripcionesService) {}

  @Post()
  recibir(
    @Req() req: RawBodyRequest<Request>,
    @Headers('stripe-signature') firma: string,
  ) {
    return this.suscripcionesService.procesarEvento(req.rawBody as Buffer, firma);
  }
}
