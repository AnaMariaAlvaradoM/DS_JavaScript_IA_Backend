import { PrismaService } from '../prisma/prisma.service';
import { ActualizarPerfilDto } from './dto/actualizar-perfil.dto';
export declare class PerfilesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    obtenerMio(usuarioId: number): import("../generated/prisma/models").Prisma__UsuarioClient<{
        perfil: {
            id: number;
            telefono: string | null;
            bio: string | null;
            avatarUrl: string | null;
            usuarioId: number;
        } | null;
        nombre: string;
        email: string;
        id: number;
        rol: import("../generated/prisma/enums").Rol;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    actualizarMio(usuarioId: number, dto: ActualizarPerfilDto): import("../generated/prisma/models").Prisma__PerfilClient<{
        id: number;
        telefono: string | null;
        bio: string | null;
        avatarUrl: string | null;
        usuarioId: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
}
