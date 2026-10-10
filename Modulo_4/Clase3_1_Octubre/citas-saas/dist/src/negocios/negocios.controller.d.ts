import { NegociosService } from './negocios.service';
import { CrearNegocioDto } from './dto/crear-negocio.dto';
export declare class NegociosController {
    private readonly negociosService;
    constructor(negociosService: NegociosService);
    crear(dto: CrearNegocioDto, usuario: {
        id: number;
    }): Promise<{
        suscripcion: {
            id: number;
            creadoEn: Date;
            plan: import("../generated/prisma/enums").Plan;
            estado: import("../generated/prisma/enums").EstadoSuscripcion;
            stripeCustomerId: string | null;
            stripeSubscriptionId: string | null;
            vigenteHasta: Date | null;
            negocioId: number;
        } | null;
        configuracion: {
            id: number;
            horaApertura: string;
            horaCierre: string;
            zonaHoraria: string;
            duracionDefault: number;
            actualizadoEn: Date;
            negocioId: number;
        } | null;
    } & {
        nombre: string;
        id: number;
        creadoEn: Date;
        descripcion: string | null;
        telefono: string | null;
        direccion: string | null;
        duenoId: number;
    }>;
    obtenerMios(usuario: {
        id: number;
    }): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        nombre: string;
        id: number;
        creadoEn: Date;
        descripcion: string | null;
        telefono: string | null;
        direccion: string | null;
        duenoId: number;
    }[]>;
    obtenerUno(id: number, usuario: {
        id: number;
    }): Promise<{
        suscripcion: {
            id: number;
            creadoEn: Date;
            plan: import("../generated/prisma/enums").Plan;
            estado: import("../generated/prisma/enums").EstadoSuscripcion;
            stripeCustomerId: string | null;
            stripeSubscriptionId: string | null;
            vigenteHasta: Date | null;
            negocioId: number;
        } | null;
        configuracion: {
            id: number;
            horaApertura: string;
            horaCierre: string;
            zonaHoraria: string;
            duracionDefault: number;
            actualizadoEn: Date;
            negocioId: number;
        } | null;
    } & {
        nombre: string;
        id: number;
        creadoEn: Date;
        descripcion: string | null;
        telefono: string | null;
        direccion: string | null;
        duenoId: number;
    }>;
}
