import type { RawBodyRequest } from '@nestjs/common';
import type { Request } from 'express';
import { SuscripcionesService } from './suscripciones.service';
export declare class StripeWebhookController {
    private readonly suscripcionesService;
    constructor(suscripcionesService: SuscripcionesService);
    recibir(req: RawBodyRequest<Request>, firma: string): Promise<{
        recibido: boolean;
    }>;
}
