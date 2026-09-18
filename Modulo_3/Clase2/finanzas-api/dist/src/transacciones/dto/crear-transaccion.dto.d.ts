export declare enum TipoTransaccionDto {
    INGRESO = "INGRESO",
    GASTO = "GASTO"
}
export declare class CrearTransaccionDto {
    descripcion: string;
    monto: number;
    tipo: TipoTransaccionDto;
    categoriaId: number;
}
