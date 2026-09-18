import { Prisma } from '../generated/prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CrearTransaccionDto } from './dto/crear-transaccion.dto';
import { ActualizarTransaccionDto } from './dto/actualizar-transaccion.dto';
import { FiltrarTransaccionesDto } from './dto/filtrar-transacciones.dto';
export declare class TransaccionesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    crear(dto: CrearTransaccionDto, usuarioId: number): Prisma.Prisma__TransaccionClient<{
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
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    obtenerMias(usuarioId: number, filtros: FiltrarTransaccionesDto): Promise<{
        datos: ({
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
        })[];
        meta: {
            pagina: number;
            limite: number;
            total: number;
            totalPaginas: number;
        };
    }>;
    obtenerTodasAdmin(): Prisma.PrismaPromise<({
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
    obtenerTodasAdminConFiltros(filtros: FiltrarTransaccionesDto): Promise<{
        datos: ({
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
        })[];
        meta: {
            pagina: number;
            limite: number;
            total: number;
            totalPaginas: number;
        };
    }>;
    obtenerUna(id: number, usuarioId: number): Promise<{
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
    actualizar(id: number, dto: ActualizarTransaccionDto, usuarioId: number): Promise<{
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
    eliminar(id: number, usuarioId: number): Promise<{
        descripcion: string;
        monto: import("@prisma/client-runtime-utils").Decimal;
        tipo: import("../generated/prisma/enums").TipoTransaccion;
        fecha: Date;
        id: number;
        categoriaId: number;
        usuarioId: number;
    }>;
}
