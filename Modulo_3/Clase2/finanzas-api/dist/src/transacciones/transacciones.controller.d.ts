import { TransaccionesService } from './transacciones.service';
import { CrearTransaccionDto } from './dto/crear-transaccion.dto';
import { ActualizarTransaccionDto } from './dto/actualizar-transaccion.dto';
export declare class TransaccionesController {
    private readonly transaccionesService;
    constructor(transaccionesService: TransaccionesService);
    crear(dto: CrearTransaccionDto, usuario: {
        id: number;
    }): import("../generated/prisma/models").Prisma__TransaccionClient<{
        categoria: {
            id: number;
            nombre: string;
            creadoEn: Date;
        };
    } & {
        descripcion: string;
        monto: import("@prisma/client-runtime-utils").Decimal;
        tipo: import("../generated/prisma/enums").TipoTransaccion;
        fecha: Date;
        id: number;
        categoriaId: number;
        usuarioId: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    obtenerMias(usuario: {
        id: number;
    }): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        categoria: {
            id: number;
            nombre: string;
            creadoEn: Date;
        };
    } & {
        descripcion: string;
        monto: import("@prisma/client-runtime-utils").Decimal;
        tipo: import("../generated/prisma/enums").TipoTransaccion;
        fecha: Date;
        id: number;
        categoriaId: number;
        usuarioId: number;
    })[]>;
    obtenerTodasAdmin(): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        categoria: {
            id: number;
            nombre: string;
            creadoEn: Date;
        };
        usuario: {
            id: number;
            nombre: string;
            email: string;
        };
    } & {
        descripcion: string;
        monto: import("@prisma/client-runtime-utils").Decimal;
        tipo: import("../generated/prisma/enums").TipoTransaccion;
        fecha: Date;
        id: number;
        categoriaId: number;
        usuarioId: number;
    })[]>;
    obtenerUna(id: number, usuario: {
        id: number;
    }): Promise<{
        categoria: {
            id: number;
            nombre: string;
            creadoEn: Date;
        };
    } & {
        descripcion: string;
        monto: import("@prisma/client-runtime-utils").Decimal;
        tipo: import("../generated/prisma/enums").TipoTransaccion;
        fecha: Date;
        id: number;
        categoriaId: number;
        usuarioId: number;
    }>;
    actualizar(id: number, dto: ActualizarTransaccionDto, usuario: {
        id: number;
    }): Promise<{
        categoria: {
            id: number;
            nombre: string;
            creadoEn: Date;
        };
    } & {
        descripcion: string;
        monto: import("@prisma/client-runtime-utils").Decimal;
        tipo: import("../generated/prisma/enums").TipoTransaccion;
        fecha: Date;
        id: number;
        categoriaId: number;
        usuarioId: number;
    }>;
    eliminar(id: number, usuario: {
        id: number;
    }): Promise<{
        descripcion: string;
        monto: import("@prisma/client-runtime-utils").Decimal;
        tipo: import("../generated/prisma/enums").TipoTransaccion;
        fecha: Date;
        id: number;
        categoriaId: number;
        usuarioId: number;
    }>;
}
