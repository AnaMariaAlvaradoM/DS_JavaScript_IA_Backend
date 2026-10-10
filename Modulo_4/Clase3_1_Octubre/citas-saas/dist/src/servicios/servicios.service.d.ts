import { PrismaService } from '../prisma/prisma.service';
import { CrearServicioDto } from './dto/crear-servicio.dto';
export declare class ServiciosService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private verificarNegocioPropio;
    crear(negocioId: number, duenoId: number, dto: CrearServicioDto): Promise<{
        nombre: string;
        id: number;
        creadoEn: Date;
        negocioId: number;
        duracionMin: number;
        precio: import("@prisma/client-runtime-utils").Decimal;
        activo: boolean;
    }>;
    listarPorNegocio(negocioId: number, duenoId: number): Promise<{
        nombre: string;
        id: number;
        creadoEn: Date;
        negocioId: number;
        duracionMin: number;
        precio: import("@prisma/client-runtime-utils").Decimal;
        activo: boolean;
    }[]>;
}
