import { PrismaService } from '../prisma/prisma.service';
import { EstadoCita } from '../generated/prisma/client';
import { CrearCitaDto } from './dto/crear-cita.dto';
export declare class CitasService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    crear(negocioId: number, clienteId: number, dto: CrearCitaDto): Promise<{
        id: number;
        creadoEn: Date;
        estado: EstadoCita;
        negocioId: number;
        servicioId: number;
        profesionalId: number;
        fecha: Date;
        notas: string | null;
        clienteId: number;
    }>;
    listarPorNegocio(negocioId: number, duenoId: number): Promise<({
        profesional: {
            nombre: string;
            id: number;
        };
        servicio: {
            nombre: string;
            id: number;
            duracionMin: number;
        };
        cliente: {
            nombre: string;
            id: number;
        };
    } & {
        id: number;
        creadoEn: Date;
        estado: EstadoCita;
        negocioId: number;
        servicioId: number;
        profesionalId: number;
        fecha: Date;
        notas: string | null;
        clienteId: number;
    })[]>;
    listarMias(clienteId: number): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        negocio: {
            nombre: string;
            id: number;
        };
        profesional: {
            nombre: string;
            id: number;
        };
        servicio: {
            nombre: string;
            id: number;
        };
    } & {
        id: number;
        creadoEn: Date;
        estado: EstadoCita;
        negocioId: number;
        servicioId: number;
        profesionalId: number;
        fecha: Date;
        notas: string | null;
        clienteId: number;
    })[]>;
}
