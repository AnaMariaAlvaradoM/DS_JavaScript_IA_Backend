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
exports.TransaccionesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let TransaccionesService = class TransaccionesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    crear(dto, usuarioId) {
        return this.prisma.transaccion.create({
            data: {
                descripcion: dto.descripcion,
                monto: dto.monto,
                tipo: dto.tipo,
                categoriaId: dto.categoriaId,
                usuarioId,
            },
            include: { categoria: true },
        });
    }
    obtenerMias(usuarioId) {
        return this.prisma.transaccion.findMany({
            where: { usuarioId },
            include: { categoria: true },
            orderBy: { id: 'asc' },
        });
    }
    async obtenerUna(id, usuarioId) {
        const transaccion = await this.prisma.transaccion.findUnique({
            where: { id },
            include: { categoria: true },
        });
        if (!transaccion) {
            throw new common_1.NotFoundException('La transacción no existe');
        }
        if (transaccion.usuarioId !== usuarioId) {
            throw new common_1.ForbiddenException('Esta transacción no es tuya');
        }
        return transaccion;
    }
    async actualizar(id, dto, usuarioId) {
        await this.obtenerUna(id, usuarioId);
        return this.prisma.transaccion.update({
            where: { id },
            data: dto,
            include: { categoria: true },
        });
    }
    async eliminar(id, usuarioId) {
        await this.obtenerUna(id, usuarioId);
        return this.prisma.transaccion.delete({ where: { id } });
    }
};
exports.TransaccionesService = TransaccionesService;
exports.TransaccionesService = TransaccionesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TransaccionesService);
//# sourceMappingURL=transacciones.service.js.map