import { PrismaService } from '../prisma/prisma.service';
import { CrearTransaccionDto } from './dto/crear-transaccion.dto';
import { ActualizarTransaccionDto } from './dto/actualizar-transaccion.dto';
export declare class TransaccionesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    crear(dto: CrearTransaccionDto, usuarioId: number): import("../generated/prisma/models").Prisma__TransaccionClient<{
        categoria: {
            nombre: string;
            id: number;
            creadoEn: Date;
        };
    } & {
        id: number;
        descripcion: string;
        monto: import("@prisma/client-runtime-utils").Decimal;
        tipo: import("../generated/prisma/enums").TipoTransaccion;
        categoriaId: number;
        fecha: Date;
        usuarioId: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    obtenerMias(usuarioId: number): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        categoria: {
            nombre: string;
            id: number;
            creadoEn: Date;
        };
    } & {
        id: number;
        descripcion: string;
        monto: import("@prisma/client-runtime-utils").Decimal;
        tipo: import("../generated/prisma/enums").TipoTransaccion;
        categoriaId: number;
        fecha: Date;
        usuarioId: number;
    })[]>;
    obtenerUna(id: number, usuarioId: number): Promise<{
        categoria: {
            nombre: string;
            id: number;
            creadoEn: Date;
        };
    } & {
        id: number;
        descripcion: string;
        monto: import("@prisma/client-runtime-utils").Decimal;
        tipo: import("../generated/prisma/enums").TipoTransaccion;
        categoriaId: number;
        fecha: Date;
        usuarioId: number;
    }>;
    actualizar(id: number, dto: ActualizarTransaccionDto, usuarioId: number): Promise<{
        categoria: {
            nombre: string;
            id: number;
            creadoEn: Date;
        };
    } & {
        id: number;
        descripcion: string;
        monto: import("@prisma/client-runtime-utils").Decimal;
        tipo: import("../generated/prisma/enums").TipoTransaccion;
        categoriaId: number;
        fecha: Date;
        usuarioId: number;
    }>;
    eliminar(id: number, usuarioId: number): Promise<{
        id: number;
        descripcion: string;
        monto: import("@prisma/client-runtime-utils").Decimal;
        tipo: import("../generated/prisma/enums").TipoTransaccion;
        categoriaId: number;
        fecha: Date;
        usuarioId: number;
    }>;
}
