import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TransaccionModel = runtime.Types.Result.DefaultSelection<Prisma.$TransaccionPayload>;
export type AggregateTransaccion = {
    _count: TransaccionCountAggregateOutputType | null;
    _avg: TransaccionAvgAggregateOutputType | null;
    _sum: TransaccionSumAggregateOutputType | null;
    _min: TransaccionMinAggregateOutputType | null;
    _max: TransaccionMaxAggregateOutputType | null;
};
export type TransaccionAvgAggregateOutputType = {
    id: number | null;
    monto: runtime.Decimal | null;
    categoriaId: number | null;
    usuarioId: number | null;
};
export type TransaccionSumAggregateOutputType = {
    id: number | null;
    monto: runtime.Decimal | null;
    categoriaId: number | null;
    usuarioId: number | null;
};
export type TransaccionMinAggregateOutputType = {
    id: number | null;
    descripcion: string | null;
    monto: runtime.Decimal | null;
    tipo: $Enums.TipoTransaccion | null;
    fecha: Date | null;
    categoriaId: number | null;
    usuarioId: number | null;
};
export type TransaccionMaxAggregateOutputType = {
    id: number | null;
    descripcion: string | null;
    monto: runtime.Decimal | null;
    tipo: $Enums.TipoTransaccion | null;
    fecha: Date | null;
    categoriaId: number | null;
    usuarioId: number | null;
};
export type TransaccionCountAggregateOutputType = {
    id: number;
    descripcion: number;
    monto: number;
    tipo: number;
    fecha: number;
    categoriaId: number;
    usuarioId: number;
    _all: number;
};
export type TransaccionAvgAggregateInputType = {
    id?: true;
    monto?: true;
    categoriaId?: true;
    usuarioId?: true;
};
export type TransaccionSumAggregateInputType = {
    id?: true;
    monto?: true;
    categoriaId?: true;
    usuarioId?: true;
};
export type TransaccionMinAggregateInputType = {
    id?: true;
    descripcion?: true;
    monto?: true;
    tipo?: true;
    fecha?: true;
    categoriaId?: true;
    usuarioId?: true;
};
export type TransaccionMaxAggregateInputType = {
    id?: true;
    descripcion?: true;
    monto?: true;
    tipo?: true;
    fecha?: true;
    categoriaId?: true;
    usuarioId?: true;
};
export type TransaccionCountAggregateInputType = {
    id?: true;
    descripcion?: true;
    monto?: true;
    tipo?: true;
    fecha?: true;
    categoriaId?: true;
    usuarioId?: true;
    _all?: true;
};
export type TransaccionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TransaccionWhereInput;
    orderBy?: Prisma.TransaccionOrderByWithRelationInput | Prisma.TransaccionOrderByWithRelationInput[];
    cursor?: Prisma.TransaccionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TransaccionCountAggregateInputType;
    _avg?: TransaccionAvgAggregateInputType;
    _sum?: TransaccionSumAggregateInputType;
    _min?: TransaccionMinAggregateInputType;
    _max?: TransaccionMaxAggregateInputType;
};
export type GetTransaccionAggregateType<T extends TransaccionAggregateArgs> = {
    [P in keyof T & keyof AggregateTransaccion]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTransaccion[P]> : Prisma.GetScalarType<T[P], AggregateTransaccion[P]>;
};
export type TransaccionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TransaccionWhereInput;
    orderBy?: Prisma.TransaccionOrderByWithAggregationInput | Prisma.TransaccionOrderByWithAggregationInput[];
    by: Prisma.TransaccionScalarFieldEnum[] | Prisma.TransaccionScalarFieldEnum;
    having?: Prisma.TransaccionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TransaccionCountAggregateInputType | true;
    _avg?: TransaccionAvgAggregateInputType;
    _sum?: TransaccionSumAggregateInputType;
    _min?: TransaccionMinAggregateInputType;
    _max?: TransaccionMaxAggregateInputType;
};
export type TransaccionGroupByOutputType = {
    id: number;
    descripcion: string;
    monto: runtime.Decimal;
    tipo: $Enums.TipoTransaccion;
    fecha: Date;
    categoriaId: number;
    usuarioId: number;
    _count: TransaccionCountAggregateOutputType | null;
    _avg: TransaccionAvgAggregateOutputType | null;
    _sum: TransaccionSumAggregateOutputType | null;
    _min: TransaccionMinAggregateOutputType | null;
    _max: TransaccionMaxAggregateOutputType | null;
};
export type GetTransaccionGroupByPayload<T extends TransaccionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TransaccionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TransaccionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TransaccionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TransaccionGroupByOutputType[P]>;
}>>;
export type TransaccionWhereInput = {
    AND?: Prisma.TransaccionWhereInput | Prisma.TransaccionWhereInput[];
    OR?: Prisma.TransaccionWhereInput[];
    NOT?: Prisma.TransaccionWhereInput | Prisma.TransaccionWhereInput[];
    id?: Prisma.IntFilter<"Transaccion"> | number;
    descripcion?: Prisma.StringFilter<"Transaccion"> | string;
    monto?: Prisma.DecimalFilter<"Transaccion"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tipo?: Prisma.EnumTipoTransaccionFilter<"Transaccion"> | $Enums.TipoTransaccion;
    fecha?: Prisma.DateTimeFilter<"Transaccion"> | Date | string;
    categoriaId?: Prisma.IntFilter<"Transaccion"> | number;
    usuarioId?: Prisma.IntFilter<"Transaccion"> | number;
    categoria?: Prisma.XOR<Prisma.CategoriaScalarRelationFilter, Prisma.CategoriaWhereInput>;
    usuario?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
};
export type TransaccionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    categoriaId?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    categoria?: Prisma.CategoriaOrderByWithRelationInput;
    usuario?: Prisma.UsuarioOrderByWithRelationInput;
};
export type TransaccionWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.TransaccionWhereInput | Prisma.TransaccionWhereInput[];
    OR?: Prisma.TransaccionWhereInput[];
    NOT?: Prisma.TransaccionWhereInput | Prisma.TransaccionWhereInput[];
    descripcion?: Prisma.StringFilter<"Transaccion"> | string;
    monto?: Prisma.DecimalFilter<"Transaccion"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tipo?: Prisma.EnumTipoTransaccionFilter<"Transaccion"> | $Enums.TipoTransaccion;
    fecha?: Prisma.DateTimeFilter<"Transaccion"> | Date | string;
    categoriaId?: Prisma.IntFilter<"Transaccion"> | number;
    usuarioId?: Prisma.IntFilter<"Transaccion"> | number;
    categoria?: Prisma.XOR<Prisma.CategoriaScalarRelationFilter, Prisma.CategoriaWhereInput>;
    usuario?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
}, "id">;
export type TransaccionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    categoriaId?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    _count?: Prisma.TransaccionCountOrderByAggregateInput;
    _avg?: Prisma.TransaccionAvgOrderByAggregateInput;
    _max?: Prisma.TransaccionMaxOrderByAggregateInput;
    _min?: Prisma.TransaccionMinOrderByAggregateInput;
    _sum?: Prisma.TransaccionSumOrderByAggregateInput;
};
export type TransaccionScalarWhereWithAggregatesInput = {
    AND?: Prisma.TransaccionScalarWhereWithAggregatesInput | Prisma.TransaccionScalarWhereWithAggregatesInput[];
    OR?: Prisma.TransaccionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TransaccionScalarWhereWithAggregatesInput | Prisma.TransaccionScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Transaccion"> | number;
    descripcion?: Prisma.StringWithAggregatesFilter<"Transaccion"> | string;
    monto?: Prisma.DecimalWithAggregatesFilter<"Transaccion"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tipo?: Prisma.EnumTipoTransaccionWithAggregatesFilter<"Transaccion"> | $Enums.TipoTransaccion;
    fecha?: Prisma.DateTimeWithAggregatesFilter<"Transaccion"> | Date | string;
    categoriaId?: Prisma.IntWithAggregatesFilter<"Transaccion"> | number;
    usuarioId?: Prisma.IntWithAggregatesFilter<"Transaccion"> | number;
};
export type TransaccionCreateInput = {
    descripcion: string;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tipo: $Enums.TipoTransaccion;
    fecha?: Date | string;
    categoria: Prisma.CategoriaCreateNestedOneWithoutTransaccionesInput;
    usuario: Prisma.UsuarioCreateNestedOneWithoutTransaccionesInput;
};
export type TransaccionUncheckedCreateInput = {
    id?: number;
    descripcion: string;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tipo: $Enums.TipoTransaccion;
    fecha?: Date | string;
    categoriaId: number;
    usuarioId: number;
};
export type TransaccionUpdateInput = {
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tipo?: Prisma.EnumTipoTransaccionFieldUpdateOperationsInput | $Enums.TipoTransaccion;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    categoria?: Prisma.CategoriaUpdateOneRequiredWithoutTransaccionesNestedInput;
    usuario?: Prisma.UsuarioUpdateOneRequiredWithoutTransaccionesNestedInput;
};
export type TransaccionUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tipo?: Prisma.EnumTipoTransaccionFieldUpdateOperationsInput | $Enums.TipoTransaccion;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    categoriaId?: Prisma.IntFieldUpdateOperationsInput | number;
    usuarioId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TransaccionCreateManyInput = {
    id?: number;
    descripcion: string;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tipo: $Enums.TipoTransaccion;
    fecha?: Date | string;
    categoriaId: number;
    usuarioId: number;
};
export type TransaccionUpdateManyMutationInput = {
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tipo?: Prisma.EnumTipoTransaccionFieldUpdateOperationsInput | $Enums.TipoTransaccion;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TransaccionUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tipo?: Prisma.EnumTipoTransaccionFieldUpdateOperationsInput | $Enums.TipoTransaccion;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    categoriaId?: Prisma.IntFieldUpdateOperationsInput | number;
    usuarioId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TransaccionListRelationFilter = {
    every?: Prisma.TransaccionWhereInput;
    some?: Prisma.TransaccionWhereInput;
    none?: Prisma.TransaccionWhereInput;
};
export type TransaccionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TransaccionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    categoriaId?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
};
export type TransaccionAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    categoriaId?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
};
export type TransaccionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    categoriaId?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
};
export type TransaccionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    categoriaId?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
};
export type TransaccionSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    categoriaId?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
};
export type TransaccionCreateNestedManyWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.TransaccionCreateWithoutUsuarioInput, Prisma.TransaccionUncheckedCreateWithoutUsuarioInput> | Prisma.TransaccionCreateWithoutUsuarioInput[] | Prisma.TransaccionUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.TransaccionCreateOrConnectWithoutUsuarioInput | Prisma.TransaccionCreateOrConnectWithoutUsuarioInput[];
    createMany?: Prisma.TransaccionCreateManyUsuarioInputEnvelope;
    connect?: Prisma.TransaccionWhereUniqueInput | Prisma.TransaccionWhereUniqueInput[];
};
export type TransaccionUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.TransaccionCreateWithoutUsuarioInput, Prisma.TransaccionUncheckedCreateWithoutUsuarioInput> | Prisma.TransaccionCreateWithoutUsuarioInput[] | Prisma.TransaccionUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.TransaccionCreateOrConnectWithoutUsuarioInput | Prisma.TransaccionCreateOrConnectWithoutUsuarioInput[];
    createMany?: Prisma.TransaccionCreateManyUsuarioInputEnvelope;
    connect?: Prisma.TransaccionWhereUniqueInput | Prisma.TransaccionWhereUniqueInput[];
};
export type TransaccionUpdateManyWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.TransaccionCreateWithoutUsuarioInput, Prisma.TransaccionUncheckedCreateWithoutUsuarioInput> | Prisma.TransaccionCreateWithoutUsuarioInput[] | Prisma.TransaccionUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.TransaccionCreateOrConnectWithoutUsuarioInput | Prisma.TransaccionCreateOrConnectWithoutUsuarioInput[];
    upsert?: Prisma.TransaccionUpsertWithWhereUniqueWithoutUsuarioInput | Prisma.TransaccionUpsertWithWhereUniqueWithoutUsuarioInput[];
    createMany?: Prisma.TransaccionCreateManyUsuarioInputEnvelope;
    set?: Prisma.TransaccionWhereUniqueInput | Prisma.TransaccionWhereUniqueInput[];
    disconnect?: Prisma.TransaccionWhereUniqueInput | Prisma.TransaccionWhereUniqueInput[];
    delete?: Prisma.TransaccionWhereUniqueInput | Prisma.TransaccionWhereUniqueInput[];
    connect?: Prisma.TransaccionWhereUniqueInput | Prisma.TransaccionWhereUniqueInput[];
    update?: Prisma.TransaccionUpdateWithWhereUniqueWithoutUsuarioInput | Prisma.TransaccionUpdateWithWhereUniqueWithoutUsuarioInput[];
    updateMany?: Prisma.TransaccionUpdateManyWithWhereWithoutUsuarioInput | Prisma.TransaccionUpdateManyWithWhereWithoutUsuarioInput[];
    deleteMany?: Prisma.TransaccionScalarWhereInput | Prisma.TransaccionScalarWhereInput[];
};
export type TransaccionUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.TransaccionCreateWithoutUsuarioInput, Prisma.TransaccionUncheckedCreateWithoutUsuarioInput> | Prisma.TransaccionCreateWithoutUsuarioInput[] | Prisma.TransaccionUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.TransaccionCreateOrConnectWithoutUsuarioInput | Prisma.TransaccionCreateOrConnectWithoutUsuarioInput[];
    upsert?: Prisma.TransaccionUpsertWithWhereUniqueWithoutUsuarioInput | Prisma.TransaccionUpsertWithWhereUniqueWithoutUsuarioInput[];
    createMany?: Prisma.TransaccionCreateManyUsuarioInputEnvelope;
    set?: Prisma.TransaccionWhereUniqueInput | Prisma.TransaccionWhereUniqueInput[];
    disconnect?: Prisma.TransaccionWhereUniqueInput | Prisma.TransaccionWhereUniqueInput[];
    delete?: Prisma.TransaccionWhereUniqueInput | Prisma.TransaccionWhereUniqueInput[];
    connect?: Prisma.TransaccionWhereUniqueInput | Prisma.TransaccionWhereUniqueInput[];
    update?: Prisma.TransaccionUpdateWithWhereUniqueWithoutUsuarioInput | Prisma.TransaccionUpdateWithWhereUniqueWithoutUsuarioInput[];
    updateMany?: Prisma.TransaccionUpdateManyWithWhereWithoutUsuarioInput | Prisma.TransaccionUpdateManyWithWhereWithoutUsuarioInput[];
    deleteMany?: Prisma.TransaccionScalarWhereInput | Prisma.TransaccionScalarWhereInput[];
};
export type TransaccionCreateNestedManyWithoutCategoriaInput = {
    create?: Prisma.XOR<Prisma.TransaccionCreateWithoutCategoriaInput, Prisma.TransaccionUncheckedCreateWithoutCategoriaInput> | Prisma.TransaccionCreateWithoutCategoriaInput[] | Prisma.TransaccionUncheckedCreateWithoutCategoriaInput[];
    connectOrCreate?: Prisma.TransaccionCreateOrConnectWithoutCategoriaInput | Prisma.TransaccionCreateOrConnectWithoutCategoriaInput[];
    createMany?: Prisma.TransaccionCreateManyCategoriaInputEnvelope;
    connect?: Prisma.TransaccionWhereUniqueInput | Prisma.TransaccionWhereUniqueInput[];
};
export type TransaccionUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: Prisma.XOR<Prisma.TransaccionCreateWithoutCategoriaInput, Prisma.TransaccionUncheckedCreateWithoutCategoriaInput> | Prisma.TransaccionCreateWithoutCategoriaInput[] | Prisma.TransaccionUncheckedCreateWithoutCategoriaInput[];
    connectOrCreate?: Prisma.TransaccionCreateOrConnectWithoutCategoriaInput | Prisma.TransaccionCreateOrConnectWithoutCategoriaInput[];
    createMany?: Prisma.TransaccionCreateManyCategoriaInputEnvelope;
    connect?: Prisma.TransaccionWhereUniqueInput | Prisma.TransaccionWhereUniqueInput[];
};
export type TransaccionUpdateManyWithoutCategoriaNestedInput = {
    create?: Prisma.XOR<Prisma.TransaccionCreateWithoutCategoriaInput, Prisma.TransaccionUncheckedCreateWithoutCategoriaInput> | Prisma.TransaccionCreateWithoutCategoriaInput[] | Prisma.TransaccionUncheckedCreateWithoutCategoriaInput[];
    connectOrCreate?: Prisma.TransaccionCreateOrConnectWithoutCategoriaInput | Prisma.TransaccionCreateOrConnectWithoutCategoriaInput[];
    upsert?: Prisma.TransaccionUpsertWithWhereUniqueWithoutCategoriaInput | Prisma.TransaccionUpsertWithWhereUniqueWithoutCategoriaInput[];
    createMany?: Prisma.TransaccionCreateManyCategoriaInputEnvelope;
    set?: Prisma.TransaccionWhereUniqueInput | Prisma.TransaccionWhereUniqueInput[];
    disconnect?: Prisma.TransaccionWhereUniqueInput | Prisma.TransaccionWhereUniqueInput[];
    delete?: Prisma.TransaccionWhereUniqueInput | Prisma.TransaccionWhereUniqueInput[];
    connect?: Prisma.TransaccionWhereUniqueInput | Prisma.TransaccionWhereUniqueInput[];
    update?: Prisma.TransaccionUpdateWithWhereUniqueWithoutCategoriaInput | Prisma.TransaccionUpdateWithWhereUniqueWithoutCategoriaInput[];
    updateMany?: Prisma.TransaccionUpdateManyWithWhereWithoutCategoriaInput | Prisma.TransaccionUpdateManyWithWhereWithoutCategoriaInput[];
    deleteMany?: Prisma.TransaccionScalarWhereInput | Prisma.TransaccionScalarWhereInput[];
};
export type TransaccionUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: Prisma.XOR<Prisma.TransaccionCreateWithoutCategoriaInput, Prisma.TransaccionUncheckedCreateWithoutCategoriaInput> | Prisma.TransaccionCreateWithoutCategoriaInput[] | Prisma.TransaccionUncheckedCreateWithoutCategoriaInput[];
    connectOrCreate?: Prisma.TransaccionCreateOrConnectWithoutCategoriaInput | Prisma.TransaccionCreateOrConnectWithoutCategoriaInput[];
    upsert?: Prisma.TransaccionUpsertWithWhereUniqueWithoutCategoriaInput | Prisma.TransaccionUpsertWithWhereUniqueWithoutCategoriaInput[];
    createMany?: Prisma.TransaccionCreateManyCategoriaInputEnvelope;
    set?: Prisma.TransaccionWhereUniqueInput | Prisma.TransaccionWhereUniqueInput[];
    disconnect?: Prisma.TransaccionWhereUniqueInput | Prisma.TransaccionWhereUniqueInput[];
    delete?: Prisma.TransaccionWhereUniqueInput | Prisma.TransaccionWhereUniqueInput[];
    connect?: Prisma.TransaccionWhereUniqueInput | Prisma.TransaccionWhereUniqueInput[];
    update?: Prisma.TransaccionUpdateWithWhereUniqueWithoutCategoriaInput | Prisma.TransaccionUpdateWithWhereUniqueWithoutCategoriaInput[];
    updateMany?: Prisma.TransaccionUpdateManyWithWhereWithoutCategoriaInput | Prisma.TransaccionUpdateManyWithWhereWithoutCategoriaInput[];
    deleteMany?: Prisma.TransaccionScalarWhereInput | Prisma.TransaccionScalarWhereInput[];
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type EnumTipoTransaccionFieldUpdateOperationsInput = {
    set?: $Enums.TipoTransaccion;
};
export type TransaccionCreateWithoutUsuarioInput = {
    descripcion: string;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tipo: $Enums.TipoTransaccion;
    fecha?: Date | string;
    categoria: Prisma.CategoriaCreateNestedOneWithoutTransaccionesInput;
};
export type TransaccionUncheckedCreateWithoutUsuarioInput = {
    id?: number;
    descripcion: string;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tipo: $Enums.TipoTransaccion;
    fecha?: Date | string;
    categoriaId: number;
};
export type TransaccionCreateOrConnectWithoutUsuarioInput = {
    where: Prisma.TransaccionWhereUniqueInput;
    create: Prisma.XOR<Prisma.TransaccionCreateWithoutUsuarioInput, Prisma.TransaccionUncheckedCreateWithoutUsuarioInput>;
};
export type TransaccionCreateManyUsuarioInputEnvelope = {
    data: Prisma.TransaccionCreateManyUsuarioInput | Prisma.TransaccionCreateManyUsuarioInput[];
    skipDuplicates?: boolean;
};
export type TransaccionUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: Prisma.TransaccionWhereUniqueInput;
    update: Prisma.XOR<Prisma.TransaccionUpdateWithoutUsuarioInput, Prisma.TransaccionUncheckedUpdateWithoutUsuarioInput>;
    create: Prisma.XOR<Prisma.TransaccionCreateWithoutUsuarioInput, Prisma.TransaccionUncheckedCreateWithoutUsuarioInput>;
};
export type TransaccionUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: Prisma.TransaccionWhereUniqueInput;
    data: Prisma.XOR<Prisma.TransaccionUpdateWithoutUsuarioInput, Prisma.TransaccionUncheckedUpdateWithoutUsuarioInput>;
};
export type TransaccionUpdateManyWithWhereWithoutUsuarioInput = {
    where: Prisma.TransaccionScalarWhereInput;
    data: Prisma.XOR<Prisma.TransaccionUpdateManyMutationInput, Prisma.TransaccionUncheckedUpdateManyWithoutUsuarioInput>;
};
export type TransaccionScalarWhereInput = {
    AND?: Prisma.TransaccionScalarWhereInput | Prisma.TransaccionScalarWhereInput[];
    OR?: Prisma.TransaccionScalarWhereInput[];
    NOT?: Prisma.TransaccionScalarWhereInput | Prisma.TransaccionScalarWhereInput[];
    id?: Prisma.IntFilter<"Transaccion"> | number;
    descripcion?: Prisma.StringFilter<"Transaccion"> | string;
    monto?: Prisma.DecimalFilter<"Transaccion"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tipo?: Prisma.EnumTipoTransaccionFilter<"Transaccion"> | $Enums.TipoTransaccion;
    fecha?: Prisma.DateTimeFilter<"Transaccion"> | Date | string;
    categoriaId?: Prisma.IntFilter<"Transaccion"> | number;
    usuarioId?: Prisma.IntFilter<"Transaccion"> | number;
};
export type TransaccionCreateWithoutCategoriaInput = {
    descripcion: string;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tipo: $Enums.TipoTransaccion;
    fecha?: Date | string;
    usuario: Prisma.UsuarioCreateNestedOneWithoutTransaccionesInput;
};
export type TransaccionUncheckedCreateWithoutCategoriaInput = {
    id?: number;
    descripcion: string;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tipo: $Enums.TipoTransaccion;
    fecha?: Date | string;
    usuarioId: number;
};
export type TransaccionCreateOrConnectWithoutCategoriaInput = {
    where: Prisma.TransaccionWhereUniqueInput;
    create: Prisma.XOR<Prisma.TransaccionCreateWithoutCategoriaInput, Prisma.TransaccionUncheckedCreateWithoutCategoriaInput>;
};
export type TransaccionCreateManyCategoriaInputEnvelope = {
    data: Prisma.TransaccionCreateManyCategoriaInput | Prisma.TransaccionCreateManyCategoriaInput[];
    skipDuplicates?: boolean;
};
export type TransaccionUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: Prisma.TransaccionWhereUniqueInput;
    update: Prisma.XOR<Prisma.TransaccionUpdateWithoutCategoriaInput, Prisma.TransaccionUncheckedUpdateWithoutCategoriaInput>;
    create: Prisma.XOR<Prisma.TransaccionCreateWithoutCategoriaInput, Prisma.TransaccionUncheckedCreateWithoutCategoriaInput>;
};
export type TransaccionUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: Prisma.TransaccionWhereUniqueInput;
    data: Prisma.XOR<Prisma.TransaccionUpdateWithoutCategoriaInput, Prisma.TransaccionUncheckedUpdateWithoutCategoriaInput>;
};
export type TransaccionUpdateManyWithWhereWithoutCategoriaInput = {
    where: Prisma.TransaccionScalarWhereInput;
    data: Prisma.XOR<Prisma.TransaccionUpdateManyMutationInput, Prisma.TransaccionUncheckedUpdateManyWithoutCategoriaInput>;
};
export type TransaccionCreateManyUsuarioInput = {
    id?: number;
    descripcion: string;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tipo: $Enums.TipoTransaccion;
    fecha?: Date | string;
    categoriaId: number;
};
export type TransaccionUpdateWithoutUsuarioInput = {
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tipo?: Prisma.EnumTipoTransaccionFieldUpdateOperationsInput | $Enums.TipoTransaccion;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    categoria?: Prisma.CategoriaUpdateOneRequiredWithoutTransaccionesNestedInput;
};
export type TransaccionUncheckedUpdateWithoutUsuarioInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tipo?: Prisma.EnumTipoTransaccionFieldUpdateOperationsInput | $Enums.TipoTransaccion;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    categoriaId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TransaccionUncheckedUpdateManyWithoutUsuarioInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tipo?: Prisma.EnumTipoTransaccionFieldUpdateOperationsInput | $Enums.TipoTransaccion;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    categoriaId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TransaccionCreateManyCategoriaInput = {
    id?: number;
    descripcion: string;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tipo: $Enums.TipoTransaccion;
    fecha?: Date | string;
    usuarioId: number;
};
export type TransaccionUpdateWithoutCategoriaInput = {
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tipo?: Prisma.EnumTipoTransaccionFieldUpdateOperationsInput | $Enums.TipoTransaccion;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usuario?: Prisma.UsuarioUpdateOneRequiredWithoutTransaccionesNestedInput;
};
export type TransaccionUncheckedUpdateWithoutCategoriaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tipo?: Prisma.EnumTipoTransaccionFieldUpdateOperationsInput | $Enums.TipoTransaccion;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usuarioId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TransaccionUncheckedUpdateManyWithoutCategoriaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tipo?: Prisma.EnumTipoTransaccionFieldUpdateOperationsInput | $Enums.TipoTransaccion;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usuarioId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TransaccionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    descripcion?: boolean;
    monto?: boolean;
    tipo?: boolean;
    fecha?: boolean;
    categoriaId?: boolean;
    usuarioId?: boolean;
    categoria?: boolean | Prisma.CategoriaDefaultArgs<ExtArgs>;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["transaccion"]>;
export type TransaccionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    descripcion?: boolean;
    monto?: boolean;
    tipo?: boolean;
    fecha?: boolean;
    categoriaId?: boolean;
    usuarioId?: boolean;
    categoria?: boolean | Prisma.CategoriaDefaultArgs<ExtArgs>;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["transaccion"]>;
export type TransaccionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    descripcion?: boolean;
    monto?: boolean;
    tipo?: boolean;
    fecha?: boolean;
    categoriaId?: boolean;
    usuarioId?: boolean;
    categoria?: boolean | Prisma.CategoriaDefaultArgs<ExtArgs>;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["transaccion"]>;
export type TransaccionSelectScalar = {
    id?: boolean;
    descripcion?: boolean;
    monto?: boolean;
    tipo?: boolean;
    fecha?: boolean;
    categoriaId?: boolean;
    usuarioId?: boolean;
};
export type TransaccionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "descripcion" | "monto" | "tipo" | "fecha" | "categoriaId" | "usuarioId", ExtArgs["result"]["transaccion"]>;
export type TransaccionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    categoria?: boolean | Prisma.CategoriaDefaultArgs<ExtArgs>;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type TransaccionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    categoria?: boolean | Prisma.CategoriaDefaultArgs<ExtArgs>;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type TransaccionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    categoria?: boolean | Prisma.CategoriaDefaultArgs<ExtArgs>;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type $TransaccionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Transaccion";
    objects: {
        categoria: Prisma.$CategoriaPayload<ExtArgs>;
        usuario: Prisma.$UsuarioPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        descripcion: string;
        monto: runtime.Decimal;
        tipo: $Enums.TipoTransaccion;
        fecha: Date;
        categoriaId: number;
        usuarioId: number;
    }, ExtArgs["result"]["transaccion"]>;
    composites: {};
};
export type TransaccionGetPayload<S extends boolean | null | undefined | TransaccionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TransaccionPayload, S>;
export type TransaccionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TransaccionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TransaccionCountAggregateInputType | true;
};
export interface TransaccionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Transaccion'];
        meta: {
            name: 'Transaccion';
        };
    };
    findUnique<T extends TransaccionFindUniqueArgs>(args: Prisma.SelectSubset<T, TransaccionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TransaccionClient<runtime.Types.Result.GetResult<Prisma.$TransaccionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TransaccionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TransaccionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TransaccionClient<runtime.Types.Result.GetResult<Prisma.$TransaccionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TransaccionFindFirstArgs>(args?: Prisma.SelectSubset<T, TransaccionFindFirstArgs<ExtArgs>>): Prisma.Prisma__TransaccionClient<runtime.Types.Result.GetResult<Prisma.$TransaccionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TransaccionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TransaccionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TransaccionClient<runtime.Types.Result.GetResult<Prisma.$TransaccionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TransaccionFindManyArgs>(args?: Prisma.SelectSubset<T, TransaccionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TransaccionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TransaccionCreateArgs>(args: Prisma.SelectSubset<T, TransaccionCreateArgs<ExtArgs>>): Prisma.Prisma__TransaccionClient<runtime.Types.Result.GetResult<Prisma.$TransaccionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TransaccionCreateManyArgs>(args?: Prisma.SelectSubset<T, TransaccionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TransaccionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TransaccionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TransaccionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TransaccionDeleteArgs>(args: Prisma.SelectSubset<T, TransaccionDeleteArgs<ExtArgs>>): Prisma.Prisma__TransaccionClient<runtime.Types.Result.GetResult<Prisma.$TransaccionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TransaccionUpdateArgs>(args: Prisma.SelectSubset<T, TransaccionUpdateArgs<ExtArgs>>): Prisma.Prisma__TransaccionClient<runtime.Types.Result.GetResult<Prisma.$TransaccionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TransaccionDeleteManyArgs>(args?: Prisma.SelectSubset<T, TransaccionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TransaccionUpdateManyArgs>(args: Prisma.SelectSubset<T, TransaccionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TransaccionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TransaccionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TransaccionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TransaccionUpsertArgs>(args: Prisma.SelectSubset<T, TransaccionUpsertArgs<ExtArgs>>): Prisma.Prisma__TransaccionClient<runtime.Types.Result.GetResult<Prisma.$TransaccionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TransaccionCountArgs>(args?: Prisma.Subset<T, TransaccionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TransaccionCountAggregateOutputType> : number>;
    aggregate<T extends TransaccionAggregateArgs>(args: Prisma.Subset<T, TransaccionAggregateArgs>): Prisma.PrismaPromise<GetTransaccionAggregateType<T>>;
    groupBy<T extends TransaccionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TransaccionGroupByArgs['orderBy'];
    } : {
        orderBy?: TransaccionGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TransaccionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransaccionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TransaccionFieldRefs;
}
export interface Prisma__TransaccionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    categoria<T extends Prisma.CategoriaDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CategoriaDefaultArgs<ExtArgs>>): Prisma.Prisma__CategoriaClient<runtime.Types.Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    usuario<T extends Prisma.UsuarioDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UsuarioDefaultArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TransaccionFieldRefs {
    readonly id: Prisma.FieldRef<"Transaccion", 'Int'>;
    readonly descripcion: Prisma.FieldRef<"Transaccion", 'String'>;
    readonly monto: Prisma.FieldRef<"Transaccion", 'Decimal'>;
    readonly tipo: Prisma.FieldRef<"Transaccion", 'TipoTransaccion'>;
    readonly fecha: Prisma.FieldRef<"Transaccion", 'DateTime'>;
    readonly categoriaId: Prisma.FieldRef<"Transaccion", 'Int'>;
    readonly usuarioId: Prisma.FieldRef<"Transaccion", 'Int'>;
}
export type TransaccionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransaccionSelect<ExtArgs> | null;
    omit?: Prisma.TransaccionOmit<ExtArgs> | null;
    include?: Prisma.TransaccionInclude<ExtArgs> | null;
    where: Prisma.TransaccionWhereUniqueInput;
};
export type TransaccionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransaccionSelect<ExtArgs> | null;
    omit?: Prisma.TransaccionOmit<ExtArgs> | null;
    include?: Prisma.TransaccionInclude<ExtArgs> | null;
    where: Prisma.TransaccionWhereUniqueInput;
};
export type TransaccionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransaccionSelect<ExtArgs> | null;
    omit?: Prisma.TransaccionOmit<ExtArgs> | null;
    include?: Prisma.TransaccionInclude<ExtArgs> | null;
    where?: Prisma.TransaccionWhereInput;
    orderBy?: Prisma.TransaccionOrderByWithRelationInput | Prisma.TransaccionOrderByWithRelationInput[];
    cursor?: Prisma.TransaccionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TransaccionScalarFieldEnum | Prisma.TransaccionScalarFieldEnum[];
};
export type TransaccionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransaccionSelect<ExtArgs> | null;
    omit?: Prisma.TransaccionOmit<ExtArgs> | null;
    include?: Prisma.TransaccionInclude<ExtArgs> | null;
    where?: Prisma.TransaccionWhereInput;
    orderBy?: Prisma.TransaccionOrderByWithRelationInput | Prisma.TransaccionOrderByWithRelationInput[];
    cursor?: Prisma.TransaccionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TransaccionScalarFieldEnum | Prisma.TransaccionScalarFieldEnum[];
};
export type TransaccionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransaccionSelect<ExtArgs> | null;
    omit?: Prisma.TransaccionOmit<ExtArgs> | null;
    include?: Prisma.TransaccionInclude<ExtArgs> | null;
    where?: Prisma.TransaccionWhereInput;
    orderBy?: Prisma.TransaccionOrderByWithRelationInput | Prisma.TransaccionOrderByWithRelationInput[];
    cursor?: Prisma.TransaccionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TransaccionScalarFieldEnum | Prisma.TransaccionScalarFieldEnum[];
};
export type TransaccionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransaccionSelect<ExtArgs> | null;
    omit?: Prisma.TransaccionOmit<ExtArgs> | null;
    include?: Prisma.TransaccionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TransaccionCreateInput, Prisma.TransaccionUncheckedCreateInput>;
};
export type TransaccionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TransaccionCreateManyInput | Prisma.TransaccionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TransaccionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransaccionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TransaccionOmit<ExtArgs> | null;
    data: Prisma.TransaccionCreateManyInput | Prisma.TransaccionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TransaccionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TransaccionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransaccionSelect<ExtArgs> | null;
    omit?: Prisma.TransaccionOmit<ExtArgs> | null;
    include?: Prisma.TransaccionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TransaccionUpdateInput, Prisma.TransaccionUncheckedUpdateInput>;
    where: Prisma.TransaccionWhereUniqueInput;
};
export type TransaccionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TransaccionUpdateManyMutationInput, Prisma.TransaccionUncheckedUpdateManyInput>;
    where?: Prisma.TransaccionWhereInput;
    limit?: number;
};
export type TransaccionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransaccionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TransaccionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TransaccionUpdateManyMutationInput, Prisma.TransaccionUncheckedUpdateManyInput>;
    where?: Prisma.TransaccionWhereInput;
    limit?: number;
    include?: Prisma.TransaccionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TransaccionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransaccionSelect<ExtArgs> | null;
    omit?: Prisma.TransaccionOmit<ExtArgs> | null;
    include?: Prisma.TransaccionInclude<ExtArgs> | null;
    where: Prisma.TransaccionWhereUniqueInput;
    create: Prisma.XOR<Prisma.TransaccionCreateInput, Prisma.TransaccionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TransaccionUpdateInput, Prisma.TransaccionUncheckedUpdateInput>;
};
export type TransaccionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransaccionSelect<ExtArgs> | null;
    omit?: Prisma.TransaccionOmit<ExtArgs> | null;
    include?: Prisma.TransaccionInclude<ExtArgs> | null;
    where: Prisma.TransaccionWhereUniqueInput;
};
export type TransaccionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TransaccionWhereInput;
    limit?: number;
};
export type TransaccionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransaccionSelect<ExtArgs> | null;
    omit?: Prisma.TransaccionOmit<ExtArgs> | null;
    include?: Prisma.TransaccionInclude<ExtArgs> | null;
};
