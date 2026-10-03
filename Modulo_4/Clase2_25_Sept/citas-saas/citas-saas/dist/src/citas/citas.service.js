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
exports.CitasService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("../generated/prisma/client");
let CitasService = class CitasService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async crear(negocioId, clienteId, dto) {
        const negocio = await this.prisma.negocio.findUnique({
            where: { id: negocioId },
        });
        if (!negocio) {
            throw new common_1.NotFoundException('El negocio no existe');
        }
        const servicio = await this.prisma.servicio.findUnique({
            where: { id: dto.servicioId },
        });
        if (!servicio || servicio.negocioId !== negocioId) {
            throw new common_1.BadRequestException('El servicio no pertenece a este negocio');
        }
        const profesional = await this.prisma.profesional.findUnique({
            where: { id: dto.profesionalId },
        });
        if (!profesional || profesional.negocioId !== negocioId) {
            throw new common_1.BadRequestException('El profesional no pertenece a este negocio');
        }
        const ofrece = await this.prisma.servicioProfesional.findUnique({
            where: {
                servicioId_profesionalId: {
                    servicioId: dto.servicioId,
                    profesionalId: dto.profesionalId,
                },
            },
        });
        if (!ofrece) {
            throw new common_1.BadRequestException('El profesional no ofrece el servicio seleccionado');
        }
        const inicio = new Date(dto.fecha);
        const fin = new Date(inicio.getTime() + servicio.duracionMin * 60000);
        const citasProfesional = await this.prisma.cita.findMany({
            where: {
                profesionalId: dto.profesionalId,
                estado: { not: client_1.EstadoCita.CANCELADA },
            },
            include: { servicio: true },
        });
        const hayCruce = citasProfesional.some((c) => {
            const cInicio = new Date(c.fecha);
            const cFin = new Date(cInicio.getTime() + c.servicio.duracionMin * 60000);
            return cInicio < fin && inicio < cFin;
        });
        if (hayCruce) {
            throw new common_1.ConflictException('El profesional ya tiene una cita en ese horario');
        }
        return this.prisma.cita.create({
            data: {
                fecha: inicio,
                notas: dto.notas,
                negocioId,
                clienteId,
                servicioId: dto.servicioId,
                profesionalId: dto.profesionalId,
            },
        });
    }
    async listarPorNegocio(negocioId, duenoId) {
        const negocio = await this.prisma.negocio.findUnique({
            where: { id: negocioId },
        });
        if (!negocio) {
            throw new common_1.NotFoundException('El negocio no existe');
        }
        if (negocio.duenoId !== duenoId) {
            throw new common_1.ForbiddenException('Este negocio no es tuyo');
        }
        return this.prisma.cita.findMany({
            where: { negocioId },
            include: {
                cliente: { select: { id: true, nombre: true } },
                servicio: { select: { id: true, nombre: true, duracionMin: true } },
                profesional: { select: { id: true, nombre: true } },
            },
            orderBy: { fecha: 'asc' },
        });
    }
    listarMias(clienteId) {
        return this.prisma.cita.findMany({
            where: { clienteId },
            include: {
                negocio: { select: { id: true, nombre: true } },
                servicio: { select: { id: true, nombre: true } },
                profesional: { select: { id: true, nombre: true } },
            },
            orderBy: { fecha: 'asc' },
        });
    }
};
exports.CitasService = CitasService;
exports.CitasService = CitasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CitasService);
//# sourceMappingURL=citas.service.js.map