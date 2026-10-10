import { PerfilesService } from './perfiles.service';
import { ActualizarPerfilDto } from './dto/actualizar-perfil.dto';
export declare class PerfilesController {
    private readonly perfilesService;
    constructor(perfilesService: PerfilesService);
    obtenerMio(usuario: {
        id: number;
    }): import("../generated/prisma/models").Prisma__UsuarioClient<{
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
    actualizarMio(usuario: {
        id: number;
    }, dto: ActualizarPerfilDto): import("../generated/prisma/models").Prisma__PerfilClient<{
        id: number;
        telefono: string | null;
        bio: string | null;
        avatarUrl: string | null;
        usuarioId: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
}
