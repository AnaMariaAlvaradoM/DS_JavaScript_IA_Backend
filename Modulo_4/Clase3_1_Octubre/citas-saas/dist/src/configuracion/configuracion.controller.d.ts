import { ConfiguracionService } from './configuracion.service';
import { ActualizarConfiguracionDto } from './dto/actualizar-configuracion.dto';
export declare class ConfiguracionController {
    private readonly configuracionService;
    constructor(configuracionService: ConfiguracionService);
    obtener(negocioId: number, usuario: {
        id: number;
    }): Promise<{
        id: number;
        horaApertura: string;
        horaCierre: string;
        zonaHoraria: string;
        duracionDefault: number;
        actualizadoEn: Date;
        negocioId: number;
    } | null>;
    actualizar(negocioId: number, usuario: {
        id: number;
    }, dto: ActualizarConfiguracionDto): Promise<{
        id: number;
        horaApertura: string;
        horaCierre: string;
        zonaHoraria: string;
        duracionDefault: number;
        actualizadoEn: Date;
        negocioId: number;
    }>;
}
