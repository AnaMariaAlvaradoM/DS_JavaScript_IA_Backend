import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ProfesionalModel = runtime.Types.Result.DefaultSelection<Prisma.$ProfesionalPayload>;
export type AggregateProfesional = {
    _count: ProfesionalCountAggregateOutputType | null;
    _avg: ProfesionalAvgAggregateOutputType | null;
    _sum: ProfesionalSumAggregateOutputType | null;
    _min: ProfesionalMinAggregateOutputType | null;
    _max: ProfesionalMaxAggregateOutputType | null;
};
export type ProfesionalAvgAggregateOutputType = {
    id: number | null;
    negocioId: number | null;
};
export type ProfesionalSumAggregateOutputType = {
    id: number | null;
    negocioId: number | null;
};
export type ProfesionalMinAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    especialidad: string | null;
    activo: boolean | null;
    creadoEn: Date | null;
    negocioId: number | null;
};
export type ProfesionalMaxAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    especialidad: string | null;
    activo: boolean | null;
    creadoEn: Date | null;
    negocioId: number | null;
};
export type ProfesionalCountAggregateOutputType = {
    id: number;
    nombre: number;
    especialidad: number;
    activo: number;
    creadoEn: number;
    negocioId: number;
    _all: number;
};
export type ProfesionalAvgAggregateInputType = {
    id?: true;
    negocioId?: true;
};
export type ProfesionalSumAggregateInputType = {
    id?: true;
    negocioId?: true;
};
export type ProfesionalMinAggregateInputType = {
    id?: true;
    nombre?: true;
    especialidad?: true;
    activo?: true;
    creadoEn?: true;
    negocioId?: true;
};
export type ProfesionalMaxAggregateInputType = {
    id?: true;
    nombre?: true;
    especialidad?: true;
    activo?: true;
    creadoEn?: true;
    negocioId?: true;
};
export type ProfesionalCountAggregateInputType = {
    id?: true;
    nombre?: true;
    especialidad?: true;
    activo?: true;
    creadoEn?: true;
    negocioId?: true;
    _all?: true;
};
export type ProfesionalAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProfesionalWhereInput;
    orderBy?: Prisma.ProfesionalOrderByWithRelationInput | Prisma.ProfesionalOrderByWithRelationInput[];
    cursor?: Prisma.ProfesionalWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProfesionalCountAggregateInputType;
    _avg?: ProfesionalAvgAggregateInputType;
    _sum?: ProfesionalSumAggregateInputType;
    _min?: ProfesionalMinAggregateInputType;
    _max?: ProfesionalMaxAggregateInputType;
};
export type GetProfesionalAggregateType<T extends ProfesionalAggregateArgs> = {
    [P in keyof T & keyof AggregateProfesional]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProfesional[P]> : Prisma.GetScalarType<T[P], AggregateProfesional[P]>;
};
export type ProfesionalGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProfesionalWhereInput;
    orderBy?: Prisma.ProfesionalOrderByWithAggregationInput | Prisma.ProfesionalOrderByWithAggregationInput[];
    by: Prisma.ProfesionalScalarFieldEnum[] | Prisma.ProfesionalScalarFieldEnum;
    having?: Prisma.ProfesionalScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProfesionalCountAggregateInputType | true;
    _avg?: ProfesionalAvgAggregateInputType;
    _sum?: ProfesionalSumAggregateInputType;
    _min?: ProfesionalMinAggregateInputType;
    _max?: ProfesionalMaxAggregateInputType;
};
export type ProfesionalGroupByOutputType = {
    id: number;
    nombre: string;
    especialidad: string | null;
    activo: boolean;
    creadoEn: Date;
    negocioId: number;
    _count: ProfesionalCountAggregateOutputType | null;
    _avg: ProfesionalAvgAggregateOutputType | null;
    _sum: ProfesionalSumAggregateOutputType | null;
    _min: ProfesionalMinAggregateOutputType | null;
    _max: ProfesionalMaxAggregateOutputType | null;
};
export type GetProfesionalGroupByPayload<T extends ProfesionalGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProfesionalGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProfesionalGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProfesionalGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProfesionalGroupByOutputType[P]>;
}>>;
export type ProfesionalWhereInput = {
    AND?: Prisma.ProfesionalWhereInput | Prisma.ProfesionalWhereInput[];
    OR?: Prisma.ProfesionalWhereInput[];
    NOT?: Prisma.ProfesionalWhereInput | Prisma.ProfesionalWhereInput[];
    id?: Prisma.IntFilter<"Profesional"> | number;
    nombre?: Prisma.StringFilter<"Profesional"> | string;
    especialidad?: Prisma.StringNullableFilter<"Profesional"> | string | null;
    activo?: Prisma.BoolFilter<"Profesional"> | boolean;
    creadoEn?: Prisma.DateTimeFilter<"Profesional"> | Date | string;
    negocioId?: Prisma.IntFilter<"Profesional"> | number;
    negocio?: Prisma.XOR<Prisma.NegocioScalarRelationFilter, Prisma.NegocioWhereInput>;
    servicios?: Prisma.ServicioProfesionalListRelationFilter;
    citas?: Prisma.CitaListRelationFilter;
};
export type ProfesionalOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    especialidad?: Prisma.SortOrderInput | Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    negocioId?: Prisma.SortOrder;
    negocio?: Prisma.NegocioOrderByWithRelationInput;
    servicios?: Prisma.ServicioProfesionalOrderByRelationAggregateInput;
    citas?: Prisma.CitaOrderByRelationAggregateInput;
};
export type ProfesionalWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ProfesionalWhereInput | Prisma.ProfesionalWhereInput[];
    OR?: Prisma.ProfesionalWhereInput[];
    NOT?: Prisma.ProfesionalWhereInput | Prisma.ProfesionalWhereInput[];
    nombre?: Prisma.StringFilter<"Profesional"> | string;
    especialidad?: Prisma.StringNullableFilter<"Profesional"> | string | null;
    activo?: Prisma.BoolFilter<"Profesional"> | boolean;
    creadoEn?: Prisma.DateTimeFilter<"Profesional"> | Date | string;
    negocioId?: Prisma.IntFilter<"Profesional"> | number;
    negocio?: Prisma.XOR<Prisma.NegocioScalarRelationFilter, Prisma.NegocioWhereInput>;
    servicios?: Prisma.ServicioProfesionalListRelationFilter;
    citas?: Prisma.CitaListRelationFilter;
}, "id">;
export type ProfesionalOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    especialidad?: Prisma.SortOrderInput | Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    negocioId?: Prisma.SortOrder;
    _count?: Prisma.ProfesionalCountOrderByAggregateInput;
    _avg?: Prisma.ProfesionalAvgOrderByAggregateInput;
    _max?: Prisma.ProfesionalMaxOrderByAggregateInput;
    _min?: Prisma.ProfesionalMinOrderByAggregateInput;
    _sum?: Prisma.ProfesionalSumOrderByAggregateInput;
};
export type ProfesionalScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProfesionalScalarWhereWithAggregatesInput | Prisma.ProfesionalScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProfesionalScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProfesionalScalarWhereWithAggregatesInput | Prisma.ProfesionalScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Profesional"> | number;
    nombre?: Prisma.StringWithAggregatesFilter<"Profesional"> | string;
    especialidad?: Prisma.StringNullableWithAggregatesFilter<"Profesional"> | string | null;
    activo?: Prisma.BoolWithAggregatesFilter<"Profesional"> | boolean;
    creadoEn?: Prisma.DateTimeWithAggregatesFilter<"Profesional"> | Date | string;
    negocioId?: Prisma.IntWithAggregatesFilter<"Profesional"> | number;
};
export type ProfesionalCreateInput = {
    nombre: string;
    especialidad?: string | null;
    activo?: boolean;
    creadoEn?: Date | string;
    negocio: Prisma.NegocioCreateNestedOneWithoutProfesionalesInput;
    servicios?: Prisma.ServicioProfesionalCreateNestedManyWithoutProfesionalInput;
    citas?: Prisma.CitaCreateNestedManyWithoutProfesionalInput;
};
export type ProfesionalUncheckedCreateInput = {
    id?: number;
    nombre: string;
    especialidad?: string | null;
    activo?: boolean;
    creadoEn?: Date | string;
    negocioId: number;
    servicios?: Prisma.ServicioProfesionalUncheckedCreateNestedManyWithoutProfesionalInput;
    citas?: Prisma.CitaUncheckedCreateNestedManyWithoutProfesionalInput;
};
export type ProfesionalUpdateInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    especialidad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    negocio?: Prisma.NegocioUpdateOneRequiredWithoutProfesionalesNestedInput;
    servicios?: Prisma.ServicioProfesionalUpdateManyWithoutProfesionalNestedInput;
    citas?: Prisma.CitaUpdateManyWithoutProfesionalNestedInput;
};
export type ProfesionalUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    especialidad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    negocioId?: Prisma.IntFieldUpdateOperationsInput | number;
    servicios?: Prisma.ServicioProfesionalUncheckedUpdateManyWithoutProfesionalNestedInput;
    citas?: Prisma.CitaUncheckedUpdateManyWithoutProfesionalNestedInput;
};
export type ProfesionalCreateManyInput = {
    id?: number;
    nombre: string;
    especialidad?: string | null;
    activo?: boolean;
    creadoEn?: Date | string;
    negocioId: number;
};
export type ProfesionalUpdateManyMutationInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    especialidad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProfesionalUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    especialidad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    negocioId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ProfesionalListRelationFilter = {
    every?: Prisma.ProfesionalWhereInput;
    some?: Prisma.ProfesionalWhereInput;
    none?: Prisma.ProfesionalWhereInput;
};
export type ProfesionalOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProfesionalCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    especialidad?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    negocioId?: Prisma.SortOrder;
};
export type ProfesionalAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    negocioId?: Prisma.SortOrder;
};
export type ProfesionalMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    especialidad?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    negocioId?: Prisma.SortOrder;
};
export type ProfesionalMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    especialidad?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    negocioId?: Prisma.SortOrder;
};
export type ProfesionalSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    negocioId?: Prisma.SortOrder;
};
export type ProfesionalScalarRelationFilter = {
    is?: Prisma.ProfesionalWhereInput;
    isNot?: Prisma.ProfesionalWhereInput;
};
export type ProfesionalCreateNestedManyWithoutNegocioInput = {
    create?: Prisma.XOR<Prisma.ProfesionalCreateWithoutNegocioInput, Prisma.ProfesionalUncheckedCreateWithoutNegocioInput> | Prisma.ProfesionalCreateWithoutNegocioInput[] | Prisma.ProfesionalUncheckedCreateWithoutNegocioInput[];
    connectOrCreate?: Prisma.ProfesionalCreateOrConnectWithoutNegocioInput | Prisma.ProfesionalCreateOrConnectWithoutNegocioInput[];
    createMany?: Prisma.ProfesionalCreateManyNegocioInputEnvelope;
    connect?: Prisma.ProfesionalWhereUniqueInput | Prisma.ProfesionalWhereUniqueInput[];
};
export type ProfesionalUncheckedCreateNestedManyWithoutNegocioInput = {
    create?: Prisma.XOR<Prisma.ProfesionalCreateWithoutNegocioInput, Prisma.ProfesionalUncheckedCreateWithoutNegocioInput> | Prisma.ProfesionalCreateWithoutNegocioInput[] | Prisma.ProfesionalUncheckedCreateWithoutNegocioInput[];
    connectOrCreate?: Prisma.ProfesionalCreateOrConnectWithoutNegocioInput | Prisma.ProfesionalCreateOrConnectWithoutNegocioInput[];
    createMany?: Prisma.ProfesionalCreateManyNegocioInputEnvelope;
    connect?: Prisma.ProfesionalWhereUniqueInput | Prisma.ProfesionalWhereUniqueInput[];
};
export type ProfesionalUpdateManyWithoutNegocioNestedInput = {
    create?: Prisma.XOR<Prisma.ProfesionalCreateWithoutNegocioInput, Prisma.ProfesionalUncheckedCreateWithoutNegocioInput> | Prisma.ProfesionalCreateWithoutNegocioInput[] | Prisma.ProfesionalUncheckedCreateWithoutNegocioInput[];
    connectOrCreate?: Prisma.ProfesionalCreateOrConnectWithoutNegocioInput | Prisma.ProfesionalCreateOrConnectWithoutNegocioInput[];
    upsert?: Prisma.ProfesionalUpsertWithWhereUniqueWithoutNegocioInput | Prisma.ProfesionalUpsertWithWhereUniqueWithoutNegocioInput[];
    createMany?: Prisma.ProfesionalCreateManyNegocioInputEnvelope;
    set?: Prisma.ProfesionalWhereUniqueInput | Prisma.ProfesionalWhereUniqueInput[];
    disconnect?: Prisma.ProfesionalWhereUniqueInput | Prisma.ProfesionalWhereUniqueInput[];
    delete?: Prisma.ProfesionalWhereUniqueInput | Prisma.ProfesionalWhereUniqueInput[];
    connect?: Prisma.ProfesionalWhereUniqueInput | Prisma.ProfesionalWhereUniqueInput[];
    update?: Prisma.ProfesionalUpdateWithWhereUniqueWithoutNegocioInput | Prisma.ProfesionalUpdateWithWhereUniqueWithoutNegocioInput[];
    updateMany?: Prisma.ProfesionalUpdateManyWithWhereWithoutNegocioInput | Prisma.ProfesionalUpdateManyWithWhereWithoutNegocioInput[];
    deleteMany?: Prisma.ProfesionalScalarWhereInput | Prisma.ProfesionalScalarWhereInput[];
};
export type ProfesionalUncheckedUpdateManyWithoutNegocioNestedInput = {
    create?: Prisma.XOR<Prisma.ProfesionalCreateWithoutNegocioInput, Prisma.ProfesionalUncheckedCreateWithoutNegocioInput> | Prisma.ProfesionalCreateWithoutNegocioInput[] | Prisma.ProfesionalUncheckedCreateWithoutNegocioInput[];
    connectOrCreate?: Prisma.ProfesionalCreateOrConnectWithoutNegocioInput | Prisma.ProfesionalCreateOrConnectWithoutNegocioInput[];
    upsert?: Prisma.ProfesionalUpsertWithWhereUniqueWithoutNegocioInput | Prisma.ProfesionalUpsertWithWhereUniqueWithoutNegocioInput[];
    createMany?: Prisma.ProfesionalCreateManyNegocioInputEnvelope;
    set?: Prisma.ProfesionalWhereUniqueInput | Prisma.ProfesionalWhereUniqueInput[];
    disconnect?: Prisma.ProfesionalWhereUniqueInput | Prisma.ProfesionalWhereUniqueInput[];
    delete?: Prisma.ProfesionalWhereUniqueInput | Prisma.ProfesionalWhereUniqueInput[];
    connect?: Prisma.ProfesionalWhereUniqueInput | Prisma.ProfesionalWhereUniqueInput[];
    update?: Prisma.ProfesionalUpdateWithWhereUniqueWithoutNegocioInput | Prisma.ProfesionalUpdateWithWhereUniqueWithoutNegocioInput[];
    updateMany?: Prisma.ProfesionalUpdateManyWithWhereWithoutNegocioInput | Prisma.ProfesionalUpdateManyWithWhereWithoutNegocioInput[];
    deleteMany?: Prisma.ProfesionalScalarWhereInput | Prisma.ProfesionalScalarWhereInput[];
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type ProfesionalCreateNestedOneWithoutServiciosInput = {
    create?: Prisma.XOR<Prisma.ProfesionalCreateWithoutServiciosInput, Prisma.ProfesionalUncheckedCreateWithoutServiciosInput>;
    connectOrCreate?: Prisma.ProfesionalCreateOrConnectWithoutServiciosInput;
    connect?: Prisma.ProfesionalWhereUniqueInput;
};
export type ProfesionalUpdateOneRequiredWithoutServiciosNestedInput = {
    create?: Prisma.XOR<Prisma.ProfesionalCreateWithoutServiciosInput, Prisma.ProfesionalUncheckedCreateWithoutServiciosInput>;
    connectOrCreate?: Prisma.ProfesionalCreateOrConnectWithoutServiciosInput;
    upsert?: Prisma.ProfesionalUpsertWithoutServiciosInput;
    connect?: Prisma.ProfesionalWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProfesionalUpdateToOneWithWhereWithoutServiciosInput, Prisma.ProfesionalUpdateWithoutServiciosInput>, Prisma.ProfesionalUncheckedUpdateWithoutServiciosInput>;
};
export type ProfesionalCreateNestedOneWithoutCitasInput = {
    create?: Prisma.XOR<Prisma.ProfesionalCreateWithoutCitasInput, Prisma.ProfesionalUncheckedCreateWithoutCitasInput>;
    connectOrCreate?: Prisma.ProfesionalCreateOrConnectWithoutCitasInput;
    connect?: Prisma.ProfesionalWhereUniqueInput;
};
export type ProfesionalUpdateOneRequiredWithoutCitasNestedInput = {
    create?: Prisma.XOR<Prisma.ProfesionalCreateWithoutCitasInput, Prisma.ProfesionalUncheckedCreateWithoutCitasInput>;
    connectOrCreate?: Prisma.ProfesionalCreateOrConnectWithoutCitasInput;
    upsert?: Prisma.ProfesionalUpsertWithoutCitasInput;
    connect?: Prisma.ProfesionalWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProfesionalUpdateToOneWithWhereWithoutCitasInput, Prisma.ProfesionalUpdateWithoutCitasInput>, Prisma.ProfesionalUncheckedUpdateWithoutCitasInput>;
};
export type ProfesionalCreateWithoutNegocioInput = {
    nombre: string;
    especialidad?: string | null;
    activo?: boolean;
    creadoEn?: Date | string;
    servicios?: Prisma.ServicioProfesionalCreateNestedManyWithoutProfesionalInput;
    citas?: Prisma.CitaCreateNestedManyWithoutProfesionalInput;
};
export type ProfesionalUncheckedCreateWithoutNegocioInput = {
    id?: number;
    nombre: string;
    especialidad?: string | null;
    activo?: boolean;
    creadoEn?: Date | string;
    servicios?: Prisma.ServicioProfesionalUncheckedCreateNestedManyWithoutProfesionalInput;
    citas?: Prisma.CitaUncheckedCreateNestedManyWithoutProfesionalInput;
};
export type ProfesionalCreateOrConnectWithoutNegocioInput = {
    where: Prisma.ProfesionalWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfesionalCreateWithoutNegocioInput, Prisma.ProfesionalUncheckedCreateWithoutNegocioInput>;
};
export type ProfesionalCreateManyNegocioInputEnvelope = {
    data: Prisma.ProfesionalCreateManyNegocioInput | Prisma.ProfesionalCreateManyNegocioInput[];
    skipDuplicates?: boolean;
};
export type ProfesionalUpsertWithWhereUniqueWithoutNegocioInput = {
    where: Prisma.ProfesionalWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProfesionalUpdateWithoutNegocioInput, Prisma.ProfesionalUncheckedUpdateWithoutNegocioInput>;
    create: Prisma.XOR<Prisma.ProfesionalCreateWithoutNegocioInput, Prisma.ProfesionalUncheckedCreateWithoutNegocioInput>;
};
export type ProfesionalUpdateWithWhereUniqueWithoutNegocioInput = {
    where: Prisma.ProfesionalWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProfesionalUpdateWithoutNegocioInput, Prisma.ProfesionalUncheckedUpdateWithoutNegocioInput>;
};
export type ProfesionalUpdateManyWithWhereWithoutNegocioInput = {
    where: Prisma.ProfesionalScalarWhereInput;
    data: Prisma.XOR<Prisma.ProfesionalUpdateManyMutationInput, Prisma.ProfesionalUncheckedUpdateManyWithoutNegocioInput>;
};
export type ProfesionalScalarWhereInput = {
    AND?: Prisma.ProfesionalScalarWhereInput | Prisma.ProfesionalScalarWhereInput[];
    OR?: Prisma.ProfesionalScalarWhereInput[];
    NOT?: Prisma.ProfesionalScalarWhereInput | Prisma.ProfesionalScalarWhereInput[];
    id?: Prisma.IntFilter<"Profesional"> | number;
    nombre?: Prisma.StringFilter<"Profesional"> | string;
    especialidad?: Prisma.StringNullableFilter<"Profesional"> | string | null;
    activo?: Prisma.BoolFilter<"Profesional"> | boolean;
    creadoEn?: Prisma.DateTimeFilter<"Profesional"> | Date | string;
    negocioId?: Prisma.IntFilter<"Profesional"> | number;
};
export type ProfesionalCreateWithoutServiciosInput = {
    nombre: string;
    especialidad?: string | null;
    activo?: boolean;
    creadoEn?: Date | string;
    negocio: Prisma.NegocioCreateNestedOneWithoutProfesionalesInput;
    citas?: Prisma.CitaCreateNestedManyWithoutProfesionalInput;
};
export type ProfesionalUncheckedCreateWithoutServiciosInput = {
    id?: number;
    nombre: string;
    especialidad?: string | null;
    activo?: boolean;
    creadoEn?: Date | string;
    negocioId: number;
    citas?: Prisma.CitaUncheckedCreateNestedManyWithoutProfesionalInput;
};
export type ProfesionalCreateOrConnectWithoutServiciosInput = {
    where: Prisma.ProfesionalWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfesionalCreateWithoutServiciosInput, Prisma.ProfesionalUncheckedCreateWithoutServiciosInput>;
};
export type ProfesionalUpsertWithoutServiciosInput = {
    update: Prisma.XOR<Prisma.ProfesionalUpdateWithoutServiciosInput, Prisma.ProfesionalUncheckedUpdateWithoutServiciosInput>;
    create: Prisma.XOR<Prisma.ProfesionalCreateWithoutServiciosInput, Prisma.ProfesionalUncheckedCreateWithoutServiciosInput>;
    where?: Prisma.ProfesionalWhereInput;
};
export type ProfesionalUpdateToOneWithWhereWithoutServiciosInput = {
    where?: Prisma.ProfesionalWhereInput;
    data: Prisma.XOR<Prisma.ProfesionalUpdateWithoutServiciosInput, Prisma.ProfesionalUncheckedUpdateWithoutServiciosInput>;
};
export type ProfesionalUpdateWithoutServiciosInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    especialidad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    negocio?: Prisma.NegocioUpdateOneRequiredWithoutProfesionalesNestedInput;
    citas?: Prisma.CitaUpdateManyWithoutProfesionalNestedInput;
};
export type ProfesionalUncheckedUpdateWithoutServiciosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    especialidad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    negocioId?: Prisma.IntFieldUpdateOperationsInput | number;
    citas?: Prisma.CitaUncheckedUpdateManyWithoutProfesionalNestedInput;
};
export type ProfesionalCreateWithoutCitasInput = {
    nombre: string;
    especialidad?: string | null;
    activo?: boolean;
    creadoEn?: Date | string;
    negocio: Prisma.NegocioCreateNestedOneWithoutProfesionalesInput;
    servicios?: Prisma.ServicioProfesionalCreateNestedManyWithoutProfesionalInput;
};
export type ProfesionalUncheckedCreateWithoutCitasInput = {
    id?: number;
    nombre: string;
    especialidad?: string | null;
    activo?: boolean;
    creadoEn?: Date | string;
    negocioId: number;
    servicios?: Prisma.ServicioProfesionalUncheckedCreateNestedManyWithoutProfesionalInput;
};
export type ProfesionalCreateOrConnectWithoutCitasInput = {
    where: Prisma.ProfesionalWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfesionalCreateWithoutCitasInput, Prisma.ProfesionalUncheckedCreateWithoutCitasInput>;
};
export type ProfesionalUpsertWithoutCitasInput = {
    update: Prisma.XOR<Prisma.ProfesionalUpdateWithoutCitasInput, Prisma.ProfesionalUncheckedUpdateWithoutCitasInput>;
    create: Prisma.XOR<Prisma.ProfesionalCreateWithoutCitasInput, Prisma.ProfesionalUncheckedCreateWithoutCitasInput>;
    where?: Prisma.ProfesionalWhereInput;
};
export type ProfesionalUpdateToOneWithWhereWithoutCitasInput = {
    where?: Prisma.ProfesionalWhereInput;
    data: Prisma.XOR<Prisma.ProfesionalUpdateWithoutCitasInput, Prisma.ProfesionalUncheckedUpdateWithoutCitasInput>;
};
export type ProfesionalUpdateWithoutCitasInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    especialidad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    negocio?: Prisma.NegocioUpdateOneRequiredWithoutProfesionalesNestedInput;
    servicios?: Prisma.ServicioProfesionalUpdateManyWithoutProfesionalNestedInput;
};
export type ProfesionalUncheckedUpdateWithoutCitasInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    especialidad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    negocioId?: Prisma.IntFieldUpdateOperationsInput | number;
    servicios?: Prisma.ServicioProfesionalUncheckedUpdateManyWithoutProfesionalNestedInput;
};
export type ProfesionalCreateManyNegocioInput = {
    id?: number;
    nombre: string;
    especialidad?: string | null;
    activo?: boolean;
    creadoEn?: Date | string;
};
export type ProfesionalUpdateWithoutNegocioInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    especialidad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    servicios?: Prisma.ServicioProfesionalUpdateManyWithoutProfesionalNestedInput;
    citas?: Prisma.CitaUpdateManyWithoutProfesionalNestedInput;
};
export type ProfesionalUncheckedUpdateWithoutNegocioInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    especialidad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    servicios?: Prisma.ServicioProfesionalUncheckedUpdateManyWithoutProfesionalNestedInput;
    citas?: Prisma.CitaUncheckedUpdateManyWithoutProfesionalNestedInput;
};
export type ProfesionalUncheckedUpdateManyWithoutNegocioInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    especialidad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProfesionalCountOutputType = {
    servicios: number;
    citas: number;
};
export type ProfesionalCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    servicios?: boolean | ProfesionalCountOutputTypeCountServiciosArgs;
    citas?: boolean | ProfesionalCountOutputTypeCountCitasArgs;
};
export type ProfesionalCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfesionalCountOutputTypeSelect<ExtArgs> | null;
};
export type ProfesionalCountOutputTypeCountServiciosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ServicioProfesionalWhereInput;
};
export type ProfesionalCountOutputTypeCountCitasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CitaWhereInput;
};
export type ProfesionalSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    especialidad?: boolean;
    activo?: boolean;
    creadoEn?: boolean;
    negocioId?: boolean;
    negocio?: boolean | Prisma.NegocioDefaultArgs<ExtArgs>;
    servicios?: boolean | Prisma.Profesional$serviciosArgs<ExtArgs>;
    citas?: boolean | Prisma.Profesional$citasArgs<ExtArgs>;
    _count?: boolean | Prisma.ProfesionalCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["profesional"]>;
export type ProfesionalSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    especialidad?: boolean;
    activo?: boolean;
    creadoEn?: boolean;
    negocioId?: boolean;
    negocio?: boolean | Prisma.NegocioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["profesional"]>;
export type ProfesionalSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    especialidad?: boolean;
    activo?: boolean;
    creadoEn?: boolean;
    negocioId?: boolean;
    negocio?: boolean | Prisma.NegocioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["profesional"]>;
export type ProfesionalSelectScalar = {
    id?: boolean;
    nombre?: boolean;
    especialidad?: boolean;
    activo?: boolean;
    creadoEn?: boolean;
    negocioId?: boolean;
};
export type ProfesionalOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre" | "especialidad" | "activo" | "creadoEn" | "negocioId", ExtArgs["result"]["profesional"]>;
export type ProfesionalInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    negocio?: boolean | Prisma.NegocioDefaultArgs<ExtArgs>;
    servicios?: boolean | Prisma.Profesional$serviciosArgs<ExtArgs>;
    citas?: boolean | Prisma.Profesional$citasArgs<ExtArgs>;
    _count?: boolean | Prisma.ProfesionalCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ProfesionalIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    negocio?: boolean | Prisma.NegocioDefaultArgs<ExtArgs>;
};
export type ProfesionalIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    negocio?: boolean | Prisma.NegocioDefaultArgs<ExtArgs>;
};
export type $ProfesionalPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Profesional";
    objects: {
        negocio: Prisma.$NegocioPayload<ExtArgs>;
        servicios: Prisma.$ServicioProfesionalPayload<ExtArgs>[];
        citas: Prisma.$CitaPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nombre: string;
        especialidad: string | null;
        activo: boolean;
        creadoEn: Date;
        negocioId: number;
    }, ExtArgs["result"]["profesional"]>;
    composites: {};
};
export type ProfesionalGetPayload<S extends boolean | null | undefined | ProfesionalDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProfesionalPayload, S>;
export type ProfesionalCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProfesionalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProfesionalCountAggregateInputType | true;
};
export interface ProfesionalDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Profesional'];
        meta: {
            name: 'Profesional';
        };
    };
    findUnique<T extends ProfesionalFindUniqueArgs>(args: Prisma.SelectSubset<T, ProfesionalFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProfesionalClient<runtime.Types.Result.GetResult<Prisma.$ProfesionalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProfesionalFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProfesionalFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProfesionalClient<runtime.Types.Result.GetResult<Prisma.$ProfesionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProfesionalFindFirstArgs>(args?: Prisma.SelectSubset<T, ProfesionalFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProfesionalClient<runtime.Types.Result.GetResult<Prisma.$ProfesionalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProfesionalFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProfesionalFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProfesionalClient<runtime.Types.Result.GetResult<Prisma.$ProfesionalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProfesionalFindManyArgs>(args?: Prisma.SelectSubset<T, ProfesionalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfesionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProfesionalCreateArgs>(args: Prisma.SelectSubset<T, ProfesionalCreateArgs<ExtArgs>>): Prisma.Prisma__ProfesionalClient<runtime.Types.Result.GetResult<Prisma.$ProfesionalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProfesionalCreateManyArgs>(args?: Prisma.SelectSubset<T, ProfesionalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProfesionalCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProfesionalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfesionalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProfesionalDeleteArgs>(args: Prisma.SelectSubset<T, ProfesionalDeleteArgs<ExtArgs>>): Prisma.Prisma__ProfesionalClient<runtime.Types.Result.GetResult<Prisma.$ProfesionalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProfesionalUpdateArgs>(args: Prisma.SelectSubset<T, ProfesionalUpdateArgs<ExtArgs>>): Prisma.Prisma__ProfesionalClient<runtime.Types.Result.GetResult<Prisma.$ProfesionalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProfesionalDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProfesionalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProfesionalUpdateManyArgs>(args: Prisma.SelectSubset<T, ProfesionalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProfesionalUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProfesionalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfesionalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProfesionalUpsertArgs>(args: Prisma.SelectSubset<T, ProfesionalUpsertArgs<ExtArgs>>): Prisma.Prisma__ProfesionalClient<runtime.Types.Result.GetResult<Prisma.$ProfesionalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProfesionalCountArgs>(args?: Prisma.Subset<T, ProfesionalCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProfesionalCountAggregateOutputType> : number>;
    aggregate<T extends ProfesionalAggregateArgs>(args: Prisma.Subset<T, ProfesionalAggregateArgs>): Prisma.PrismaPromise<GetProfesionalAggregateType<T>>;
    groupBy<T extends ProfesionalGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProfesionalGroupByArgs['orderBy'];
    } : {
        orderBy?: ProfesionalGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProfesionalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfesionalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProfesionalFieldRefs;
}
export interface Prisma__ProfesionalClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    negocio<T extends Prisma.NegocioDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.NegocioDefaultArgs<ExtArgs>>): Prisma.Prisma__NegocioClient<runtime.Types.Result.GetResult<Prisma.$NegocioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    servicios<T extends Prisma.Profesional$serviciosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Profesional$serviciosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ServicioProfesionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    citas<T extends Prisma.Profesional$citasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Profesional$citasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProfesionalFieldRefs {
    readonly id: Prisma.FieldRef<"Profesional", 'Int'>;
    readonly nombre: Prisma.FieldRef<"Profesional", 'String'>;
    readonly especialidad: Prisma.FieldRef<"Profesional", 'String'>;
    readonly activo: Prisma.FieldRef<"Profesional", 'Boolean'>;
    readonly creadoEn: Prisma.FieldRef<"Profesional", 'DateTime'>;
    readonly negocioId: Prisma.FieldRef<"Profesional", 'Int'>;
}
export type ProfesionalFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfesionalSelect<ExtArgs> | null;
    omit?: Prisma.ProfesionalOmit<ExtArgs> | null;
    include?: Prisma.ProfesionalInclude<ExtArgs> | null;
    where: Prisma.ProfesionalWhereUniqueInput;
};
export type ProfesionalFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfesionalSelect<ExtArgs> | null;
    omit?: Prisma.ProfesionalOmit<ExtArgs> | null;
    include?: Prisma.ProfesionalInclude<ExtArgs> | null;
    where: Prisma.ProfesionalWhereUniqueInput;
};
export type ProfesionalFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ProfesionalFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ProfesionalFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ProfesionalCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfesionalSelect<ExtArgs> | null;
    omit?: Prisma.ProfesionalOmit<ExtArgs> | null;
    include?: Prisma.ProfesionalInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProfesionalCreateInput, Prisma.ProfesionalUncheckedCreateInput>;
};
export type ProfesionalCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProfesionalCreateManyInput | Prisma.ProfesionalCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProfesionalCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfesionalSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProfesionalOmit<ExtArgs> | null;
    data: Prisma.ProfesionalCreateManyInput | Prisma.ProfesionalCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ProfesionalIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ProfesionalUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfesionalSelect<ExtArgs> | null;
    omit?: Prisma.ProfesionalOmit<ExtArgs> | null;
    include?: Prisma.ProfesionalInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProfesionalUpdateInput, Prisma.ProfesionalUncheckedUpdateInput>;
    where: Prisma.ProfesionalWhereUniqueInput;
};
export type ProfesionalUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProfesionalUpdateManyMutationInput, Prisma.ProfesionalUncheckedUpdateManyInput>;
    where?: Prisma.ProfesionalWhereInput;
    limit?: number;
};
export type ProfesionalUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfesionalSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProfesionalOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProfesionalUpdateManyMutationInput, Prisma.ProfesionalUncheckedUpdateManyInput>;
    where?: Prisma.ProfesionalWhereInput;
    limit?: number;
    include?: Prisma.ProfesionalIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ProfesionalUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfesionalSelect<ExtArgs> | null;
    omit?: Prisma.ProfesionalOmit<ExtArgs> | null;
    include?: Prisma.ProfesionalInclude<ExtArgs> | null;
    where: Prisma.ProfesionalWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfesionalCreateInput, Prisma.ProfesionalUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProfesionalUpdateInput, Prisma.ProfesionalUncheckedUpdateInput>;
};
export type ProfesionalDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfesionalSelect<ExtArgs> | null;
    omit?: Prisma.ProfesionalOmit<ExtArgs> | null;
    include?: Prisma.ProfesionalInclude<ExtArgs> | null;
    where: Prisma.ProfesionalWhereUniqueInput;
};
export type ProfesionalDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProfesionalWhereInput;
    limit?: number;
};
export type Profesional$serviciosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServicioProfesionalSelect<ExtArgs> | null;
    omit?: Prisma.ServicioProfesionalOmit<ExtArgs> | null;
    include?: Prisma.ServicioProfesionalInclude<ExtArgs> | null;
    where?: Prisma.ServicioProfesionalWhereInput;
    orderBy?: Prisma.ServicioProfesionalOrderByWithRelationInput | Prisma.ServicioProfesionalOrderByWithRelationInput[];
    cursor?: Prisma.ServicioProfesionalWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ServicioProfesionalScalarFieldEnum | Prisma.ServicioProfesionalScalarFieldEnum[];
};
export type Profesional$citasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ProfesionalDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfesionalSelect<ExtArgs> | null;
    omit?: Prisma.ProfesionalOmit<ExtArgs> | null;
    include?: Prisma.ProfesionalInclude<ExtArgs> | null;
};
