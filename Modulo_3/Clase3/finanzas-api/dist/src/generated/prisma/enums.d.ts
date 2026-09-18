export declare const TipoTransaccion: {
    readonly INGRESO: "INGRESO";
    readonly GASTO: "GASTO";
};
export type TipoTransaccion = (typeof TipoTransaccion)[keyof typeof TipoTransaccion];
export declare const Rol: {
    readonly USUARIO: "USUARIO";
    readonly ADMIN: "ADMIN";
};
export type Rol = (typeof Rol)[keyof typeof Rol];
