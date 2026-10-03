import { ProfesionalesService } from './profesionales.service';
import { CrearProfesionalDto } from './dto/crear-profesional.dto';
export declare class ProfesionalesController {
    private readonly profesionalesService;
    constructor(profesionalesService: ProfesionalesService);
    crear(negocioId: number, usuario: {
        id: number;
    }, dto: CrearProfesionalDto): Promise<{
        nombre: string;
        id: number;
        creadoEn: Date;
        negocioId: number;
        especialidad: string | null;
        activo: boolean;
    }>;
    listar(negocioId: number, usuario: {
        id: number;
    }): Promise<{
        nombre: string;
        id: number;
        creadoEn: Date;
        negocioId: number;
        especialidad: string | null;
        activo: boolean;
    }[]>;
}
