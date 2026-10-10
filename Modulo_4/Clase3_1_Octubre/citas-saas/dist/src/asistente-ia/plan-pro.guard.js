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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanProGuard = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("../generated/prisma/client");
let PlanProGuard = class PlanProGuard {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const usuario = request.user;
        const negocioId = Number(request.params.negocioId);
        const negocio = await this.prisma.negocio.findUnique({
            where: { id: negocioId },
            include: { suscripcion: true },
        });
        if (!negocio) {
            throw new common_1.NotFoundException('El negocio no existe');
        }
        if (negocio.duenoId !== usuario.id) {
            throw new common_1.ForbiddenException('Este negocio no es tuyo');
        }
        if (negocio.suscripcion?.plan !== client_1.Plan.PRO) {
            throw new common_1.HttpException('Esta función es exclusiva del plan PRO. Actualiza tu suscripción.', common_1.HttpStatus.PAYMENT_REQUIRED);
        }
        return true;
    }
};
exports.PlanProGuard = PlanProGuard;
exports.PlanProGuard = PlanProGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PlanProGuard);
//# sourceMappingURL=plan-pro.guard.js.map