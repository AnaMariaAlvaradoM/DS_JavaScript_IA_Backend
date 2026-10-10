"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuscripcionesService = void 0;
const common_1 = require("@nestjs/common");
const stripe_1 = __importDefault(require("stripe"));
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("../generated/prisma/client");
let SuscripcionesService = class SuscripcionesService {
    prisma;
    stripe = new stripe_1.default(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder');
    constructor(prisma) {
        this.prisma = prisma;
    }
    async verificarNegocioPropio(negocioId, duenoId) {
        const negocio = await this.prisma.negocio.findUnique({
            where: { id: negocioId },
        });
        if (!negocio) {
            throw new common_1.NotFoundException('El negocio no existe');
        }
        if (negocio.duenoId !== duenoId) {
            throw new common_1.ForbiddenException('Este negocio no es tuyo');
        }
        return negocio;
    }
    async estado(negocioId, duenoId) {
        await this.verificarNegocioPropio(negocioId, duenoId);
        return this.prisma.suscripcion.findUnique({ where: { negocioId } });
    }
    async crearCheckout(negocioId, duenoId) {
        const negocio = await this.verificarNegocioPropio(negocioId, duenoId);
        const session = await this.stripe.checkout.sessions.create({
            mode: 'subscription',
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: { name: `AgendaFácil PRO — ${negocio.nombre}` },
                        unit_amount: 900,
                        recurring: { interval: 'month' },
                    },
                    quantity: 1,
                },
            ],
            success_url: `${process.env.APP_URL}/suscripcion-ok`,
            cancel_url: `${process.env.APP_URL}/suscripcion-cancelada`,
            metadata: { negocioId: String(negocioId) },
        });
        return { url: session.url };
    }
    async procesarEvento(rawBody, firma) {
        const secret = process.env.STRIPE_WEBHOOK_SECRET || '';
        let evento;
        try {
            evento = this.stripe.webhooks.constructEvent(rawBody, firma, secret);
        }
        catch {
            throw new common_1.BadRequestException('Firma de webhook inválida');
        }
        if (evento.type === 'checkout.session.completed') {
            const session = evento.data.object;
            const negocioId = Number(session.metadata?.negocioId);
            if (negocioId) {
                await this.prisma.suscripcion.update({
                    where: { negocioId },
                    data: {
                        plan: client_1.Plan.PRO,
                        estado: client_1.EstadoSuscripcion.ACTIVA,
                        stripeCustomerId: session.customer ?? null,
                        stripeSubscriptionId: session.subscription ?? null,
                        vigenteHasta: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
                    },
                });
            }
        }
        return { recibido: true };
    }
};
exports.SuscripcionesService = SuscripcionesService;
exports.SuscripcionesService = SuscripcionesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SuscripcionesService);
//# sourceMappingURL=suscripciones.service.js.map