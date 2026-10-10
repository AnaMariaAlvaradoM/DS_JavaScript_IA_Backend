import { PrismaService } from '../prisma/prisma.service';
export declare class AsistenteIaService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    generarMensajeCita(negocioId: number, citaId: number): Promise<{
        modo: string;
        mensaje: string;
    }>;
    private llamarIA;
}
