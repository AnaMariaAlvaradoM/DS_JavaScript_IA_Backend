import { CitasService } from './citas.service';
export declare class MisCitasController {
    private readonly citasService;
    constructor(citasService: CitasService);
    listar(usuario: {
        id: number;
    }): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<({
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
        estado: import("../generated/prisma/enums").EstadoCita;
        negocioId: number;
        servicioId: number;
        profesionalId: number;
        fecha: Date;
        notas: string | null;
        clienteId: number;
    })[]>;
}
