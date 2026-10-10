import { PrismaService } from '../prisma/prisma.service';
import { ActualizarConfiguracionDto } from './dto/actualizar-configuracion.dto';
export declare class ConfiguracionService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private verificarNegocioPropio;
    obtener(negocioId: number, duenoId: number): Promise<{
        id: number;
        horaApertura: string;
        horaCierre: string;
        zonaHoraria: string;
        duracionDefault: number;
        actualizadoEn: Date;
        negocioId: number;
    } | null>;
    actualizar(negocioId: number, duenoId: number, dto: ActualizarConfiguracionDto): Promise<{
        id: number;
        horaApertura: string;
        horaCierre: string;
        zonaHoraria: string;
        duracionDefault: number;
        actualizadoEn: Date;
        negocioId: number;
    }>;
}
