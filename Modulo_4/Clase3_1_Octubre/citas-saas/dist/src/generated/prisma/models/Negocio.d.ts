import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type NegocioModel = runtime.Types.Result.DefaultSelection<Prisma.$NegocioPayload>;
export type AggregateNegocio = {
    _count: NegocioCountAggregateOutputType | null;
    _avg: NegocioAvgAggregateOutputType | null;
    _sum: NegocioSumAggregateOutputType | null;
    _min: NegocioMinAggregateOutputType | null;
    _max: NegocioMaxAggregateOutputType | null;
};
export type NegocioAvgAggregateOutputType = {
    id: number | null;
    duenoId: number | null;
};
export type NegocioSumAggregateOutputType = {
    id: number | null;
    duenoId: number | null;
};
export type NegocioMinAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    descripcion: string | null;
    telefono: string | null;
    direccion: string | null;
    creadoEn: Date | null;
    duenoId: number | null;
};
export type NegocioMaxAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    descripcion: string | null;
    telefono: string | null;
    direccion: string | null;
    creadoEn: Date | null;
    duenoId: number | null;
};
export type NegocioCountAggregateOutputType = {
    id: number;
    nombre: number;
    descripcion: number;
    telefono: number;
    direccion: number;
    creadoEn: number;
    duenoId: number;
    _all: number;
};
export type NegocioAvgAggregateInputType = {
    id?: true;
    duenoId?: true;
};
export type NegocioSumAggregateInputType = {
    id?: true;
    duenoId?: true;
};
export type NegocioMinAggregateInputType = {
    id?: true;
    nombre?: true;
    descripcion?: true;
    telefono?: true;
    direccion?: true;
    creadoEn?: true;
    duenoId?: true;
};
export type NegocioMaxAggregateInputType = {
    id?: true;
    nombre?: true;
    descripcion?: true;
    telefono?: true;
    direccion?: true;
    creadoEn?: true;
    duenoId?: true;
};
export type NegocioCountAggregateInputType = {
    id?: true;
    nombre?: true;
    descripcion?: true;
    telefono?: true;
    direccion?: true;
    creadoEn?: true;
    duenoId?: true;
    _all?: true;
};
export type NegocioAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NegocioWhereInput;
    orderBy?: Prisma.NegocioOrderByWithRelationInput | Prisma.NegocioOrderByWithRelationInput[];
    cursor?: Prisma.NegocioWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | NegocioCountAggregateInputType;
    _avg?: NegocioAvgAggregateInputType;
    _sum?: NegocioSumAggregateInputType;
    _min?: NegocioMinAggregateInputType;
    _max?: NegocioMaxAggregateInputType;
};
export type GetNegocioAggregateType<T extends NegocioAggregateArgs> = {
    [P in keyof T & keyof AggregateNegocio]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateNegocio[P]> : Prisma.GetScalarType<T[P], AggregateNegocio[P]>;
};
export type NegocioGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NegocioWhereInput;
    orderBy?: Prisma.NegocioOrderByWithAggregationInput | Prisma.NegocioOrderByWithAggregationInput[];
    by: Prisma.NegocioScalarFieldEnum[] | Prisma.NegocioScalarFieldEnum;
    having?: Prisma.NegocioScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: NegocioCountAggregateInputType | true;
    _avg?: NegocioAvgAggregateInputType;
    _sum?: NegocioSumAggregateInputType;
    _min?: NegocioMinAggregateInputType;
    _max?: NegocioMaxAggregateInputType;
};
export type NegocioGroupByOutputType = {
    id: number;
    nombre: string;
    descripcion: string | null;
    telefono: string | null;
    direccion: string | null;
    creadoEn: Date;
    duenoId: number;
    _count: NegocioCountAggregateOutputType | null;
    _avg: NegocioAvgAggregateOutputType | null;
    _sum: NegocioSumAggregateOutputType | null;
    _min: NegocioMinAggregateOutputType | null;
    _max: NegocioMaxAggregateOutputType | null;
};
export type GetNegocioGroupByPayload<T extends NegocioGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<NegocioGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof NegocioGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], NegocioGroupByOutputType[P]> : Prisma.GetScalarType<T[P], NegocioGroupByOutputType[P]>;
}>>;
export type NegocioWhereInput = {
    AND?: Prisma.NegocioWhereInput | Prisma.NegocioWhereInput[];
    OR?: Prisma.NegocioWhereInput[];
    NOT?: Prisma.NegocioWhereInput | Prisma.NegocioWhereInput[];
    id?: Prisma.IntFilter<"Negocio"> | number;
    nombre?: Prisma.StringFilter<"Negocio"> | string;
    descripcion?: Prisma.StringNullableFilter<"Negocio"> | string | null;
    telefono?: Prisma.StringNullableFilter<"Negocio"> | string | null;
    direccion?: Prisma.StringNullableFilter<"Negocio"> | string | null;
    creadoEn?: Prisma.DateTimeFilter<"Negocio"> | Date | string;
    duenoId?: Prisma.IntFilter<"Negocio"> | number;
    dueno?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
    profesionales?: Prisma.ProfesionalListRelationFilter;
    servicios?: Prisma.ServicioListRelationFilter;
    citas?: Prisma.CitaListRelationFilter;
    suscripcion?: Prisma.XOR<Prisma.SuscripcionNullableScalarRelationFilter, Prisma.SuscripcionWhereInput> | null;
    configuracion?: Prisma.XOR<Prisma.ConfiguracionNullableScalarRelationFilter, Prisma.ConfiguracionWhereInput> | null;
};
export type NegocioOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrderInput | Prisma.SortOrder;
    telefono?: Prisma.SortOrderInput | Prisma.SortOrder;
    direccion?: Prisma.SortOrderInput | Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    duenoId?: Prisma.SortOrder;
    dueno?: Prisma.UsuarioOrderByWithRelationInput;
    profesionales?: Prisma.ProfesionalOrderByRelationAggregateInput;
    servicios?: Prisma.ServicioOrderByRelationAggregateInput;
    citas?: Prisma.CitaOrderByRelationAggregateInput;
    suscripcion?: Prisma.SuscripcionOrderByWithRelationInput;
    configuracion?: Prisma.ConfiguracionOrderByWithRelationInput;
};
export type NegocioWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.NegocioWhereInput | Prisma.NegocioWhereInput[];
    OR?: Prisma.NegocioWhereInput[];
    NOT?: Prisma.NegocioWhereInput | Prisma.NegocioWhereInput[];
    nombre?: Prisma.StringFilter<"Negocio"> | string;
    descripcion?: Prisma.StringNullableFilter<"Negocio"> | string | null;
    telefono?: Prisma.StringNullableFilter<"Negocio"> | string | null;
    direccion?: Prisma.StringNullableFilter<"Negocio"> | string | null;
    creadoEn?: Prisma.DateTimeFilter<"Negocio"> | Date | string;
    duenoId?: Prisma.IntFilter<"Negocio"> | number;
    dueno?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
    profesionales?: Prisma.ProfesionalListRelationFilter;
    servicios?: Prisma.ServicioListRelationFilter;
    citas?: Prisma.CitaListRelationFilter;
    suscripcion?: Prisma.XOR<Prisma.SuscripcionNullableScalarRelationFilter, Prisma.SuscripcionWhereInput> | null;
    configuracion?: Prisma.XOR<Prisma.ConfiguracionNullableScalarRelationFilter, Prisma.ConfiguracionWhereInput> | null;
}, "id">;
export type NegocioOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrderInput | Prisma.SortOrder;
    telefono?: Prisma.SortOrderInput | Prisma.SortOrder;
    direccion?: Prisma.SortOrderInput | Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    duenoId?: Prisma.SortOrder;
    _count?: Prisma.NegocioCountOrderByAggregateInput;
    _avg?: Prisma.NegocioAvgOrderByAggregateInput;
    _max?: Prisma.NegocioMaxOrderByAggregateInput;
    _min?: Prisma.NegocioMinOrderByAggregateInput;
    _sum?: Prisma.NegocioSumOrderByAggregateInput;
};
export type NegocioScalarWhereWithAggregatesInput = {
    AND?: Prisma.NegocioScalarWhereWithAggregatesInput | Prisma.NegocioScalarWhereWithAggregatesInput[];
    OR?: Prisma.NegocioScalarWhereWithAggregatesInput[];
    NOT?: Prisma.NegocioScalarWhereWithAggregatesInput | Prisma.NegocioScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Negocio"> | number;
    nombre?: Prisma.StringWithAggregatesFilter<"Negocio"> | string;
    descripcion?: Prisma.StringNullableWithAggregatesFilter<"Negocio"> | string | null;
    telefono?: Prisma.StringNullableWithAggregatesFilter<"Negocio"> | string | null;
    direccion?: Prisma.StringNullableWithAggregatesFilter<"Negocio"> | string | null;
    creadoEn?: Prisma.DateTimeWithAggregatesFilter<"Negocio"> | Date | string;
    duenoId?: Prisma.IntWithAggregatesFilter<"Negocio"> | number;
};
export type NegocioCreateInput = {
    nombre: string;
    descripcion?: string | null;
    telefono?: string | null;
    direccion?: string | null;
    creadoEn?: Date | string;
    dueno: Prisma.UsuarioCreateNestedOneWithoutNegociosInput;
    profesionales?: Prisma.ProfesionalCreateNestedManyWithoutNegocioInput;
    servicios?: Prisma.ServicioCreateNestedManyWithoutNegocioInput;
    citas?: Prisma.CitaCreateNestedManyWithoutNegocioInput;
    suscripcion?: Prisma.SuscripcionCreateNestedOneWithoutNegocioInput;
    configuracion?: Prisma.ConfiguracionCreateNestedOneWithoutNegocioInput;
};
export type NegocioUncheckedCreateInput = {
    id?: number;
    nombre: string;
    descripcion?: string | null;
    telefono?: string | null;
    direccion?: string | null;
    creadoEn?: Date | string;
    duenoId: number;
    profesionales?: Prisma.ProfesionalUncheckedCreateNestedManyWithoutNegocioInput;
    servicios?: Prisma.ServicioUncheckedCreateNestedManyWithoutNegocioInput;
    citas?: Prisma.CitaUncheckedCreateNestedManyWithoutNegocioInput;
    suscripcion?: Prisma.SuscripcionUncheckedCreateNestedOneWithoutNegocioInput;
    configuracion?: Prisma.ConfiguracionUncheckedCreateNestedOneWithoutNegocioInput;
};
export type NegocioUpdateInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueno?: Prisma.UsuarioUpdateOneRequiredWithoutNegociosNestedInput;
    profesionales?: Prisma.ProfesionalUpdateManyWithoutNegocioNestedInput;
    servicios?: Prisma.ServicioUpdateManyWithoutNegocioNestedInput;
    citas?: Prisma.CitaUpdateManyWithoutNegocioNestedInput;
    suscripcion?: Prisma.SuscripcionUpdateOneWithoutNegocioNestedInput;
    configuracion?: Prisma.ConfiguracionUpdateOneWithoutNegocioNestedInput;
};
export type NegocioUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    duenoId?: Prisma.IntFieldUpdateOperationsInput | number;
    profesionales?: Prisma.ProfesionalUncheckedUpdateManyWithoutNegocioNestedInput;
    servicios?: Prisma.ServicioUncheckedUpdateManyWithoutNegocioNestedInput;
    citas?: Prisma.CitaUncheckedUpdateManyWithoutNegocioNestedInput;
    suscripcion?: Prisma.SuscripcionUncheckedUpdateOneWithoutNegocioNestedInput;
    configuracion?: Prisma.ConfiguracionUncheckedUpdateOneWithoutNegocioNestedInput;
};
export type NegocioCreateManyInput = {
    id?: number;
    nombre: string;
    descripcion?: string | null;
    telefono?: string | null;
    direccion?: string | null;
    creadoEn?: Date | string;
    duenoId: number;
};
export type NegocioUpdateManyMutationInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NegocioUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    duenoId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type NegocioListRelationFilter = {
    every?: Prisma.NegocioWhereInput;
    some?: Prisma.NegocioWhereInput;
    none?: Prisma.NegocioWhereInput;
};
export type NegocioOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type NegocioCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    direccion?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    duenoId?: Prisma.SortOrder;
};
export type NegocioAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    duenoId?: Prisma.SortOrder;
};
export type NegocioMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    direccion?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    duenoId?: Prisma.SortOrder;
};
export type NegocioMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    direccion?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    duenoId?: Prisma.SortOrder;
};
export type NegocioSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    duenoId?: Prisma.SortOrder;
};
export type NegocioScalarRelationFilter = {
    is?: Prisma.NegocioWhereInput;
    isNot?: Prisma.NegocioWhereInput;
};
export type NegocioCreateNestedManyWithoutDuenoInput = {
    create?: Prisma.XOR<Prisma.NegocioCreateWithoutDuenoInput, Prisma.NegocioUncheckedCreateWithoutDuenoInput> | Prisma.NegocioCreateWithoutDuenoInput[] | Prisma.NegocioUncheckedCreateWithoutDuenoInput[];
    connectOrCreate?: Prisma.NegocioCreateOrConnectWithoutDuenoInput | Prisma.NegocioCreateOrConnectWithoutDuenoInput[];
    createMany?: Prisma.NegocioCreateManyDuenoInputEnvelope;
    connect?: Prisma.NegocioWhereUniqueInput | Prisma.NegocioWhereUniqueInput[];
};
export type NegocioUncheckedCreateNestedManyWithoutDuenoInput = {
    create?: Prisma.XOR<Prisma.NegocioCreateWithoutDuenoInput, Prisma.NegocioUncheckedCreateWithoutDuenoInput> | Prisma.NegocioCreateWithoutDuenoInput[] | Prisma.NegocioUncheckedCreateWithoutDuenoInput[];
    connectOrCreate?: Prisma.NegocioCreateOrConnectWithoutDuenoInput | Prisma.NegocioCreateOrConnectWithoutDuenoInput[];
    createMany?: Prisma.NegocioCreateManyDuenoInputEnvelope;
    connect?: Prisma.NegocioWhereUniqueInput | Prisma.NegocioWhereUniqueInput[];
};
export type NegocioUpdateManyWithoutDuenoNestedInput = {
    create?: Prisma.XOR<Prisma.NegocioCreateWithoutDuenoInput, Prisma.NegocioUncheckedCreateWithoutDuenoInput> | Prisma.NegocioCreateWithoutDuenoInput[] | Prisma.NegocioUncheckedCreateWithoutDuenoInput[];
    connectOrCreate?: Prisma.NegocioCreateOrConnectWithoutDuenoInput | Prisma.NegocioCreateOrConnectWithoutDuenoInput[];
    upsert?: Prisma.NegocioUpsertWithWhereUniqueWithoutDuenoInput | Prisma.NegocioUpsertWithWhereUniqueWithoutDuenoInput[];
    createMany?: Prisma.NegocioCreateManyDuenoInputEnvelope;
    set?: Prisma.NegocioWhereUniqueInput | Prisma.NegocioWhereUniqueInput[];
    disconnect?: Prisma.NegocioWhereUniqueInput | Prisma.NegocioWhereUniqueInput[];
    delete?: Prisma.NegocioWhereUniqueInput | Prisma.NegocioWhereUniqueInput[];
    connect?: Prisma.NegocioWhereUniqueInput | Prisma.NegocioWhereUniqueInput[];
    update?: Prisma.NegocioUpdateWithWhereUniqueWithoutDuenoInput | Prisma.NegocioUpdateWithWhereUniqueWithoutDuenoInput[];
    updateMany?: Prisma.NegocioUpdateManyWithWhereWithoutDuenoInput | Prisma.NegocioUpdateManyWithWhereWithoutDuenoInput[];
    deleteMany?: Prisma.NegocioScalarWhereInput | Prisma.NegocioScalarWhereInput[];
};
export type NegocioUncheckedUpdateManyWithoutDuenoNestedInput = {
    create?: Prisma.XOR<Prisma.NegocioCreateWithoutDuenoInput, Prisma.NegocioUncheckedCreateWithoutDuenoInput> | Prisma.NegocioCreateWithoutDuenoInput[] | Prisma.NegocioUncheckedCreateWithoutDuenoInput[];
    connectOrCreate?: Prisma.NegocioCreateOrConnectWithoutDuenoInput | Prisma.NegocioCreateOrConnectWithoutDuenoInput[];
    upsert?: Prisma.NegocioUpsertWithWhereUniqueWithoutDuenoInput | Prisma.NegocioUpsertWithWhereUniqueWithoutDuenoInput[];
    createMany?: Prisma.NegocioCreateManyDuenoInputEnvelope;
    set?: Prisma.NegocioWhereUniqueInput | Prisma.NegocioWhereUniqueInput[];
    disconnect?: Prisma.NegocioWhereUniqueInput | Prisma.NegocioWhereUniqueInput[];
    delete?: Prisma.NegocioWhereUniqueInput | Prisma.NegocioWhereUniqueInput[];
    connect?: Prisma.NegocioWhereUniqueInput | Prisma.NegocioWhereUniqueInput[];
    update?: Prisma.NegocioUpdateWithWhereUniqueWithoutDuenoInput | Prisma.NegocioUpdateWithWhereUniqueWithoutDuenoInput[];
    updateMany?: Prisma.NegocioUpdateManyWithWhereWithoutDuenoInput | Prisma.NegocioUpdateManyWithWhereWithoutDuenoInput[];
    deleteMany?: Prisma.NegocioScalarWhereInput | Prisma.NegocioScalarWhereInput[];
};
export type NegocioCreateNestedOneWithoutProfesionalesInput = {
    create?: Prisma.XOR<Prisma.NegocioCreateWithoutProfesionalesInput, Prisma.NegocioUncheckedCreateWithoutProfesionalesInput>;
    connectOrCreate?: Prisma.NegocioCreateOrConnectWithoutProfesionalesInput;
    connect?: Prisma.NegocioWhereUniqueInput;
};
export type NegocioUpdateOneRequiredWithoutProfesionalesNestedInput = {
    create?: Prisma.XOR<Prisma.NegocioCreateWithoutProfesionalesInput, Prisma.NegocioUncheckedCreateWithoutProfesionalesInput>;
    connectOrCreate?: Prisma.NegocioCreateOrConnectWithoutProfesionalesInput;
    upsert?: Prisma.NegocioUpsertWithoutProfesionalesInput;
    connect?: Prisma.NegocioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.NegocioUpdateToOneWithWhereWithoutProfesionalesInput, Prisma.NegocioUpdateWithoutProfesionalesInput>, Prisma.NegocioUncheckedUpdateWithoutProfesionalesInput>;
};
export type NegocioCreateNestedOneWithoutServiciosInput = {
    create?: Prisma.XOR<Prisma.NegocioCreateWithoutServiciosInput, Prisma.NegocioUncheckedCreateWithoutServiciosInput>;
    connectOrCreate?: Prisma.NegocioCreateOrConnectWithoutServiciosInput;
    connect?: Prisma.NegocioWhereUniqueInput;
};
export type NegocioUpdateOneRequiredWithoutServiciosNestedInput = {
    create?: Prisma.XOR<Prisma.NegocioCreateWithoutServiciosInput, Prisma.NegocioUncheckedCreateWithoutServiciosInput>;
    connectOrCreate?: Prisma.NegocioCreateOrConnectWithoutServiciosInput;
    upsert?: Prisma.NegocioUpsertWithoutServiciosInput;
    connect?: Prisma.NegocioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.NegocioUpdateToOneWithWhereWithoutServiciosInput, Prisma.NegocioUpdateWithoutServiciosInput>, Prisma.NegocioUncheckedUpdateWithoutServiciosInput>;
};
export type NegocioCreateNestedOneWithoutCitasInput = {
    create?: Prisma.XOR<Prisma.NegocioCreateWithoutCitasInput, Prisma.NegocioUncheckedCreateWithoutCitasInput>;
    connectOrCreate?: Prisma.NegocioCreateOrConnectWithoutCitasInput;
    connect?: Prisma.NegocioWhereUniqueInput;
};
export type NegocioUpdateOneRequiredWithoutCitasNestedInput = {
    create?: Prisma.XOR<Prisma.NegocioCreateWithoutCitasInput, Prisma.NegocioUncheckedCreateWithoutCitasInput>;
    connectOrCreate?: Prisma.NegocioCreateOrConnectWithoutCitasInput;
    upsert?: Prisma.NegocioUpsertWithoutCitasInput;
    connect?: Prisma.NegocioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.NegocioUpdateToOneWithWhereWithoutCitasInput, Prisma.NegocioUpdateWithoutCitasInput>, Prisma.NegocioUncheckedUpdateWithoutCitasInput>;
};
export type NegocioCreateNestedOneWithoutSuscripcionInput = {
    create?: Prisma.XOR<Prisma.NegocioCreateWithoutSuscripcionInput, Prisma.NegocioUncheckedCreateWithoutSuscripcionInput>;
    connectOrCreate?: Prisma.NegocioCreateOrConnectWithoutSuscripcionInput;
    connect?: Prisma.NegocioWhereUniqueInput;
};
export type NegocioUpdateOneRequiredWithoutSuscripcionNestedInput = {
    create?: Prisma.XOR<Prisma.NegocioCreateWithoutSuscripcionInput, Prisma.NegocioUncheckedCreateWithoutSuscripcionInput>;
    connectOrCreate?: Prisma.NegocioCreateOrConnectWithoutSuscripcionInput;
    upsert?: Prisma.NegocioUpsertWithoutSuscripcionInput;
    connect?: Prisma.NegocioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.NegocioUpdateToOneWithWhereWithoutSuscripcionInput, Prisma.NegocioUpdateWithoutSuscripcionInput>, Prisma.NegocioUncheckedUpdateWithoutSuscripcionInput>;
};
export type NegocioCreateNestedOneWithoutConfiguracionInput = {
    create?: Prisma.XOR<Prisma.NegocioCreateWithoutConfiguracionInput, Prisma.NegocioUncheckedCreateWithoutConfiguracionInput>;
    connectOrCreate?: Prisma.NegocioCreateOrConnectWithoutConfiguracionInput;
    connect?: Prisma.NegocioWhereUniqueInput;
};
export type NegocioUpdateOneRequiredWithoutConfiguracionNestedInput = {
    create?: Prisma.XOR<Prisma.NegocioCreateWithoutConfiguracionInput, Prisma.NegocioUncheckedCreateWithoutConfiguracionInput>;
    connectOrCreate?: Prisma.NegocioCreateOrConnectWithoutConfiguracionInput;
    upsert?: Prisma.NegocioUpsertWithoutConfiguracionInput;
    connect?: Prisma.NegocioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.NegocioUpdateToOneWithWhereWithoutConfiguracionInput, Prisma.NegocioUpdateWithoutConfiguracionInput>, Prisma.NegocioUncheckedUpdateWithoutConfiguracionInput>;
};
export type NegocioCreateWithoutDuenoInput = {
    nombre: string;
    descripcion?: string | null;
    telefono?: string | null;
    direccion?: string | null;
    creadoEn?: Date | string;
    profesionales?: Prisma.ProfesionalCreateNestedManyWithoutNegocioInput;
    servicios?: Prisma.ServicioCreateNestedManyWithoutNegocioInput;
    citas?: Prisma.CitaCreateNestedManyWithoutNegocioInput;
    suscripcion?: Prisma.SuscripcionCreateNestedOneWithoutNegocioInput;
    configuracion?: Prisma.ConfiguracionCreateNestedOneWithoutNegocioInput;
};
export type NegocioUncheckedCreateWithoutDuenoInput = {
    id?: number;
    nombre: string;
    descripcion?: string | null;
    telefono?: string | null;
    direccion?: string | null;
    creadoEn?: Date | string;
    profesionales?: Prisma.ProfesionalUncheckedCreateNestedManyWithoutNegocioInput;
    servicios?: Prisma.ServicioUncheckedCreateNestedManyWithoutNegocioInput;
    citas?: Prisma.CitaUncheckedCreateNestedManyWithoutNegocioInput;
    suscripcion?: Prisma.SuscripcionUncheckedCreateNestedOneWithoutNegocioInput;
    configuracion?: Prisma.ConfiguracionUncheckedCreateNestedOneWithoutNegocioInput;
};
export type NegocioCreateOrConnectWithoutDuenoInput = {
    where: Prisma.NegocioWhereUniqueInput;
    create: Prisma.XOR<Prisma.NegocioCreateWithoutDuenoInput, Prisma.NegocioUncheckedCreateWithoutDuenoInput>;
};
export type NegocioCreateManyDuenoInputEnvelope = {
    data: Prisma.NegocioCreateManyDuenoInput | Prisma.NegocioCreateManyDuenoInput[];
    skipDuplicates?: boolean;
};
export type NegocioUpsertWithWhereUniqueWithoutDuenoInput = {
    where: Prisma.NegocioWhereUniqueInput;
    update: Prisma.XOR<Prisma.NegocioUpdateWithoutDuenoInput, Prisma.NegocioUncheckedUpdateWithoutDuenoInput>;
    create: Prisma.XOR<Prisma.NegocioCreateWithoutDuenoInput, Prisma.NegocioUncheckedCreateWithoutDuenoInput>;
};
export type NegocioUpdateWithWhereUniqueWithoutDuenoInput = {
    where: Prisma.NegocioWhereUniqueInput;
    data: Prisma.XOR<Prisma.NegocioUpdateWithoutDuenoInput, Prisma.NegocioUncheckedUpdateWithoutDuenoInput>;
};
export type NegocioUpdateManyWithWhereWithoutDuenoInput = {
    where: Prisma.NegocioScalarWhereInput;
    data: Prisma.XOR<Prisma.NegocioUpdateManyMutationInput, Prisma.NegocioUncheckedUpdateManyWithoutDuenoInput>;
};
export type NegocioScalarWhereInput = {
    AND?: Prisma.NegocioScalarWhereInput | Prisma.NegocioScalarWhereInput[];
    OR?: Prisma.NegocioScalarWhereInput[];
    NOT?: Prisma.NegocioScalarWhereInput | Prisma.NegocioScalarWhereInput[];
    id?: Prisma.IntFilter<"Negocio"> | number;
    nombre?: Prisma.StringFilter<"Negocio"> | string;
    descripcion?: Prisma.StringNullableFilter<"Negocio"> | string | null;
    telefono?: Prisma.StringNullableFilter<"Negocio"> | string | null;
    direccion?: Prisma.StringNullableFilter<"Negocio"> | string | null;
    creadoEn?: Prisma.DateTimeFilter<"Negocio"> | Date | string;
    duenoId?: Prisma.IntFilter<"Negocio"> | number;
};
export type NegocioCreateWithoutProfesionalesInput = {
    nombre: string;
    descripcion?: string | null;
    telefono?: string | null;
    direccion?: string | null;
    creadoEn?: Date | string;
    dueno: Prisma.UsuarioCreateNestedOneWithoutNegociosInput;
    servicios?: Prisma.ServicioCreateNestedManyWithoutNegocioInput;
    citas?: Prisma.CitaCreateNestedManyWithoutNegocioInput;
    suscripcion?: Prisma.SuscripcionCreateNestedOneWithoutNegocioInput;
    configuracion?: Prisma.ConfiguracionCreateNestedOneWithoutNegocioInput;
};
export type NegocioUncheckedCreateWithoutProfesionalesInput = {
    id?: number;
    nombre: string;
    descripcion?: string | null;
    telefono?: string | null;
    direccion?: string | null;
    creadoEn?: Date | string;
    duenoId: number;
    servicios?: Prisma.ServicioUncheckedCreateNestedManyWithoutNegocioInput;
    citas?: Prisma.CitaUncheckedCreateNestedManyWithoutNegocioInput;
    suscripcion?: Prisma.SuscripcionUncheckedCreateNestedOneWithoutNegocioInput;
    configuracion?: Prisma.ConfiguracionUncheckedCreateNestedOneWithoutNegocioInput;
};
export type NegocioCreateOrConnectWithoutProfesionalesInput = {
    where: Prisma.NegocioWhereUniqueInput;
    create: Prisma.XOR<Prisma.NegocioCreateWithoutProfesionalesInput, Prisma.NegocioUncheckedCreateWithoutProfesionalesInput>;
};
export type NegocioUpsertWithoutProfesionalesInput = {
    update: Prisma.XOR<Prisma.NegocioUpdateWithoutProfesionalesInput, Prisma.NegocioUncheckedUpdateWithoutProfesionalesInput>;
    create: Prisma.XOR<Prisma.NegocioCreateWithoutProfesionalesInput, Prisma.NegocioUncheckedCreateWithoutProfesionalesInput>;
    where?: Prisma.NegocioWhereInput;
};
export type NegocioUpdateToOneWithWhereWithoutProfesionalesInput = {
    where?: Prisma.NegocioWhereInput;
    data: Prisma.XOR<Prisma.NegocioUpdateWithoutProfesionalesInput, Prisma.NegocioUncheckedUpdateWithoutProfesionalesInput>;
};
export type NegocioUpdateWithoutProfesionalesInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueno?: Prisma.UsuarioUpdateOneRequiredWithoutNegociosNestedInput;
    servicios?: Prisma.ServicioUpdateManyWithoutNegocioNestedInput;
    citas?: Prisma.CitaUpdateManyWithoutNegocioNestedInput;
    suscripcion?: Prisma.SuscripcionUpdateOneWithoutNegocioNestedInput;
    configuracion?: Prisma.ConfiguracionUpdateOneWithoutNegocioNestedInput;
};
export type NegocioUncheckedUpdateWithoutProfesionalesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    duenoId?: Prisma.IntFieldUpdateOperationsInput | number;
    servicios?: Prisma.ServicioUncheckedUpdateManyWithoutNegocioNestedInput;
    citas?: Prisma.CitaUncheckedUpdateManyWithoutNegocioNestedInput;
    suscripcion?: Prisma.SuscripcionUncheckedUpdateOneWithoutNegocioNestedInput;
    configuracion?: Prisma.ConfiguracionUncheckedUpdateOneWithoutNegocioNestedInput;
};
export type NegocioCreateWithoutServiciosInput = {
    nombre: string;
    descripcion?: string | null;
    telefono?: string | null;
    direccion?: string | null;
    creadoEn?: Date | string;
    dueno: Prisma.UsuarioCreateNestedOneWithoutNegociosInput;
    profesionales?: Prisma.ProfesionalCreateNestedManyWithoutNegocioInput;
    citas?: Prisma.CitaCreateNestedManyWithoutNegocioInput;
    suscripcion?: Prisma.SuscripcionCreateNestedOneWithoutNegocioInput;
    configuracion?: Prisma.ConfiguracionCreateNestedOneWithoutNegocioInput;
};
export type NegocioUncheckedCreateWithoutServiciosInput = {
    id?: number;
    nombre: string;
    descripcion?: string | null;
    telefono?: string | null;
    direccion?: string | null;
    creadoEn?: Date | string;
    duenoId: number;
    profesionales?: Prisma.ProfesionalUncheckedCreateNestedManyWithoutNegocioInput;
    citas?: Prisma.CitaUncheckedCreateNestedManyWithoutNegocioInput;
    suscripcion?: Prisma.SuscripcionUncheckedCreateNestedOneWithoutNegocioInput;
    configuracion?: Prisma.ConfiguracionUncheckedCreateNestedOneWithoutNegocioInput;
};
export type NegocioCreateOrConnectWithoutServiciosInput = {
    where: Prisma.NegocioWhereUniqueInput;
    create: Prisma.XOR<Prisma.NegocioCreateWithoutServiciosInput, Prisma.NegocioUncheckedCreateWithoutServiciosInput>;
};
export type NegocioUpsertWithoutServiciosInput = {
    update: Prisma.XOR<Prisma.NegocioUpdateWithoutServiciosInput, Prisma.NegocioUncheckedUpdateWithoutServiciosInput>;
    create: Prisma.XOR<Prisma.NegocioCreateWithoutServiciosInput, Prisma.NegocioUncheckedCreateWithoutServiciosInput>;
    where?: Prisma.NegocioWhereInput;
};
export type NegocioUpdateToOneWithWhereWithoutServiciosInput = {
    where?: Prisma.NegocioWhereInput;
    data: Prisma.XOR<Prisma.NegocioUpdateWithoutServiciosInput, Prisma.NegocioUncheckedUpdateWithoutServiciosInput>;
};
export type NegocioUpdateWithoutServiciosInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueno?: Prisma.UsuarioUpdateOneRequiredWithoutNegociosNestedInput;
    profesionales?: Prisma.ProfesionalUpdateManyWithoutNegocioNestedInput;
    citas?: Prisma.CitaUpdateManyWithoutNegocioNestedInput;
    suscripcion?: Prisma.SuscripcionUpdateOneWithoutNegocioNestedInput;
    configuracion?: Prisma.ConfiguracionUpdateOneWithoutNegocioNestedInput;
};
export type NegocioUncheckedUpdateWithoutServiciosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    duenoId?: Prisma.IntFieldUpdateOperationsInput | number;
    profesionales?: Prisma.ProfesionalUncheckedUpdateManyWithoutNegocioNestedInput;
    citas?: Prisma.CitaUncheckedUpdateManyWithoutNegocioNestedInput;
    suscripcion?: Prisma.SuscripcionUncheckedUpdateOneWithoutNegocioNestedInput;
    configuracion?: Prisma.ConfiguracionUncheckedUpdateOneWithoutNegocioNestedInput;
};
export type NegocioCreateWithoutCitasInput = {
    nombre: string;
    descripcion?: string | null;
    telefono?: string | null;
    direccion?: string | null;
    creadoEn?: Date | string;
    dueno: Prisma.UsuarioCreateNestedOneWithoutNegociosInput;
    profesionales?: Prisma.ProfesionalCreateNestedManyWithoutNegocioInput;
    servicios?: Prisma.ServicioCreateNestedManyWithoutNegocioInput;
    suscripcion?: Prisma.SuscripcionCreateNestedOneWithoutNegocioInput;
    configuracion?: Prisma.ConfiguracionCreateNestedOneWithoutNegocioInput;
};
export type NegocioUncheckedCreateWithoutCitasInput = {
    id?: number;
    nombre: string;
    descripcion?: string | null;
    telefono?: string | null;
    direccion?: string | null;
    creadoEn?: Date | string;
    duenoId: number;
    profesionales?: Prisma.ProfesionalUncheckedCreateNestedManyWithoutNegocioInput;
    servicios?: Prisma.ServicioUncheckedCreateNestedManyWithoutNegocioInput;
    suscripcion?: Prisma.SuscripcionUncheckedCreateNestedOneWithoutNegocioInput;
    configuracion?: Prisma.ConfiguracionUncheckedCreateNestedOneWithoutNegocioInput;
};
export type NegocioCreateOrConnectWithoutCitasInput = {
    where: Prisma.NegocioWhereUniqueInput;
    create: Prisma.XOR<Prisma.NegocioCreateWithoutCitasInput, Prisma.NegocioUncheckedCreateWithoutCitasInput>;
};
export type NegocioUpsertWithoutCitasInput = {
    update: Prisma.XOR<Prisma.NegocioUpdateWithoutCitasInput, Prisma.NegocioUncheckedUpdateWithoutCitasInput>;
    create: Prisma.XOR<Prisma.NegocioCreateWithoutCitasInput, Prisma.NegocioUncheckedCreateWithoutCitasInput>;
    where?: Prisma.NegocioWhereInput;
};
export type NegocioUpdateToOneWithWhereWithoutCitasInput = {
    where?: Prisma.NegocioWhereInput;
    data: Prisma.XOR<Prisma.NegocioUpdateWithoutCitasInput, Prisma.NegocioUncheckedUpdateWithoutCitasInput>;
};
export type NegocioUpdateWithoutCitasInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueno?: Prisma.UsuarioUpdateOneRequiredWithoutNegociosNestedInput;
    profesionales?: Prisma.ProfesionalUpdateManyWithoutNegocioNestedInput;
    servicios?: Prisma.ServicioUpdateManyWithoutNegocioNestedInput;
    suscripcion?: Prisma.SuscripcionUpdateOneWithoutNegocioNestedInput;
    configuracion?: Prisma.ConfiguracionUpdateOneWithoutNegocioNestedInput;
};
export type NegocioUncheckedUpdateWithoutCitasInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    duenoId?: Prisma.IntFieldUpdateOperationsInput | number;
    profesionales?: Prisma.ProfesionalUncheckedUpdateManyWithoutNegocioNestedInput;
    servicios?: Prisma.ServicioUncheckedUpdateManyWithoutNegocioNestedInput;
    suscripcion?: Prisma.SuscripcionUncheckedUpdateOneWithoutNegocioNestedInput;
    configuracion?: Prisma.ConfiguracionUncheckedUpdateOneWithoutNegocioNestedInput;
};
export type NegocioCreateWithoutSuscripcionInput = {
    nombre: string;
    descripcion?: string | null;
    telefono?: string | null;
    direccion?: string | null;
    creadoEn?: Date | string;
    dueno: Prisma.UsuarioCreateNestedOneWithoutNegociosInput;
    profesionales?: Prisma.ProfesionalCreateNestedManyWithoutNegocioInput;
    servicios?: Prisma.ServicioCreateNestedManyWithoutNegocioInput;
    citas?: Prisma.CitaCreateNestedManyWithoutNegocioInput;
    configuracion?: Prisma.ConfiguracionCreateNestedOneWithoutNegocioInput;
};
export type NegocioUncheckedCreateWithoutSuscripcionInput = {
    id?: number;
    nombre: string;
    descripcion?: string | null;
    telefono?: string | null;
    direccion?: string | null;
    creadoEn?: Date | string;
    duenoId: number;
    profesionales?: Prisma.ProfesionalUncheckedCreateNestedManyWithoutNegocioInput;
    servicios?: Prisma.ServicioUncheckedCreateNestedManyWithoutNegocioInput;
    citas?: Prisma.CitaUncheckedCreateNestedManyWithoutNegocioInput;
    configuracion?: Prisma.ConfiguracionUncheckedCreateNestedOneWithoutNegocioInput;
};
export type NegocioCreateOrConnectWithoutSuscripcionInput = {
    where: Prisma.NegocioWhereUniqueInput;
    create: Prisma.XOR<Prisma.NegocioCreateWithoutSuscripcionInput, Prisma.NegocioUncheckedCreateWithoutSuscripcionInput>;
};
export type NegocioUpsertWithoutSuscripcionInput = {
    update: Prisma.XOR<Prisma.NegocioUpdateWithoutSuscripcionInput, Prisma.NegocioUncheckedUpdateWithoutSuscripcionInput>;
    create: Prisma.XOR<Prisma.NegocioCreateWithoutSuscripcionInput, Prisma.NegocioUncheckedCreateWithoutSuscripcionInput>;
    where?: Prisma.NegocioWhereInput;
};
export type NegocioUpdateToOneWithWhereWithoutSuscripcionInput = {
    where?: Prisma.NegocioWhereInput;
    data: Prisma.XOR<Prisma.NegocioUpdateWithoutSuscripcionInput, Prisma.NegocioUncheckedUpdateWithoutSuscripcionInput>;
};
export type NegocioUpdateWithoutSuscripcionInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueno?: Prisma.UsuarioUpdateOneRequiredWithoutNegociosNestedInput;
    profesionales?: Prisma.ProfesionalUpdateManyWithoutNegocioNestedInput;
    servicios?: Prisma.ServicioUpdateManyWithoutNegocioNestedInput;
    citas?: Prisma.CitaUpdateManyWithoutNegocioNestedInput;
    configuracion?: Prisma.ConfiguracionUpdateOneWithoutNegocioNestedInput;
};
export type NegocioUncheckedUpdateWithoutSuscripcionInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    duenoId?: Prisma.IntFieldUpdateOperationsInput | number;
    profesionales?: Prisma.ProfesionalUncheckedUpdateManyWithoutNegocioNestedInput;
    servicios?: Prisma.ServicioUncheckedUpdateManyWithoutNegocioNestedInput;
    citas?: Prisma.CitaUncheckedUpdateManyWithoutNegocioNestedInput;
    configuracion?: Prisma.ConfiguracionUncheckedUpdateOneWithoutNegocioNestedInput;
};
export type NegocioCreateWithoutConfiguracionInput = {
    nombre: string;
    descripcion?: string | null;
    telefono?: string | null;
    direccion?: string | null;
    creadoEn?: Date | string;
    dueno: Prisma.UsuarioCreateNestedOneWithoutNegociosInput;
    profesionales?: Prisma.ProfesionalCreateNestedManyWithoutNegocioInput;
    servicios?: Prisma.ServicioCreateNestedManyWithoutNegocioInput;
    citas?: Prisma.CitaCreateNestedManyWithoutNegocioInput;
    suscripcion?: Prisma.SuscripcionCreateNestedOneWithoutNegocioInput;
};
export type NegocioUncheckedCreateWithoutConfiguracionInput = {
    id?: number;
    nombre: string;
    descripcion?: string | null;
    telefono?: string | null;
    direccion?: string | null;
    creadoEn?: Date | string;
    duenoId: number;
    profesionales?: Prisma.ProfesionalUncheckedCreateNestedManyWithoutNegocioInput;
    servicios?: Prisma.ServicioUncheckedCreateNestedManyWithoutNegocioInput;
    citas?: Prisma.CitaUncheckedCreateNestedManyWithoutNegocioInput;
    suscripcion?: Prisma.SuscripcionUncheckedCreateNestedOneWithoutNegocioInput;
};
export type NegocioCreateOrConnectWithoutConfiguracionInput = {
    where: Prisma.NegocioWhereUniqueInput;
    create: Prisma.XOR<Prisma.NegocioCreateWithoutConfiguracionInput, Prisma.NegocioUncheckedCreateWithoutConfiguracionInput>;
};
export type NegocioUpsertWithoutConfiguracionInput = {
    update: Prisma.XOR<Prisma.NegocioUpdateWithoutConfiguracionInput, Prisma.NegocioUncheckedUpdateWithoutConfiguracionInput>;
    create: Prisma.XOR<Prisma.NegocioCreateWithoutConfiguracionInput, Prisma.NegocioUncheckedCreateWithoutConfiguracionInput>;
    where?: Prisma.NegocioWhereInput;
};
export type NegocioUpdateToOneWithWhereWithoutConfiguracionInput = {
    where?: Prisma.NegocioWhereInput;
    data: Prisma.XOR<Prisma.NegocioUpdateWithoutConfiguracionInput, Prisma.NegocioUncheckedUpdateWithoutConfiguracionInput>;
};
export type NegocioUpdateWithoutConfiguracionInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueno?: Prisma.UsuarioUpdateOneRequiredWithoutNegociosNestedInput;
    profesionales?: Prisma.ProfesionalUpdateManyWithoutNegocioNestedInput;
    servicios?: Prisma.ServicioUpdateManyWithoutNegocioNestedInput;
    citas?: Prisma.CitaUpdateManyWithoutNegocioNestedInput;
    suscripcion?: Prisma.SuscripcionUpdateOneWithoutNegocioNestedInput;
};
export type NegocioUncheckedUpdateWithoutConfiguracionInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    duenoId?: Prisma.IntFieldUpdateOperationsInput | number;
    profesionales?: Prisma.ProfesionalUncheckedUpdateManyWithoutNegocioNestedInput;
    servicios?: Prisma.ServicioUncheckedUpdateManyWithoutNegocioNestedInput;
    citas?: Prisma.CitaUncheckedUpdateManyWithoutNegocioNestedInput;
    suscripcion?: Prisma.SuscripcionUncheckedUpdateOneWithoutNegocioNestedInput;
};
export type NegocioCreateManyDuenoInput = {
    id?: number;
    nombre: string;
    descripcion?: string | null;
    telefono?: string | null;
    direccion?: string | null;
    creadoEn?: Date | string;
};
export type NegocioUpdateWithoutDuenoInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profesionales?: Prisma.ProfesionalUpdateManyWithoutNegocioNestedInput;
    servicios?: Prisma.ServicioUpdateManyWithoutNegocioNestedInput;
    citas?: Prisma.CitaUpdateManyWithoutNegocioNestedInput;
    suscripcion?: Prisma.SuscripcionUpdateOneWithoutNegocioNestedInput;
    configuracion?: Prisma.ConfiguracionUpdateOneWithoutNegocioNestedInput;
};
export type NegocioUncheckedUpdateWithoutDuenoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profesionales?: Prisma.ProfesionalUncheckedUpdateManyWithoutNegocioNestedInput;
    servicios?: Prisma.ServicioUncheckedUpdateManyWithoutNegocioNestedInput;
    citas?: Prisma.CitaUncheckedUpdateManyWithoutNegocioNestedInput;
    suscripcion?: Prisma.SuscripcionUncheckedUpdateOneWithoutNegocioNestedInput;
    configuracion?: Prisma.ConfiguracionUncheckedUpdateOneWithoutNegocioNestedInput;
};
export type NegocioUncheckedUpdateManyWithoutDuenoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NegocioCountOutputType = {
    profesionales: number;
    servicios: number;
    citas: number;
};
export type NegocioCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profesionales?: boolean | NegocioCountOutputTypeCountProfesionalesArgs;
    servicios?: boolean | NegocioCountOutputTypeCountServiciosArgs;
    citas?: boolean | NegocioCountOutputTypeCountCitasArgs;
};
export type NegocioCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NegocioCountOutputTypeSelect<ExtArgs> | null;
};
export type NegocioCountOutputTypeCountProfesionalesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProfesionalWhereInput;
};
export type NegocioCountOutputTypeCountServiciosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ServicioWhereInput;
};
export type NegocioCountOutputTypeCountCitasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CitaWhereInput;
};
export type NegocioSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    descripcion?: boolean;
    telefono?: boolean;
    direccion?: boolean;
    creadoEn?: boolean;
    duenoId?: boolean;
    dueno?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    profesionales?: boolean | Prisma.Negocio$profesionalesArgs<ExtArgs>;
    servicios?: boolean | Prisma.Negocio$serviciosArgs<ExtArgs>;
    citas?: boolean | Prisma.Negocio$citasArgs<ExtArgs>;
    suscripcion?: boolean | Prisma.Negocio$suscripcionArgs<ExtArgs>;
    configuracion?: boolean | Prisma.Negocio$configuracionArgs<ExtArgs>;
    _count?: boolean | Prisma.NegocioCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["negocio"]>;
export type NegocioSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    descripcion?: boolean;
    telefono?: boolean;
    direccion?: boolean;
    creadoEn?: boolean;
    duenoId?: boolean;
    dueno?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["negocio"]>;
export type NegocioSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    descripcion?: boolean;
    telefono?: boolean;
    direccion?: boolean;
    creadoEn?: boolean;
    duenoId?: boolean;
    dueno?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["negocio"]>;
export type NegocioSelectScalar = {
    id?: boolean;
    nombre?: boolean;
    descripcion?: boolean;
    telefono?: boolean;
    direccion?: boolean;
    creadoEn?: boolean;
    duenoId?: boolean;
};
export type NegocioOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre" | "descripcion" | "telefono" | "direccion" | "creadoEn" | "duenoId", ExtArgs["result"]["negocio"]>;
export type NegocioInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    dueno?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    profesionales?: boolean | Prisma.Negocio$profesionalesArgs<ExtArgs>;
    servicios?: boolean | Prisma.Negocio$serviciosArgs<ExtArgs>;
    citas?: boolean | Prisma.Negocio$citasArgs<ExtArgs>;
    suscripcion?: boolean | Prisma.Negocio$suscripcionArgs<ExtArgs>;
    configuracion?: boolean | Prisma.Negocio$configuracionArgs<ExtArgs>;
    _count?: boolean | Prisma.NegocioCountOutputTypeDefaultArgs<ExtArgs>;
};
export type NegocioIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    dueno?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type NegocioIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    dueno?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type $NegocioPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Negocio";
    objects: {
        dueno: Prisma.$UsuarioPayload<ExtArgs>;
        profesionales: Prisma.$ProfesionalPayload<ExtArgs>[];
        servicios: Prisma.$ServicioPayload<ExtArgs>[];
        citas: Prisma.$CitaPayload<ExtArgs>[];
        suscripcion: Prisma.$SuscripcionPayload<ExtArgs> | null;
        configuracion: Prisma.$ConfiguracionPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nombre: string;
        descripcion: string | null;
        telefono: string | null;
        direccion: string | null;
        creadoEn: Date;
        duenoId: number;
    }, ExtArgs["result"]["negocio"]>;
    composites: {};
};
export type NegocioGetPayload<S extends boolean | null | undefined | NegocioDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$NegocioPayload, S>;
export type NegocioCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<NegocioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: NegocioCountAggregateInputType | true;
};
export interface NegocioDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Negocio'];
        meta: {
            name: 'Negocio';
        };
    };
    findUnique<T extends NegocioFindUniqueArgs>(args: Prisma.SelectSubset<T, NegocioFindUniqueArgs<ExtArgs>>): Prisma.Prisma__NegocioClient<runtime.Types.Result.GetResult<Prisma.$NegocioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends NegocioFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, NegocioFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__NegocioClient<runtime.Types.Result.GetResult<Prisma.$NegocioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends NegocioFindFirstArgs>(args?: Prisma.SelectSubset<T, NegocioFindFirstArgs<ExtArgs>>): Prisma.Prisma__NegocioClient<runtime.Types.Result.GetResult<Prisma.$NegocioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends NegocioFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, NegocioFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__NegocioClient<runtime.Types.Result.GetResult<Prisma.$NegocioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends NegocioFindManyArgs>(args?: Prisma.SelectSubset<T, NegocioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NegocioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends NegocioCreateArgs>(args: Prisma.SelectSubset<T, NegocioCreateArgs<ExtArgs>>): Prisma.Prisma__NegocioClient<runtime.Types.Result.GetResult<Prisma.$NegocioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends NegocioCreateManyArgs>(args?: Prisma.SelectSubset<T, NegocioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends NegocioCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, NegocioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NegocioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends NegocioDeleteArgs>(args: Prisma.SelectSubset<T, NegocioDeleteArgs<ExtArgs>>): Prisma.Prisma__NegocioClient<runtime.Types.Result.GetResult<Prisma.$NegocioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends NegocioUpdateArgs>(args: Prisma.SelectSubset<T, NegocioUpdateArgs<ExtArgs>>): Prisma.Prisma__NegocioClient<runtime.Types.Result.GetResult<Prisma.$NegocioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends NegocioDeleteManyArgs>(args?: Prisma.SelectSubset<T, NegocioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends NegocioUpdateManyArgs>(args: Prisma.SelectSubset<T, NegocioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends NegocioUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, NegocioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NegocioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends NegocioUpsertArgs>(args: Prisma.SelectSubset<T, NegocioUpsertArgs<ExtArgs>>): Prisma.Prisma__NegocioClient<runtime.Types.Result.GetResult<Prisma.$NegocioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends NegocioCountArgs>(args?: Prisma.Subset<T, NegocioCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], NegocioCountAggregateOutputType> : number>;
    aggregate<T extends NegocioAggregateArgs>(args: Prisma.Subset<T, NegocioAggregateArgs>): Prisma.PrismaPromise<GetNegocioAggregateType<T>>;
    groupBy<T extends NegocioGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: NegocioGroupByArgs['orderBy'];
    } : {
        orderBy?: NegocioGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, NegocioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNegocioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: NegocioFieldRefs;
}
export interface Prisma__NegocioClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    dueno<T extends Prisma.UsuarioDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UsuarioDefaultArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    profesionales<T extends Prisma.Negocio$profesionalesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Negocio$profesionalesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfesionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    servicios<T extends Prisma.Negocio$serviciosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Negocio$serviciosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    citas<T extends Prisma.Negocio$citasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Negocio$citasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    suscripcion<T extends Prisma.Negocio$suscripcionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Negocio$suscripcionArgs<ExtArgs>>): Prisma.Prisma__SuscripcionClient<runtime.Types.Result.GetResult<Prisma.$SuscripcionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    configuracion<T extends Prisma.Negocio$configuracionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Negocio$configuracionArgs<ExtArgs>>): Prisma.Prisma__ConfiguracionClient<runtime.Types.Result.GetResult<Prisma.$ConfiguracionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface NegocioFieldRefs {
    readonly id: Prisma.FieldRef<"Negocio", 'Int'>;
    readonly nombre: Prisma.FieldRef<"Negocio", 'String'>;
    readonly descripcion: Prisma.FieldRef<"Negocio", 'String'>;
    readonly telefono: Prisma.FieldRef<"Negocio", 'String'>;
    readonly direccion: Prisma.FieldRef<"Negocio", 'String'>;
    readonly creadoEn: Prisma.FieldRef<"Negocio", 'DateTime'>;
    readonly duenoId: Prisma.FieldRef<"Negocio", 'Int'>;
}
export type NegocioFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NegocioSelect<ExtArgs> | null;
    omit?: Prisma.NegocioOmit<ExtArgs> | null;
    include?: Prisma.NegocioInclude<ExtArgs> | null;
    where: Prisma.NegocioWhereUniqueInput;
};
export type NegocioFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NegocioSelect<ExtArgs> | null;
    omit?: Prisma.NegocioOmit<ExtArgs> | null;
    include?: Prisma.NegocioInclude<ExtArgs> | null;
    where: Prisma.NegocioWhereUniqueInput;
};
export type NegocioFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NegocioSelect<ExtArgs> | null;
    omit?: Prisma.NegocioOmit<ExtArgs> | null;
    include?: Prisma.NegocioInclude<ExtArgs> | null;
    where?: Prisma.NegocioWhereInput;
    orderBy?: Prisma.NegocioOrderByWithRelationInput | Prisma.NegocioOrderByWithRelationInput[];
    cursor?: Prisma.NegocioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NegocioScalarFieldEnum | Prisma.NegocioScalarFieldEnum[];
};
export type NegocioFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NegocioSelect<ExtArgs> | null;
    omit?: Prisma.NegocioOmit<ExtArgs> | null;
    include?: Prisma.NegocioInclude<ExtArgs> | null;
    where?: Prisma.NegocioWhereInput;
    orderBy?: Prisma.NegocioOrderByWithRelationInput | Prisma.NegocioOrderByWithRelationInput[];
    cursor?: Prisma.NegocioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NegocioScalarFieldEnum | Prisma.NegocioScalarFieldEnum[];
};
export type NegocioFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NegocioSelect<ExtArgs> | null;
    omit?: Prisma.NegocioOmit<ExtArgs> | null;
    include?: Prisma.NegocioInclude<ExtArgs> | null;
    where?: Prisma.NegocioWhereInput;
    orderBy?: Prisma.NegocioOrderByWithRelationInput | Prisma.NegocioOrderByWithRelationInput[];
    cursor?: Prisma.NegocioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NegocioScalarFieldEnum | Prisma.NegocioScalarFieldEnum[];
};
export type NegocioCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NegocioSelect<ExtArgs> | null;
    omit?: Prisma.NegocioOmit<ExtArgs> | null;
    include?: Prisma.NegocioInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NegocioCreateInput, Prisma.NegocioUncheckedCreateInput>;
};
export type NegocioCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.NegocioCreateManyInput | Prisma.NegocioCreateManyInput[];
    skipDuplicates?: boolean;
};
export type NegocioCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NegocioSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.NegocioOmit<ExtArgs> | null;
    data: Prisma.NegocioCreateManyInput | Prisma.NegocioCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.NegocioIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type NegocioUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NegocioSelect<ExtArgs> | null;
    omit?: Prisma.NegocioOmit<ExtArgs> | null;
    include?: Prisma.NegocioInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NegocioUpdateInput, Prisma.NegocioUncheckedUpdateInput>;
    where: Prisma.NegocioWhereUniqueInput;
};
export type NegocioUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.NegocioUpdateManyMutationInput, Prisma.NegocioUncheckedUpdateManyInput>;
    where?: Prisma.NegocioWhereInput;
    limit?: number;
};
export type NegocioUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NegocioSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.NegocioOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NegocioUpdateManyMutationInput, Prisma.NegocioUncheckedUpdateManyInput>;
    where?: Prisma.NegocioWhereInput;
    limit?: number;
    include?: Prisma.NegocioIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type NegocioUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NegocioSelect<ExtArgs> | null;
    omit?: Prisma.NegocioOmit<ExtArgs> | null;
    include?: Prisma.NegocioInclude<ExtArgs> | null;
    where: Prisma.NegocioWhereUniqueInput;
    create: Prisma.XOR<Prisma.NegocioCreateInput, Prisma.NegocioUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.NegocioUpdateInput, Prisma.NegocioUncheckedUpdateInput>;
};
export type NegocioDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NegocioSelect<ExtArgs> | null;
    omit?: Prisma.NegocioOmit<ExtArgs> | null;
    include?: Prisma.NegocioInclude<ExtArgs> | null;
    where: Prisma.NegocioWhereUniqueInput;
};
export type NegocioDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NegocioWhereInput;
    limit?: number;
};
export type Negocio$profesionalesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfesionalSelect<ExtArgs> | null;
    omit?: Prisma.ProfesionalOmit<ExtArgs> | null;
    include?: Prisma.ProfesionalInclude<ExtArgs> | null;
    where?: Prisma.ProfesionalWhereInput;
    orderBy?: Prisma.ProfesionalOrderByWithRelationInput | Prisma.ProfesionalOrderByWithRelationInput[];
    cursor?: Prisma.ProfesionalWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProfesionalScalarFieldEnum | Prisma.ProfesionalScalarFieldEnum[];
};
export type Negocio$serviciosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServicioSelect<ExtArgs> | null;
    omit?: Prisma.ServicioOmit<ExtArgs> | null;
    include?: Prisma.ServicioInclude<ExtArgs> | null;
    where?: Prisma.ServicioWhereInput;
    orderBy?: Prisma.ServicioOrderByWithRelationInput | Prisma.ServicioOrderByWithRelationInput[];
    cursor?: Prisma.ServicioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ServicioScalarFieldEnum | Prisma.ServicioScalarFieldEnum[];
};
export type Negocio$citasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CitaSelect<ExtArgs> | null;
    omit?: Prisma.CitaOmit<ExtArgs> | null;
    include?: Prisma.CitaInclude<ExtArgs> | null;
    where?: Prisma.CitaWhereInput;
    orderBy?: Prisma.CitaOrderByWithRelationInput | Prisma.CitaOrderByWithRelationInput[];
    cursor?: Prisma.CitaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CitaScalarFieldEnum | Prisma.CitaScalarFieldEnum[];
};
export type Negocio$suscripcionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SuscripcionSelect<ExtArgs> | null;
    omit?: Prisma.SuscripcionOmit<ExtArgs> | null;
    include?: Prisma.SuscripcionInclude<ExtArgs> | null;
    where?: Prisma.SuscripcionWhereInput;
};
export type Negocio$configuracionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConfiguracionSelect<ExtArgs> | null;
    omit?: Prisma.ConfiguracionOmit<ExtArgs> | null;
    include?: Prisma.ConfiguracionInclude<ExtArgs> | null;
    where?: Prisma.ConfiguracionWhereInput;
};
export type NegocioDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NegocioSelect<ExtArgs> | null;
    omit?: Prisma.NegocioOmit<ExtArgs> | null;
    include?: Prisma.NegocioInclude<ExtArgs> | null;
};
