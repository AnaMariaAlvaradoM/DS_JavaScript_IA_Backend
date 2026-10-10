import { NegociosService } from './negocios.service';
export declare class CatalogoController {
    private readonly negociosService;
    constructor(negociosService: NegociosService);
    obtener(negocioId: number): Promise<{
        negocio: {
            nombre: string;
            id: number;
            descripcion: string | null;
        };
        servicios: {
            nombre: string;
            id: number;
            duracionMin: number;
            precio: import("@prisma/client-runtime-utils").Decimal;
        }[];
        profesionales: {
            id: number;
            nombre: string;
            especialidad: string | null;
            servicioIds: number[];
        }[];
    }>;
}
