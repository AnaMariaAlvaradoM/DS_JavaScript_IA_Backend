import { PrismaService } from '../prisma/prisma.service';
import { CrearCategoriaDto } from './dto/crear-categoria.dto';
import { ActualizarCategoriaDto } from './dto/actualizar-categoria.dto';
export declare class CategoriasService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    crear(dto: CrearCategoriaDto): import("../generated/prisma/models").Prisma__CategoriaClient<{
        nombre: string;
        id: number;
        creadoEn: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    obtenerTodas(): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        nombre: string;
        id: number;
        creadoEn: Date;
    }[]>;
    obtenerUna(id: number): import("../generated/prisma/models").Prisma__CategoriaClient<{
        nombre: string;
        id: number;
        creadoEn: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    actualizar(id: number, dto: ActualizarCategoriaDto): import("../generated/prisma/models").Prisma__CategoriaClient<{
        nombre: string;
        id: number;
        creadoEn: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    eliminar(id: number): import("../generated/prisma/models").Prisma__CategoriaClient<{
        nombre: string;
        id: number;
        creadoEn: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
}
