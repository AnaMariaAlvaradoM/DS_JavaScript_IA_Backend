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
exports.ProfesionalesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ProfesionalesService = class ProfesionalesService {
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
    async obtenerProfesionalPropio(profesionalId, duenoId) {
        const profesional = await this.prisma.profesional.findUnique({
            where: { id: profesionalId },
            include: { negocio: true },
        });
        if (!profesional) {
            throw new common_1.NotFoundException('El profesional no existe');
        }
        if (profesional.negocio.duenoId !== duenoId) {
            throw new common_1.ForbiddenException('Este profesional no es tuyo');
        }
        return profesional;
    }
    async crear(negocioId, duenoId, dto) {
        await this.verificarNegocioPropio(negocioId, duenoId);
        return this.prisma.profesional.create({
            data: {
                nombre: dto.nombre,
                especialidad: dto.especialidad,
                negocioId,
            },
        });
    }
    async listarPorNegocio(negocioId, duenoId) {
        await this.verificarNegocioPropio(negocioId, duenoId);
        return this.prisma.profesional.findMany({
            where: { negocioId },
            orderBy: { id: 'asc' },
        });
    }
    async asignarServicio(profesionalId, servicioId, duenoId) {
        const profesional = await this.obtenerProfesionalPropio(profesionalId, duenoId);
        const servicio = await this.prisma.servicio.findUnique({
            where: { id: servicioId },
        });
        if (!servicio) {
            throw new common_1.NotFoundException('El servicio no existe');
        }
        if (servicio.negocioId !== profesional.negocioId) {
            throw new common_1.BadRequestException('El servicio y el profesional deben pertenecer al mismo negocio');
        }
        const yaAsignado = await this.prisma.servicioProfesional.findUnique({
            where: { servicioId_profesionalId: { servicioId, profesionalId } },
        });
        if (yaAsignado) {
            throw new common_1.ConflictException('El profesional ya ofrece este servicio');
        }
        return this.prisma.servicioProfesional.create({
            data: { servicioId, profesionalId },
        });
    }
    async quitarServicio(profesionalId, servicioId, duenoId) {
        await this.obtenerProfesionalPropio(profesionalId, duenoId);
        const asignacion = await this.prisma.servicioProfesional.findUnique({
            where: { servicioId_profesionalId: { servicioId, profesionalId } },
        });
        if (!asignacion) {
            throw new common_1.NotFoundException('El profesional no ofrece este servicio');
        }
        await this.prisma.servicioProfesional.delete({
            where: { servicioId_profesionalId: { servicioId, profesionalId } },
        });
        return { mensaje: 'Servicio retirado del profesional' };
    }
    async listarServicios(profesionalId, duenoId) {
        await this.obtenerProfesionalPropio(profesionalId, duenoId);
        const asignaciones = await this.prisma.servicioProfesional.findMany({
            where: { profesionalId },
            include: { servicio: true },
            orderBy: { servicioId: 'asc' },
        });
        return asignaciones.map((a) => a.servicio);
    }
};
exports.ProfesionalesService = ProfesionalesService;
exports.ProfesionalesService = ProfesionalesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProfesionalesService);
//# sourceMappingURL=profesionales.service.js.map