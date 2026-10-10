import { PrismaService } from '../prisma/prisma.service';
import { CrearProfesionalDto } from './dto/crear-profesional.dto';
export declare class ProfesionalesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private verificarNegocioPropio;
    private obtenerProfesionalPropio;
    crear(negocioId: number, duenoId: number, dto: CrearProfesionalDto): Promise<{
        nombre: string;
        id: number;
        creadoEn: Date;
        negocioId: number;
        activo: boolean;
        especialidad: string | null;
    }>;
    listarPorNegocio(negocioId: number, duenoId: number): Promise<{
        nombre: string;
        id: number;
        creadoEn: Date;
        negocioId: number;
        activo: boolean;
        especialidad: string | null;
    }[]>;
    asignarServicio(profesionalId: number, servicioId: number, duenoId: number): Promise<{
        servicioId: number;
        profesionalId: number;
    }>;
    quitarServicio(profesionalId: number, servicioId: number, duenoId: number): Promise<{
        mensaje: string;
    }>;
    listarServicios(profesionalId: number, duenoId: number): Promise<{
        nombre: string;
        id: number;
        creadoEn: Date;
        negocioId: number;
        duracionMin: number;
        precio: import("@prisma/client-runtime-utils").Decimal;
        activo: boolean;
    }[]>;
}
