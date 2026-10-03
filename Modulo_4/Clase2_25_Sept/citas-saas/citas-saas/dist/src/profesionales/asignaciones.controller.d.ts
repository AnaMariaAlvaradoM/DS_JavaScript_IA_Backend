import { ProfesionalesService } from './profesionales.service';
import { AsignarServicioDto } from './dto/asignar-servicio.dto';
export declare class AsignacionesController {
    private readonly profesionalesService;
    constructor(profesionalesService: ProfesionalesService);
    asignar(profesionalId: number, usuario: {
        id: number;
    }, dto: AsignarServicioDto): Promise<{
        servicioId: number;
        profesionalId: number;
    }>;
    listar(profesionalId: number, usuario: {
        id: number;
    }): Promise<{
        nombre: string;
        id: number;
        creadoEn: Date;
        negocioId: number;
        activo: boolean;
        duracionMin: number;
        precio: import("@prisma/client-runtime-utils").Decimal;
    }[]>;
    quitar(profesionalId: number, servicioId: number, usuario: {
        id: number;
    }): Promise<{
        mensaje: string;
    }>;
}
