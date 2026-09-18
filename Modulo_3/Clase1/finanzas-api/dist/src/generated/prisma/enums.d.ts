export declare const TipoTransaccion: {
    readonly INGRESO: "INGRESO";
    readonly GASTO: "GASTO";
};
export type TipoTransaccion = (typeof TipoTransaccion)[keyof typeof TipoTransaccion];
