import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Usuario: "Usuario";
    readonly Perfil: "Perfil";
    readonly Negocio: "Negocio";
    readonly Profesional: "Profesional";
    readonly Servicio: "Servicio";
    readonly ServicioProfesional: "ServicioProfesional";
    readonly Cita: "Cita";
    readonly Suscripcion: "Suscripcion";
    readonly Configuracion: "Configuracion";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UsuarioScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly email: "email";
    readonly password: "password";
    readonly rol: "rol";
    readonly creadoEn: "creadoEn";
};
export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum];
export declare const PerfilScalarFieldEnum: {
    readonly id: "id";
    readonly telefono: "telefono";
    readonly bio: "bio";
    readonly avatarUrl: "avatarUrl";
    readonly usuarioId: "usuarioId";
};
export type PerfilScalarFieldEnum = (typeof PerfilScalarFieldEnum)[keyof typeof PerfilScalarFieldEnum];
export declare const NegocioScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly descripcion: "descripcion";
    readonly telefono: "telefono";
    readonly direccion: "direccion";
    readonly creadoEn: "creadoEn";
    readonly duenoId: "duenoId";
};
export type NegocioScalarFieldEnum = (typeof NegocioScalarFieldEnum)[keyof typeof NegocioScalarFieldEnum];
export declare const ProfesionalScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly especialidad: "especialidad";
    readonly activo: "activo";
    readonly creadoEn: "creadoEn";
    readonly negocioId: "negocioId";
};
export type ProfesionalScalarFieldEnum = (typeof ProfesionalScalarFieldEnum)[keyof typeof ProfesionalScalarFieldEnum];
export declare const ServicioScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly duracionMin: "duracionMin";
    readonly precio: "precio";
    readonly activo: "activo";
    readonly creadoEn: "creadoEn";
    readonly negocioId: "negocioId";
};
export type ServicioScalarFieldEnum = (typeof ServicioScalarFieldEnum)[keyof typeof ServicioScalarFieldEnum];
export declare const ServicioProfesionalScalarFieldEnum: {
    readonly servicioId: "servicioId";
    readonly profesionalId: "profesionalId";
};
export type ServicioProfesionalScalarFieldEnum = (typeof ServicioProfesionalScalarFieldEnum)[keyof typeof ServicioProfesionalScalarFieldEnum];
export declare const CitaScalarFieldEnum: {
    readonly id: "id";
    readonly fecha: "fecha";
    readonly estado: "estado";
    readonly notas: "notas";
    readonly creadoEn: "creadoEn";
    readonly negocioId: "negocioId";
    readonly clienteId: "clienteId";
    readonly servicioId: "servicioId";
    readonly profesionalId: "profesionalId";
};
export type CitaScalarFieldEnum = (typeof CitaScalarFieldEnum)[keyof typeof CitaScalarFieldEnum];
export declare const SuscripcionScalarFieldEnum: {
    readonly id: "id";
    readonly plan: "plan";
    readonly estado: "estado";
    readonly stripeCustomerId: "stripeCustomerId";
    readonly stripeSubscriptionId: "stripeSubscriptionId";
    readonly vigenteHasta: "vigenteHasta";
    readonly creadoEn: "creadoEn";
    readonly negocioId: "negocioId";
};
export type SuscripcionScalarFieldEnum = (typeof SuscripcionScalarFieldEnum)[keyof typeof SuscripcionScalarFieldEnum];
export declare const ConfiguracionScalarFieldEnum: {
    readonly id: "id";
    readonly horaApertura: "horaApertura";
    readonly horaCierre: "horaCierre";
    readonly zonaHoraria: "zonaHoraria";
    readonly duracionDefault: "duracionDefault";
    readonly actualizadoEn: "actualizadoEn";
    readonly negocioId: "negocioId";
};
export type ConfiguracionScalarFieldEnum = (typeof ConfiguracionScalarFieldEnum)[keyof typeof ConfiguracionScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
