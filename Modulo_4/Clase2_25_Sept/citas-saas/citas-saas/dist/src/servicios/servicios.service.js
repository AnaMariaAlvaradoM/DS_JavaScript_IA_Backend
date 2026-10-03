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
exports.ServiciosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ServiciosService = class ServiciosService {
    prisma;
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
    }
    async crear(negocioId, duenoId, dto) {
        await this.verificarNegocioPropio(negocioId, duenoId);
        return this.prisma.servicio.create({
            data: {
                nombre: dto.nombre,
                duracionMin: dto.duracionMin,
                precio: dto.precio,
                negocioId,
            },
        });
    }
    async listarPorNegocio(negocioId, duenoId) {
        await this.verificarNegocioPropio(negocioId, duenoId);
        return this.prisma.servicio.findMany({
            where: { negocioId },
            orderBy: { id: 'asc' },
        });
    }
};
exports.ServiciosService = ServiciosService;
exports.ServiciosService = ServiciosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ServiciosService);
//# sourceMappingURL=servicios.service.js.map