import { PrismaService } from '../prisma/prisma.service';
import { Plan, EstadoSuscripcion } from '../generated/prisma/client';
export declare class SuscripcionesService {
    private readonly prisma;
    private readonly stripe;
    constructor(prisma: PrismaService);
    private verificarNegocioPropio;
    estado(negocioId: number, duenoId: number): Promise<{
        id: number;
        creadoEn: Date;
        plan: Plan;
        estado: EstadoSuscripcion;
        stripeCustomerId: string | null;
        stripeSubscriptionId: string | null;
        vigenteHasta: Date | null;
        negocioId: number;
    } | null>;
    crearCheckout(negocioId: number, duenoId: number): Promise<{
        url: string | null;
    }>;
    procesarEvento(rawBody: Buffer, firma: string): Promise<{
        recibido: boolean;
    }>;
}
