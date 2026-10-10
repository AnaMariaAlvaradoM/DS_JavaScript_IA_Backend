import { SuscripcionesService } from './suscripciones.service';
export declare class SuscripcionesController {
    private readonly suscripcionesService;
    constructor(suscripcionesService: SuscripcionesService);
    estado(negocioId: number, usuario: {
        id: number;
    }): Promise<{
        id: number;
        creadoEn: Date;
        plan: import("../generated/prisma/enums").Plan;
        estado: import("../generated/prisma/enums").EstadoSuscripcion;
        stripeCustomerId: string | null;
        stripeSubscriptionId: string | null;
        vigenteHasta: Date | null;
        negocioId: number;
    } | null>;
    checkout(negocioId: number, usuario: {
        id: number;
    }): Promise<{
        url: string | null;
    }>;
}
