export declare const Rol: {
    readonly DUENO: "DUENO";
    readonly STAFF: "STAFF";
    readonly CLIENTE: "CLIENTE";
};
export type Rol = (typeof Rol)[keyof typeof Rol];
export declare const EstadoCita: {
    readonly PENDIENTE: "PENDIENTE";
    readonly CONFIRMADA: "CONFIRMADA";
    readonly CANCELADA: "CANCELADA";
    readonly COMPLETADA: "COMPLETADA";
};
export type EstadoCita = (typeof EstadoCita)[keyof typeof EstadoCita];
export declare const Plan: {
    readonly FREE: "FREE";
    readonly PRO: "PRO";
};
export type Plan = (typeof Plan)[keyof typeof Plan];
export declare const EstadoSuscripcion: {
    readonly ACTIVA: "ACTIVA";
    readonly CANCELADA: "CANCELADA";
    readonly VENCIDA: "VENCIDA";
};
export type EstadoSuscripcion = (typeof EstadoSuscripcion)[keyof typeof EstadoSuscripcion];
