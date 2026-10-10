"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineExtension = exports.NullsOrder = exports.QueryMode = exports.SortOrder = exports.ConfiguracionScalarFieldEnum = exports.SuscripcionScalarFieldEnum = exports.CitaScalarFieldEnum = exports.ServicioProfesionalScalarFieldEnum = exports.ServicioScalarFieldEnum = exports.ProfesionalScalarFieldEnum = exports.NegocioScalarFieldEnum = exports.PerfilScalarFieldEnum = exports.UsuarioScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.prismaVersion = exports.getExtensionContext = exports.Decimal = exports.Sql = exports.raw = exports.join = exports.empty = exports.sql = exports.PrismaClientValidationError = exports.PrismaClientInitializationError = exports.PrismaClientRustPanicError = exports.PrismaClientUnknownRequestError = exports.PrismaClientKnownRequestError = void 0;
const runtime = __importStar(require("@prisma/client/runtime/client"));
exports.PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
exports.PrismaClientInitializationError = runtime.PrismaClientInitializationError;
exports.PrismaClientValidationError = runtime.PrismaClientValidationError;
exports.sql = runtime.sqltag;
exports.empty = runtime.empty;
exports.join = runtime.join;
exports.raw = runtime.raw;
exports.Sql = runtime.Sql;
exports.Decimal = runtime.Decimal;
exports.getExtensionContext = runtime.Extensions.getExtensionContext;
exports.prismaVersion = {
    client: "7.10.0",
    engine: "0edf323efd1d98336f3f0a68684b56f689b900d3"
};
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    Usuario: 'Usuario',
    Perfil: 'Perfil',
    Negocio: 'Negocio',
    Profesional: 'Profesional',
    Servicio: 'Servicio',
    ServicioProfesional: 'ServicioProfesional',
    Cita: 'Cita',
    Suscripcion: 'Suscripcion',
    Configuracion: 'Configuracion'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.UsuarioScalarFieldEnum = {
    id: 'id',
    nombre: 'nombre',
    email: 'email',
    password: 'password',
    rol: 'rol',
    creadoEn: 'creadoEn'
};
exports.PerfilScalarFieldEnum = {
    id: 'id',
    telefono: 'telefono',
    bio: 'bio',
    avatarUrl: 'avatarUrl',
    usuarioId: 'usuarioId'
};
exports.NegocioScalarFieldEnum = {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    telefono: 'telefono',
    direccion: 'direccion',
    creadoEn: 'creadoEn',
    duenoId: 'duenoId'
};
exports.ProfesionalScalarFieldEnum = {
    id: 'id',
    nombre: 'nombre',
    especialidad: 'especialidad',
    activo: 'activo',
    creadoEn: 'creadoEn',
    negocioId: 'negocioId'
};
exports.ServicioScalarFieldEnum = {
    id: 'id',
    nombre: 'nombre',
    duracionMin: 'duracionMin',
    precio: 'precio',
    activo: 'activo',
    creadoEn: 'creadoEn',
    negocioId: 'negocioId'
};
exports.ServicioProfesionalScalarFieldEnum = {
    servicioId: 'servicioId',
    profesionalId: 'profesionalId'
};
exports.CitaScalarFieldEnum = {
    id: 'id',
    fecha: 'fecha',
    estado: 'estado',
    notas: 'notas',
    creadoEn: 'creadoEn',
    negocioId: 'negocioId',
    clienteId: 'clienteId',
    servicioId: 'servicioId',
    profesionalId: 'profesionalId'
};
exports.SuscripcionScalarFieldEnum = {
    id: 'id',
    plan: 'plan',
    estado: 'estado',
    stripeCustomerId: 'stripeCustomerId',
    stripeSubscriptionId: 'stripeSubscriptionId',
    vigenteHasta: 'vigenteHasta',
    creadoEn: 'creadoEn',
    negocioId: 'negocioId'
};
exports.ConfiguracionScalarFieldEnum = {
    id: 'id',
    horaApertura: 'horaApertura',
    horaCierre: 'horaCierre',
    zonaHoraria: 'zonaHoraria',
    duracionDefault: 'duracionDefault',
    actualizadoEn: 'actualizadoEn',
    negocioId: 'negocioId'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map