import { PrismaService } from '../prisma/prisma.service';
import { CrearNegocioDto } from './dto/crear-negocio.dto';
export declare class NegociosService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    crear(dto: CrearNegocioDto, duenoId: number): Promise<{
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
    obtenerMios(duenoId: number): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        nombre: string;
        id: number;
        creadoEn: Date;
        descripcion: string | null;
        telefono: string | null;
        direccion: string | null;
        duenoId: number;
    }[]>;
    obtenerUno(id: number, duenoId: number): Promise<{
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
