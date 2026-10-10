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
exports.NegociosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("../generated/prisma/client");
let NegociosService = class NegociosService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async crear(dto, duenoId) {
        const [negocio] = await this.prisma.$transaction([
            this.prisma.negocio.create({
                data: {
                    nombre: dto.nombre,
                    descripcion: dto.descripcion,
                    telefono: dto.telefono,
                    direccion: dto.direccion,
                    duenoId,
                    configuracion: { create: {} },
                    suscripcion: { create: {} },
                },
                include: { configuracion: true, suscripcion: true },
            }),
            this.prisma.usuario.update({
                where: { id: duenoId },
                data: { rol: client_1.Rol.DUENO },
            }),
        ]);
        return negocio;
    }
    obtenerMios(duenoId) {
        return this.prisma.negocio.findMany({
            where: { duenoId },
            orderBy: { id: 'asc' },
        });
    }
    async catalogo(negocioId) {
        const negocio = await this.prisma.negocio.findUnique({
            where: { id: negocioId },
            select: { id: true, nombre: true, descripcion: true },
        });
        if (!negocio) {
            throw new common_1.NotFoundException('El negocio no existe');
        }
        const servicios = await this.prisma.servicio.findMany({
            where: { negocioId, activo: true },
            select: { id: true, nombre: true, duracionMin: true, precio: true },
            orderBy: { id: 'asc' },
        });
        const profesionales = await this.prisma.profesional.findMany({
            where: { negocioId, activo: true },
            select: {
                id: true,
                nombre: true,
                especialidad: true,
                servicios: { select: { servicioId: true } },
            },
            orderBy: { id: 'asc' },
        });
        return {
            negocio,
            servicios,
            profesionales: profesionales.map((p) => ({
                id: p.id,
                nombre: p.nombre,
                especialidad: p.especialidad,
                servicioIds: p.servicios.map((s) => s.servicioId),
            })),
        };
    }
    async obtenerUno(id, duenoId) {
        const negocio = await this.prisma.negocio.findUnique({
            where: { id },
            include: { configuracion: true, suscripcion: true },
        });
        if (!negocio) {
            throw new common_1.NotFoundException('El negocio no existe');
        }
        if (negocio.duenoId !== duenoId) {
            throw new common_1.ForbiddenException('Este negocio no es tuyo');
        }
        return negocio;
    }
};
exports.NegociosService = NegociosService;
exports.NegociosService = NegociosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], NegociosService);
//# sourceMappingURL=negocios.service.js.map