import { ServiciosService } from './servicios.service';
import { CrearServicioDto } from './dto/crear-servicio.dto';
export declare class ServiciosController {
    private readonly serviciosService;
    constructor(serviciosService: ServiciosService);
    crear(negocioId: number, usuario: {
        id: number;
    }, dto: CrearServicioDto): Promise<{
        nombre: string;
        id: number;
        creadoEn: Date;
        negocioId: number;
        duracionMin: number;
        precio: import("@prisma/client-runtime-utils").Decimal;
        activo: boolean;
    }>;
    listar(negocioId: number, usuario: {
        id: number;
    }): Promise<{
        nombre: string;
        id: number;
        creadoEn: Date;
        negocioId: number;
        duracionMin: number;
        precio: import("@prisma/client-runtime-utils").Decimal;
        activo: boolean;
    }[]>;
}
