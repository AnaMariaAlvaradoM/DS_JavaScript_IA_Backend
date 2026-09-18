import { TipoTransaccionDto } from './crear-transaccion.dto';
export declare class ActualizarTransaccionDto {
    descripcion?: string;
    monto?: number;
    tipo?: TipoTransaccionDto;
    categoriaId?: number;
}
