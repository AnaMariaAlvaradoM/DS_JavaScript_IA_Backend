import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> = [
    PrismaClientOptions
] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? ((Without<T, U> & U) | (Without<U, T> & T)) & object : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
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
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "usuario" | "perfil" | "negocio" | "profesional" | "servicio" | "servicioProfesional" | "cita" | "suscripcion" | "configuracion";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        Usuario: {
            payload: Prisma.$UsuarioPayload<ExtArgs>;
            fields: Prisma.UsuarioFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UsuarioFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>;
                };
                findFirst: {
                    args: Prisma.UsuarioFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>;
                };
                findMany: {
                    args: Prisma.UsuarioFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>[];
                };
                create: {
                    args: Prisma.UsuarioCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>;
                };
                createMany: {
                    args: Prisma.UsuarioCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>[];
                };
                delete: {
                    args: Prisma.UsuarioDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>;
                };
                update: {
                    args: Prisma.UsuarioUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>;
                };
                deleteMany: {
                    args: Prisma.UsuarioDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UsuarioUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>[];
                };
                upsert: {
                    args: Prisma.UsuarioUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>;
                };
                aggregate: {
                    args: Prisma.UsuarioAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUsuario>;
                };
                groupBy: {
                    args: Prisma.UsuarioGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsuarioGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UsuarioCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsuarioCountAggregateOutputType> | number;
                };
            };
        };
        Perfil: {
            payload: Prisma.$PerfilPayload<ExtArgs>;
            fields: Prisma.PerfilFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PerfilFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerfilPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PerfilFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerfilPayload>;
                };
                findFirst: {
                    args: Prisma.PerfilFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerfilPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PerfilFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerfilPayload>;
                };
                findMany: {
                    args: Prisma.PerfilFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerfilPayload>[];
                };
                create: {
                    args: Prisma.PerfilCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerfilPayload>;
                };
                createMany: {
                    args: Prisma.PerfilCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PerfilCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerfilPayload>[];
                };
                delete: {
                    args: Prisma.PerfilDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerfilPayload>;
                };
                update: {
                    args: Prisma.PerfilUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerfilPayload>;
                };
                deleteMany: {
                    args: Prisma.PerfilDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PerfilUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PerfilUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerfilPayload>[];
                };
                upsert: {
                    args: Prisma.PerfilUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerfilPayload>;
                };
                aggregate: {
                    args: Prisma.PerfilAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePerfil>;
                };
                groupBy: {
                    args: Prisma.PerfilGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PerfilGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PerfilCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PerfilCountAggregateOutputType> | number;
                };
            };
        };
        Negocio: {
            payload: Prisma.$NegocioPayload<ExtArgs>;
            fields: Prisma.NegocioFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.NegocioFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NegocioPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.NegocioFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NegocioPayload>;
                };
                findFirst: {
                    args: Prisma.NegocioFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NegocioPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.NegocioFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NegocioPayload>;
                };
                findMany: {
                    args: Prisma.NegocioFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NegocioPayload>[];
                };
                create: {
                    args: Prisma.NegocioCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NegocioPayload>;
                };
                createMany: {
                    args: Prisma.NegocioCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.NegocioCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NegocioPayload>[];
                };
                delete: {
                    args: Prisma.NegocioDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NegocioPayload>;
                };
                update: {
                    args: Prisma.NegocioUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NegocioPayload>;
                };
                deleteMany: {
                    args: Prisma.NegocioDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.NegocioUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.NegocioUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NegocioPayload>[];
                };
                upsert: {
                    args: Prisma.NegocioUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NegocioPayload>;
                };
                aggregate: {
                    args: Prisma.NegocioAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateNegocio>;
                };
                groupBy: {
                    args: Prisma.NegocioGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NegocioGroupByOutputType>[];
                };
                count: {
                    args: Prisma.NegocioCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NegocioCountAggregateOutputType> | number;
                };
            };
        };
        Profesional: {
            payload: Prisma.$ProfesionalPayload<ExtArgs>;
            fields: Prisma.ProfesionalFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProfesionalFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfesionalPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProfesionalFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfesionalPayload>;
                };
                findFirst: {
                    args: Prisma.ProfesionalFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfesionalPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProfesionalFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfesionalPayload>;
                };
                findMany: {
                    args: Prisma.ProfesionalFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfesionalPayload>[];
                };
                create: {
                    args: Prisma.ProfesionalCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfesionalPayload>;
                };
                createMany: {
                    args: Prisma.ProfesionalCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProfesionalCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfesionalPayload>[];
                };
                delete: {
                    args: Prisma.ProfesionalDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfesionalPayload>;
                };
                update: {
                    args: Prisma.ProfesionalUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfesionalPayload>;
                };
                deleteMany: {
                    args: Prisma.ProfesionalDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProfesionalUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProfesionalUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfesionalPayload>[];
                };
                upsert: {
                    args: Prisma.ProfesionalUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfesionalPayload>;
                };
                aggregate: {
                    args: Prisma.ProfesionalAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProfesional>;
                };
                groupBy: {
                    args: Prisma.ProfesionalGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProfesionalGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProfesionalCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProfesionalCountAggregateOutputType> | number;
                };
            };
        };
        Servicio: {
            payload: Prisma.$ServicioPayload<ExtArgs>;
            fields: Prisma.ServicioFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ServicioFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicioPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ServicioFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicioPayload>;
                };
                findFirst: {
                    args: Prisma.ServicioFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicioPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ServicioFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicioPayload>;
                };
                findMany: {
                    args: Prisma.ServicioFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicioPayload>[];
                };
                create: {
                    args: Prisma.ServicioCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicioPayload>;
                };
                createMany: {
                    args: Prisma.ServicioCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ServicioCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicioPayload>[];
                };
                delete: {
                    args: Prisma.ServicioDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicioPayload>;
                };
                update: {
                    args: Prisma.ServicioUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicioPayload>;
                };
                deleteMany: {
                    args: Prisma.ServicioDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ServicioUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ServicioUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicioPayload>[];
                };
                upsert: {
                    args: Prisma.ServicioUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicioPayload>;
                };
                aggregate: {
                    args: Prisma.ServicioAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateServicio>;
                };
                groupBy: {
                    args: Prisma.ServicioGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ServicioGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ServicioCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ServicioCountAggregateOutputType> | number;
                };
            };
        };
        ServicioProfesional: {
            payload: Prisma.$ServicioProfesionalPayload<ExtArgs>;
            fields: Prisma.ServicioProfesionalFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ServicioProfesionalFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicioProfesionalPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ServicioProfesionalFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicioProfesionalPayload>;
                };
                findFirst: {
                    args: Prisma.ServicioProfesionalFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicioProfesionalPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ServicioProfesionalFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicioProfesionalPayload>;
                };
                findMany: {
                    args: Prisma.ServicioProfesionalFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicioProfesionalPayload>[];
                };
                create: {
                    args: Prisma.ServicioProfesionalCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicioProfesionalPayload>;
                };
                createMany: {
                    args: Prisma.ServicioProfesionalCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ServicioProfesionalCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicioProfesionalPayload>[];
                };
                delete: {
                    args: Prisma.ServicioProfesionalDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicioProfesionalPayload>;
                };
                update: {
                    args: Prisma.ServicioProfesionalUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicioProfesionalPayload>;
                };
                deleteMany: {
                    args: Prisma.ServicioProfesionalDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ServicioProfesionalUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ServicioProfesionalUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicioProfesionalPayload>[];
                };
                upsert: {
                    args: Prisma.ServicioProfesionalUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicioProfesionalPayload>;
                };
                aggregate: {
                    args: Prisma.ServicioProfesionalAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateServicioProfesional>;
                };
                groupBy: {
                    args: Prisma.ServicioProfesionalGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ServicioProfesionalGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ServicioProfesionalCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ServicioProfesionalCountAggregateOutputType> | number;
                };
            };
        };
        Cita: {
            payload: Prisma.$CitaPayload<ExtArgs>;
            fields: Prisma.CitaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CitaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CitaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CitaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CitaPayload>;
                };
                findFirst: {
                    args: Prisma.CitaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CitaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CitaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CitaPayload>;
                };
                findMany: {
                    args: Prisma.CitaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CitaPayload>[];
                };
                create: {
                    args: Prisma.CitaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CitaPayload>;
                };
                createMany: {
                    args: Prisma.CitaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CitaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CitaPayload>[];
                };
                delete: {
                    args: Prisma.CitaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CitaPayload>;
                };
                update: {
                    args: Prisma.CitaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CitaPayload>;
                };
                deleteMany: {
                    args: Prisma.CitaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CitaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CitaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CitaPayload>[];
                };
                upsert: {
                    args: Prisma.CitaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CitaPayload>;
                };
                aggregate: {
                    args: Prisma.CitaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCita>;
                };
                groupBy: {
                    args: Prisma.CitaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CitaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CitaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CitaCountAggregateOutputType> | number;
                };
            };
        };
        Suscripcion: {
            payload: Prisma.$SuscripcionPayload<ExtArgs>;
            fields: Prisma.SuscripcionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SuscripcionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuscripcionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SuscripcionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuscripcionPayload>;
                };
                findFirst: {
                    args: Prisma.SuscripcionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuscripcionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SuscripcionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuscripcionPayload>;
                };
                findMany: {
                    args: Prisma.SuscripcionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuscripcionPayload>[];
                };
                create: {
                    args: Prisma.SuscripcionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuscripcionPayload>;
                };
                createMany: {
                    args: Prisma.SuscripcionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SuscripcionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuscripcionPayload>[];
                };
                delete: {
                    args: Prisma.SuscripcionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuscripcionPayload>;
                };
                update: {
                    args: Prisma.SuscripcionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuscripcionPayload>;
                };
                deleteMany: {
                    args: Prisma.SuscripcionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SuscripcionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SuscripcionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuscripcionPayload>[];
                };
                upsert: {
                    args: Prisma.SuscripcionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuscripcionPayload>;
                };
                aggregate: {
                    args: Prisma.SuscripcionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSuscripcion>;
                };
                groupBy: {
                    args: Prisma.SuscripcionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SuscripcionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SuscripcionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SuscripcionCountAggregateOutputType> | number;
                };
            };
        };
        Configuracion: {
            payload: Prisma.$ConfiguracionPayload<ExtArgs>;
            fields: Prisma.ConfiguracionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ConfiguracionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConfiguracionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ConfiguracionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConfiguracionPayload>;
                };
                findFirst: {
                    args: Prisma.ConfiguracionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConfiguracionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ConfiguracionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConfiguracionPayload>;
                };
                findMany: {
                    args: Prisma.ConfiguracionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConfiguracionPayload>[];
                };
                create: {
                    args: Prisma.ConfiguracionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConfiguracionPayload>;
                };
                createMany: {
                    args: Prisma.ConfiguracionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ConfiguracionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConfiguracionPayload>[];
                };
                delete: {
                    args: Prisma.ConfiguracionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConfiguracionPayload>;
                };
                update: {
                    args: Prisma.ConfiguracionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConfiguracionPayload>;
                };
                deleteMany: {
                    args: Prisma.ConfiguracionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ConfiguracionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ConfiguracionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConfiguracionPayload>[];
                };
                upsert: {
                    args: Prisma.ConfiguracionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConfiguracionPayload>;
                };
                aggregate: {
                    args: Prisma.ConfiguracionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateConfiguracion>;
                };
                groupBy: {
                    args: Prisma.ConfiguracionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ConfiguracionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ConfiguracionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ConfiguracionCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
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
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type EnumRolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rol'>;
export type ListEnumRolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rol[]'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>;
export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>;
export type EnumEstadoCitaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoCita'>;
export type ListEnumEstadoCitaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoCita[]'>;
export type EnumPlanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Plan'>;
export type ListEnumPlanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Plan[]'>;
export type EnumEstadoSuscripcionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoSuscripcion'>;
export type ListEnumEstadoSuscripcionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoSuscripcion[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export interface PrismaClientBaseOptions {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
    queryPlanCacheMaxSize?: number;
}
export interface PrismaClientOptionsWithAccelerateUrl extends PrismaClientBaseOptions {
    accelerateUrl: string;
    adapter?: never;
}
export interface PrismaClientOptionsWithAdapter extends PrismaClientBaseOptions {
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
}
export type PrismaClientOptions = PrismaClientOptionsWithAccelerateUrl | PrismaClientOptionsWithAdapter;
export type GlobalOmitConfig = {
    usuario?: Prisma.UsuarioOmit;
    perfil?: Prisma.PerfilOmit;
    negocio?: Prisma.NegocioOmit;
    profesional?: Prisma.ProfesionalOmit;
    servicio?: Prisma.ServicioOmit;
    servicioProfesional?: Prisma.ServicioProfesionalOmit;
    cita?: Prisma.CitaOmit;
    suscripcion?: Prisma.SuscripcionOmit;
    configuracion?: Prisma.ConfiguracionOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
