import { CitasService } from './citas.service';
import { CrearCitaDto } from './dto/crear-cita.dto';
export declare class CitasController {
    private readonly citasService;
    constructor(citasService: CitasService);
    reservar(negocioId: number, usuario: {
        id: number;
    }, dto: CrearCitaDto): Promise<{
        id: number;
        creadoEn: Date;
        estado: import("../generated/prisma/enums").EstadoCita;
        negocioId: number;
        servicioId: number;
        profesionalId: number;
        fecha: Date;
        notas: string | null;
        clienteId: number;
    }>;
    listarDelNegocio(negocioId: number, usuario: {
        id: number;
    }): Promise<({
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
        estado: import("../generated/prisma/enums").EstadoCita;
        negocioId: number;
        servicioId: number;
        profesionalId: number;
        fecha: Date;
        notas: string | null;
        clienteId: number;
    })[]>;
}
