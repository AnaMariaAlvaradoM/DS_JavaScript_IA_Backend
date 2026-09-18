import { TipoTransaccionDto } from './crear-transaccion.dto';
export declare class FiltrarTransaccionesDto {
    tipo?: TipoTransaccionDto;
    desde?: string;
    hasta?: string;
    pagina?: number;
    limite?: number;
}
