import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ServicioProfesionalModel = runtime.Types.Result.DefaultSelection<Prisma.$ServicioProfesionalPayload>;
export type AggregateServicioProfesional = {
    _count: ServicioProfesionalCountAggregateOutputType | null;
    _avg: ServicioProfesionalAvgAggregateOutputType | null;
    _sum: ServicioProfesionalSumAggregateOutputType | null;
    _min: ServicioProfesionalMinAggregateOutputType | null;
    _max: ServicioProfesionalMaxAggregateOutputType | null;
};
export type ServicioProfesionalAvgAggregateOutputType = {
    servicioId: number | null;
    profesionalId: number | null;
};
export type ServicioProfesionalSumAggregateOutputType = {
    servicioId: number | null;
    profesionalId: number | null;
};
export type ServicioProfesionalMinAggregateOutputType = {
    servicioId: number | null;
    profesionalId: number | null;
};
export type ServicioProfesionalMaxAggregateOutputType = {
    servicioId: number | null;
    profesionalId: number | null;
};
export type ServicioProfesionalCountAggregateOutputType = {
    servicioId: number;
    profesionalId: number;
    _all: number;
};
export type ServicioProfesionalAvgAggregateInputType = {
    servicioId?: true;
    profesionalId?: true;
};
export type ServicioProfesionalSumAggregateInputType = {
    servicioId?: true;
    profesionalId?: true;
};
export type ServicioProfesionalMinAggregateInputType = {
    servicioId?: true;
    profesionalId?: true;
};
export type ServicioProfesionalMaxAggregateInputType = {
    servicioId?: true;
    profesionalId?: true;
};
export type ServicioProfesionalCountAggregateInputType = {
    servicioId?: true;
    profesionalId?: true;
    _all?: true;
};
export type ServicioProfesionalAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ServicioProfesionalWhereInput;
    orderBy?: Prisma.ServicioProfesionalOrderByWithRelationInput | Prisma.ServicioProfesionalOrderByWithRelationInput[];
    cursor?: Prisma.ServicioProfesionalWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ServicioProfesionalCountAggregateInputType;
    _avg?: ServicioProfesionalAvgAggregateInputType;
    _sum?: ServicioProfesionalSumAggregateInputType;
    _min?: ServicioProfesionalMinAggregateInputType;
    _max?: ServicioProfesionalMaxAggregateInputType;
};
export type GetServicioProfesionalAggregateType<T extends ServicioProfesionalAggregateArgs> = {
    [P in keyof T & keyof AggregateServicioProfesional]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateServicioProfesional[P]> : Prisma.GetScalarType<T[P], AggregateServicioProfesional[P]>;
};
export type ServicioProfesionalGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ServicioProfesionalWhereInput;
    orderBy?: Prisma.ServicioProfesionalOrderByWithAggregationInput | Prisma.ServicioProfesionalOrderByWithAggregationInput[];
    by: Prisma.ServicioProfesionalScalarFieldEnum[] | Prisma.ServicioProfesionalScalarFieldEnum;
    having?: Prisma.ServicioProfesionalScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ServicioProfesionalCountAggregateInputType | true;
    _avg?: ServicioProfesionalAvgAggregateInputType;
    _sum?: ServicioProfesionalSumAggregateInputType;
    _min?: ServicioProfesionalMinAggregateInputType;
    _max?: ServicioProfesionalMaxAggregateInputType;
};
export type ServicioProfesionalGroupByOutputType = {
    servicioId: number;
    profesionalId: number;
    _count: ServicioProfesionalCountAggregateOutputType | null;
    _avg: ServicioProfesionalAvgAggregateOutputType | null;
    _sum: ServicioProfesionalSumAggregateOutputType | null;
    _min: ServicioProfesionalMinAggregateOutputType | null;
    _max: ServicioProfesionalMaxAggregateOutputType | null;
};
export type GetServicioProfesionalGroupByPayload<T extends ServicioProfesionalGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ServicioProfesionalGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ServicioProfesionalGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ServicioProfesionalGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ServicioProfesionalGroupByOutputType[P]>;
}>>;
export type ServicioProfesionalWhereInput = {
    AND?: Prisma.ServicioProfesionalWhereInput | Prisma.ServicioProfesionalWhereInput[];
    OR?: Prisma.ServicioProfesionalWhereInput[];
    NOT?: Prisma.ServicioProfesionalWhereInput | Prisma.ServicioProfesionalWhereInput[];
    servicioId?: Prisma.IntFilter<"ServicioProfesional"> | number;
    profesionalId?: Prisma.IntFilter<"ServicioProfesional"> | number;
    servicio?: Prisma.XOR<Prisma.ServicioScalarRelationFilter, Prisma.ServicioWhereInput>;
    profesional?: Prisma.XOR<Prisma.ProfesionalScalarRelationFilter, Prisma.ProfesionalWhereInput>;
};
export type ServicioProfesionalOrderByWithRelationInput = {
    servicioId?: Prisma.SortOrder;
    profesionalId?: Prisma.SortOrder;
    servicio?: Prisma.ServicioOrderByWithRelationInput;
    profesional?: Prisma.ProfesionalOrderByWithRelationInput;
};
export type ServicioProfesionalWhereUniqueInput = Prisma.AtLeast<{
    servicioId_profesionalId?: Prisma.ServicioProfesionalServicioIdProfesionalIdCompoundUniqueInput;
    AND?: Prisma.ServicioProfesionalWhereInput | Prisma.ServicioProfesionalWhereInput[];
    OR?: Prisma.ServicioProfesionalWhereInput[];
    NOT?: Prisma.ServicioProfesionalWhereInput | Prisma.ServicioProfesionalWhereInput[];
    servicioId?: Prisma.IntFilter<"ServicioProfesional"> | number;
    profesionalId?: Prisma.IntFilter<"ServicioProfesional"> | number;
    servicio?: Prisma.XOR<Prisma.ServicioScalarRelationFilter, Prisma.ServicioWhereInput>;
    profesional?: Prisma.XOR<Prisma.ProfesionalScalarRelationFilter, Prisma.ProfesionalWhereInput>;
}, "servicioId_profesionalId">;
export type ServicioProfesionalOrderByWithAggregationInput = {
    servicioId?: Prisma.SortOrder;
    profesionalId?: Prisma.SortOrder;
    _count?: Prisma.ServicioProfesionalCountOrderByAggregateInput;
    _avg?: Prisma.ServicioProfesionalAvgOrderByAggregateInput;
    _max?: Prisma.ServicioProfesionalMaxOrderByAggregateInput;
    _min?: Prisma.ServicioProfesionalMinOrderByAggregateInput;
    _sum?: Prisma.ServicioProfesionalSumOrderByAggregateInput;
};
export type ServicioProfesionalScalarWhereWithAggregatesInput = {
    AND?: Prisma.ServicioProfesionalScalarWhereWithAggregatesInput | Prisma.ServicioProfesionalScalarWhereWithAggregatesInput[];
    OR?: Prisma.ServicioProfesionalScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ServicioProfesionalScalarWhereWithAggregatesInput | Prisma.ServicioProfesionalScalarWhereWithAggregatesInput[];
    servicioId?: Prisma.IntWithAggregatesFilter<"ServicioProfesional"> | number;
    profesionalId?: Prisma.IntWithAggregatesFilter<"ServicioProfesional"> | number;
};
export type ServicioProfesionalCreateInput = {
    servicio: Prisma.ServicioCreateNestedOneWithoutProfesionalesInput;
    profesional: Prisma.ProfesionalCreateNestedOneWithoutServiciosInput;
};
export type ServicioProfesionalUncheckedCreateInput = {
    servicioId: number;
    profesionalId: number;
};
export type ServicioProfesionalUpdateInput = {
    servicio?: Prisma.ServicioUpdateOneRequiredWithoutProfesionalesNestedInput;
    profesional?: Prisma.ProfesionalUpdateOneRequiredWithoutServiciosNestedInput;
};
export type ServicioProfesionalUncheckedUpdateInput = {
    servicioId?: Prisma.IntFieldUpdateOperationsInput | number;
    profesionalId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ServicioProfesionalCreateManyInput = {
    servicioId: number;
    profesionalId: number;
};
export type ServicioProfesionalUpdateManyMutationInput = {};
export type ServicioProfesionalUncheckedUpdateManyInput = {
    servicioId?: Prisma.IntFieldUpdateOperationsInput | number;
    profesionalId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ServicioProfesionalListRelationFilter = {
    every?: Prisma.ServicioProfesionalWhereInput;
    some?: Prisma.ServicioProfesionalWhereInput;
    none?: Prisma.ServicioProfesionalWhereInput;
};
export type ServicioProfesionalOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ServicioProfesionalServicioIdProfesionalIdCompoundUniqueInput = {
    servicioId: number;
    profesionalId: number;
};
export type ServicioProfesionalCountOrderByAggregateInput = {
    servicioId?: Prisma.SortOrder;
    profesionalId?: Prisma.SortOrder;
};
export type ServicioProfesionalAvgOrderByAggregateInput = {
    servicioId?: Prisma.SortOrder;
    profesionalId?: Prisma.SortOrder;
};
export type ServicioProfesionalMaxOrderByAggregateInput = {
    servicioId?: Prisma.SortOrder;
    profesionalId?: Prisma.SortOrder;
};
export type ServicioProfesionalMinOrderByAggregateInput = {
    servicioId?: Prisma.SortOrder;
    profesionalId?: Prisma.SortOrder;
};
export type ServicioProfesionalSumOrderByAggregateInput = {
    servicioId?: Prisma.SortOrder;
    profesionalId?: Prisma.SortOrder;
};
export type ServicioProfesionalCreateNestedManyWithoutProfesionalInput = {
    create?: Prisma.XOR<Prisma.ServicioProfesionalCreateWithoutProfesionalInput, Prisma.ServicioProfesionalUncheckedCreateWithoutProfesionalInput> | Prisma.ServicioProfesionalCreateWithoutProfesionalInput[] | Prisma.ServicioProfesionalUncheckedCreateWithoutProfesionalInput[];
    connectOrCreate?: Prisma.ServicioProfesionalCreateOrConnectWithoutProfesionalInput | Prisma.ServicioProfesionalCreateOrConnectWithoutProfesionalInput[];
    createMany?: Prisma.ServicioProfesionalCreateManyProfesionalInputEnvelope;
    connect?: Prisma.ServicioProfesionalWhereUniqueInput | Prisma.ServicioProfesionalWhereUniqueInput[];
};
export type ServicioProfesionalUncheckedCreateNestedManyWithoutProfesionalInput = {
    create?: Prisma.XOR<Prisma.ServicioProfesionalCreateWithoutProfesionalInput, Prisma.ServicioProfesionalUncheckedCreateWithoutProfesionalInput> | Prisma.ServicioProfesionalCreateWithoutProfesionalInput[] | Prisma.ServicioProfesionalUncheckedCreateWithoutProfesionalInput[];
    connectOrCreate?: Prisma.ServicioProfesionalCreateOrConnectWithoutProfesionalInput | Prisma.ServicioProfesionalCreateOrConnectWithoutProfesionalInput[];
    createMany?: Prisma.ServicioProfesionalCreateManyProfesionalInputEnvelope;
    connect?: Prisma.ServicioProfesionalWhereUniqueInput | Prisma.ServicioProfesionalWhereUniqueInput[];
};
export type ServicioProfesionalUpdateManyWithoutProfesionalNestedInput = {
    create?: Prisma.XOR<Prisma.ServicioProfesionalCreateWithoutProfesionalInput, Prisma.ServicioProfesionalUncheckedCreateWithoutProfesionalInput> | Prisma.ServicioProfesionalCreateWithoutProfesionalInput[] | Prisma.ServicioProfesionalUncheckedCreateWithoutProfesionalInput[];
    connectOrCreate?: Prisma.ServicioProfesionalCreateOrConnectWithoutProfesionalInput | Prisma.ServicioProfesionalCreateOrConnectWithoutProfesionalInput[];
    upsert?: Prisma.ServicioProfesionalUpsertWithWhereUniqueWithoutProfesionalInput | Prisma.ServicioProfesionalUpsertWithWhereUniqueWithoutProfesionalInput[];
    createMany?: Prisma.ServicioProfesionalCreateManyProfesionalInputEnvelope;
    set?: Prisma.ServicioProfesionalWhereUniqueInput | Prisma.ServicioProfesionalWhereUniqueInput[];
    disconnect?: Prisma.ServicioProfesionalWhereUniqueInput | Prisma.ServicioProfesionalWhereUniqueInput[];
    delete?: Prisma.ServicioProfesionalWhereUniqueInput | Prisma.ServicioProfesionalWhereUniqueInput[];
    connect?: Prisma.ServicioProfesionalWhereUniqueInput | Prisma.ServicioProfesionalWhereUniqueInput[];
    update?: Prisma.ServicioProfesionalUpdateWithWhereUniqueWithoutProfesionalInput | Prisma.ServicioProfesionalUpdateWithWhereUniqueWithoutProfesionalInput[];
    updateMany?: Prisma.ServicioProfesionalUpdateManyWithWhereWithoutProfesionalInput | Prisma.ServicioProfesionalUpdateManyWithWhereWithoutProfesionalInput[];
    deleteMany?: Prisma.ServicioProfesionalScalarWhereInput | Prisma.ServicioProfesionalScalarWhereInput[];
};
export type ServicioProfesionalUncheckedUpdateManyWithoutProfesionalNestedInput = {
    create?: Prisma.XOR<Prisma.ServicioProfesionalCreateWithoutProfesionalInput, Prisma.ServicioProfesionalUncheckedCreateWithoutProfesionalInput> | Prisma.ServicioProfesionalCreateWithoutProfesionalInput[] | Prisma.ServicioProfesionalUncheckedCreateWithoutProfesionalInput[];
    connectOrCreate?: Prisma.ServicioProfesionalCreateOrConnectWithoutProfesionalInput | Prisma.ServicioProfesionalCreateOrConnectWithoutProfesionalInput[];
    upsert?: Prisma.ServicioProfesionalUpsertWithWhereUniqueWithoutProfesionalInput | Prisma.ServicioProfesionalUpsertWithWhereUniqueWithoutProfesionalInput[];
    createMany?: Prisma.ServicioProfesionalCreateManyProfesionalInputEnvelope;
    set?: Prisma.ServicioProfesionalWhereUniqueInput | Prisma.ServicioProfesionalWhereUniqueInput[];
    disconnect?: Prisma.ServicioProfesionalWhereUniqueInput | Prisma.ServicioProfesionalWhereUniqueInput[];
    delete?: Prisma.ServicioProfesionalWhereUniqueInput | Prisma.ServicioProfesionalWhereUniqueInput[];
    connect?: Prisma.ServicioProfesionalWhereUniqueInput | Prisma.ServicioProfesionalWhereUniqueInput[];
    update?: Prisma.ServicioProfesionalUpdateWithWhereUniqueWithoutProfesionalInput | Prisma.ServicioProfesionalUpdateWithWhereUniqueWithoutProfesionalInput[];
    updateMany?: Prisma.ServicioProfesionalUpdateManyWithWhereWithoutProfesionalInput | Prisma.ServicioProfesionalUpdateManyWithWhereWithoutProfesionalInput[];
    deleteMany?: Prisma.ServicioProfesionalScalarWhereInput | Prisma.ServicioProfesionalScalarWhereInput[];
};
export type ServicioProfesionalCreateNestedManyWithoutServicioInput = {
    create?: Prisma.XOR<Prisma.ServicioProfesionalCreateWithoutServicioInput, Prisma.ServicioProfesionalUncheckedCreateWithoutServicioInput> | Prisma.ServicioProfesionalCreateWithoutServicioInput[] | Prisma.ServicioProfesionalUncheckedCreateWithoutServicioInput[];
    connectOrCreate?: Prisma.ServicioProfesionalCreateOrConnectWithoutServicioInput | Prisma.ServicioProfesionalCreateOrConnectWithoutServicioInput[];
    createMany?: Prisma.ServicioProfesionalCreateManyServicioInputEnvelope;
    connect?: Prisma.ServicioProfesionalWhereUniqueInput | Prisma.ServicioProfesionalWhereUniqueInput[];
};
export type ServicioProfesionalUncheckedCreateNestedManyWithoutServicioInput = {
    create?: Prisma.XOR<Prisma.ServicioProfesionalCreateWithoutServicioInput, Prisma.ServicioProfesionalUncheckedCreateWithoutServicioInput> | Prisma.ServicioProfesionalCreateWithoutServicioInput[] | Prisma.ServicioProfesionalUncheckedCreateWithoutServicioInput[];
    connectOrCreate?: Prisma.ServicioProfesionalCreateOrConnectWithoutServicioInput | Prisma.ServicioProfesionalCreateOrConnectWithoutServicioInput[];
    createMany?: Prisma.ServicioProfesionalCreateManyServicioInputEnvelope;
    connect?: Prisma.ServicioProfesionalWhereUniqueInput | Prisma.ServicioProfesionalWhereUniqueInput[];
};
export type ServicioProfesionalUpdateManyWithoutServicioNestedInput = {
    create?: Prisma.XOR<Prisma.ServicioProfesionalCreateWithoutServicioInput, Prisma.ServicioProfesionalUncheckedCreateWithoutServicioInput> | Prisma.ServicioProfesionalCreateWithoutServicioInput[] | Prisma.ServicioProfesionalUncheckedCreateWithoutServicioInput[];
    connectOrCreate?: Prisma.ServicioProfesionalCreateOrConnectWithoutServicioInput | Prisma.ServicioProfesionalCreateOrConnectWithoutServicioInput[];
    upsert?: Prisma.ServicioProfesionalUpsertWithWhereUniqueWithoutServicioInput | Prisma.ServicioProfesionalUpsertWithWhereUniqueWithoutServicioInput[];
    createMany?: Prisma.ServicioProfesionalCreateManyServicioInputEnvelope;
    set?: Prisma.ServicioProfesionalWhereUniqueInput | Prisma.ServicioProfesionalWhereUniqueInput[];
    disconnect?: Prisma.ServicioProfesionalWhereUniqueInput | Prisma.ServicioProfesionalWhereUniqueInput[];
    delete?: Prisma.ServicioProfesionalWhereUniqueInput | Prisma.ServicioProfesionalWhereUniqueInput[];
    connect?: Prisma.ServicioProfesionalWhereUniqueInput | Prisma.ServicioProfesionalWhereUniqueInput[];
    update?: Prisma.ServicioProfesionalUpdateWithWhereUniqueWithoutServicioInput | Prisma.ServicioProfesionalUpdateWithWhereUniqueWithoutServicioInput[];
    updateMany?: Prisma.ServicioProfesionalUpdateManyWithWhereWithoutServicioInput | Prisma.ServicioProfesionalUpdateManyWithWhereWithoutServicioInput[];
    deleteMany?: Prisma.ServicioProfesionalScalarWhereInput | Prisma.ServicioProfesionalScalarWhereInput[];
};
export type ServicioProfesionalUncheckedUpdateManyWithoutServicioNestedInput = {
    create?: Prisma.XOR<Prisma.ServicioProfesionalCreateWithoutServicioInput, Prisma.ServicioProfesionalUncheckedCreateWithoutServicioInput> | Prisma.ServicioProfesionalCreateWithoutServicioInput[] | Prisma.ServicioProfesionalUncheckedCreateWithoutServicioInput[];
    connectOrCreate?: Prisma.ServicioProfesionalCreateOrConnectWithoutServicioInput | Prisma.ServicioProfesionalCreateOrConnectWithoutServicioInput[];
    upsert?: Prisma.ServicioProfesionalUpsertWithWhereUniqueWithoutServicioInput | Prisma.ServicioProfesionalUpsertWithWhereUniqueWithoutServicioInput[];
    createMany?: Prisma.ServicioProfesionalCreateManyServicioInputEnvelope;
    set?: Prisma.ServicioProfesionalWhereUniqueInput | Prisma.ServicioProfesionalWhereUniqueInput[];
    disconnect?: Prisma.ServicioProfesionalWhereUniqueInput | Prisma.ServicioProfesionalWhereUniqueInput[];
    delete?: Prisma.ServicioProfesionalWhereUniqueInput | Prisma.ServicioProfesionalWhereUniqueInput[];
    connect?: Prisma.ServicioProfesionalWhereUniqueInput | Prisma.ServicioProfesionalWhereUniqueInput[];
    update?: Prisma.ServicioProfesionalUpdateWithWhereUniqueWithoutServicioInput | Prisma.ServicioProfesionalUpdateWithWhereUniqueWithoutServicioInput[];
    updateMany?: Prisma.ServicioProfesionalUpdateManyWithWhereWithoutServicioInput | Prisma.ServicioProfesionalUpdateManyWithWhereWithoutServicioInput[];
    deleteMany?: Prisma.ServicioProfesionalScalarWhereInput | Prisma.ServicioProfesionalScalarWhereInput[];
};
export type ServicioProfesionalCreateWithoutProfesionalInput = {
    servicio: Prisma.ServicioCreateNestedOneWithoutProfesionalesInput;
};
export type ServicioProfesionalUncheckedCreateWithoutProfesionalInput = {
    servicioId: number;
};
export type ServicioProfesionalCreateOrConnectWithoutProfesionalInput = {
    where: Prisma.ServicioProfesionalWhereUniqueInput;
    create: Prisma.XOR<Prisma.ServicioProfesionalCreateWithoutProfesionalInput, Prisma.ServicioProfesionalUncheckedCreateWithoutProfesionalInput>;
};
export type ServicioProfesionalCreateManyProfesionalInputEnvelope = {
    data: Prisma.ServicioProfesionalCreateManyProfesionalInput | Prisma.ServicioProfesionalCreateManyProfesionalInput[];
    skipDuplicates?: boolean;
};
export type ServicioProfesionalUpsertWithWhereUniqueWithoutProfesionalInput = {
    where: Prisma.ServicioProfesionalWhereUniqueInput;
    update: Prisma.XOR<Prisma.ServicioProfesionalUpdateWithoutProfesionalInput, Prisma.ServicioProfesionalUncheckedUpdateWithoutProfesionalInput>;
    create: Prisma.XOR<Prisma.ServicioProfesionalCreateWithoutProfesionalInput, Prisma.ServicioProfesionalUncheckedCreateWithoutProfesionalInput>;
};
export type ServicioProfesionalUpdateWithWhereUniqueWithoutProfesionalInput = {
    where: Prisma.ServicioProfesionalWhereUniqueInput;
    data: Prisma.XOR<Prisma.ServicioProfesionalUpdateWithoutProfesionalInput, Prisma.ServicioProfesionalUncheckedUpdateWithoutProfesionalInput>;
};
export type ServicioProfesionalUpdateManyWithWhereWithoutProfesionalInput = {
    where: Prisma.ServicioProfesionalScalarWhereInput;
    data: Prisma.XOR<Prisma.ServicioProfesionalUpdateManyMutationInput, Prisma.ServicioProfesionalUncheckedUpdateManyWithoutProfesionalInput>;
};
export type ServicioProfesionalScalarWhereInput = {
    AND?: Prisma.ServicioProfesionalScalarWhereInput | Prisma.ServicioProfesionalScalarWhereInput[];
    OR?: Prisma.ServicioProfesionalScalarWhereInput[];
    NOT?: Prisma.ServicioProfesionalScalarWhereInput | Prisma.ServicioProfesionalScalarWhereInput[];
    servicioId?: Prisma.IntFilter<"ServicioProfesional"> | number;
    profesionalId?: Prisma.IntFilter<"ServicioProfesional"> | number;
};
export type ServicioProfesionalCreateWithoutServicioInput = {
    profesional: Prisma.ProfesionalCreateNestedOneWithoutServiciosInput;
};
export type ServicioProfesionalUncheckedCreateWithoutServicioInput = {
    profesionalId: number;
};
export type ServicioProfesionalCreateOrConnectWithoutServicioInput = {
    where: Prisma.ServicioProfesionalWhereUniqueInput;
    create: Prisma.XOR<Prisma.ServicioProfesionalCreateWithoutServicioInput, Prisma.ServicioProfesionalUncheckedCreateWithoutServicioInput>;
};
export type ServicioProfesionalCreateManyServicioInputEnvelope = {
    data: Prisma.ServicioProfesionalCreateManyServicioInput | Prisma.ServicioProfesionalCreateManyServicioInput[];
    skipDuplicates?: boolean;
};
export type ServicioProfesionalUpsertWithWhereUniqueWithoutServicioInput = {
    where: Prisma.ServicioProfesionalWhereUniqueInput;
    update: Prisma.XOR<Prisma.ServicioProfesionalUpdateWithoutServicioInput, Prisma.ServicioProfesionalUncheckedUpdateWithoutServicioInput>;
    create: Prisma.XOR<Prisma.ServicioProfesionalCreateWithoutServicioInput, Prisma.ServicioProfesionalUncheckedCreateWithoutServicioInput>;
};
export type ServicioProfesionalUpdateWithWhereUniqueWithoutServicioInput = {
    where: Prisma.ServicioProfesionalWhereUniqueInput;
    data: Prisma.XOR<Prisma.ServicioProfesionalUpdateWithoutServicioInput, Prisma.ServicioProfesionalUncheckedUpdateWithoutServicioInput>;
};
export type ServicioProfesionalUpdateManyWithWhereWithoutServicioInput = {
    where: Prisma.ServicioProfesionalScalarWhereInput;
    data: Prisma.XOR<Prisma.ServicioProfesionalUpdateManyMutationInput, Prisma.ServicioProfesionalUncheckedUpdateManyWithoutServicioInput>;
};
export type ServicioProfesionalCreateManyProfesionalInput = {
    servicioId: number;
};
export type ServicioProfesionalUpdateWithoutProfesionalInput = {
    servicio?: Prisma.ServicioUpdateOneRequiredWithoutProfesionalesNestedInput;
};
export type ServicioProfesionalUncheckedUpdateWithoutProfesionalInput = {
    servicioId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ServicioProfesionalUncheckedUpdateManyWithoutProfesionalInput = {
    servicioId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ServicioProfesionalCreateManyServicioInput = {
    profesionalId: number;
};
export type ServicioProfesionalUpdateWithoutServicioInput = {
    profesional?: Prisma.ProfesionalUpdateOneRequiredWithoutServiciosNestedInput;
};
export type ServicioProfesionalUncheckedUpdateWithoutServicioInput = {
    profesionalId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ServicioProfesionalUncheckedUpdateManyWithoutServicioInput = {
    profesionalId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ServicioProfesionalSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    servicioId?: boolean;
    profesionalId?: boolean;
    servicio?: boolean | Prisma.ServicioDefaultArgs<ExtArgs>;
    profesional?: boolean | Prisma.ProfesionalDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["servicioProfesional"]>;
export type ServicioProfesionalSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    servicioId?: boolean;
    profesionalId?: boolean;
    servicio?: boolean | Prisma.ServicioDefaultArgs<ExtArgs>;
    profesional?: boolean | Prisma.ProfesionalDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["servicioProfesional"]>;
export type ServicioProfesionalSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    servicioId?: boolean;
    profesionalId?: boolean;
    servicio?: boolean | Prisma.ServicioDefaultArgs<ExtArgs>;
    profesional?: boolean | Prisma.ProfesionalDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["servicioProfesional"]>;
export type ServicioProfesionalSelectScalar = {
    servicioId?: boolean;
    profesionalId?: boolean;
};
export type ServicioProfesionalOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"servicioId" | "profesionalId", ExtArgs["result"]["servicioProfesional"]>;
export type ServicioProfesionalInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    servicio?: boolean | Prisma.ServicioDefaultArgs<ExtArgs>;
    profesional?: boolean | Prisma.ProfesionalDefaultArgs<ExtArgs>;
};
export type ServicioProfesionalIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    servicio?: boolean | Prisma.ServicioDefaultArgs<ExtArgs>;
    profesional?: boolean | Prisma.ProfesionalDefaultArgs<ExtArgs>;
};
export type ServicioProfesionalIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    servicio?: boolean | Prisma.ServicioDefaultArgs<ExtArgs>;
    profesional?: boolean | Prisma.ProfesionalDefaultArgs<ExtArgs>;
};
export type $ServicioProfesionalPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ServicioProfesional";
    objects: {
        servicio: Prisma.$ServicioPayload<ExtArgs>;
        profesional: Prisma.$ProfesionalPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        servicioId: number;
        profesionalId: number;
    }, ExtArgs["result"]["servicioProfesional"]>;
    composites: {};
};
export type ServicioProfesionalGetPayload<S extends boolean | null | undefined | ServicioProfesionalDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ServicioProfesionalPayload, S>;
export type ServicioProfesionalCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ServicioProfesionalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ServicioProfesionalCountAggregateInputType | true;
};
export interface ServicioProfesionalDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ServicioProfesional'];
        meta: {
            name: 'ServicioProfesional';
        };
    };
    findUnique<T extends ServicioProfesionalFindUniqueArgs>(args: Prisma.SelectSubset<T, ServicioProfesionalFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ServicioProfesionalClient<runtime.Types.Result.GetResult<Prisma.$ServicioProfesionalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ServicioProfesionalFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ServicioProfesionalFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ServicioProfesionalClient<runtime.Types.Result.GetResult<Prisma.$ServicioProfesionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ServicioProfesionalFindFirstArgs>(args?: Prisma.SelectSubset<T, ServicioProfesionalFindFirstArgs<ExtArgs>>): Prisma.Prisma__ServicioProfesionalClient<runtime.Types.Result.GetResult<Prisma.$ServicioProfesionalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ServicioProfesionalFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ServicioProfesionalFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ServicioProfesionalClient<runtime.Types.Result.GetResult<Prisma.$ServicioProfesionalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ServicioProfesionalFindManyArgs>(args?: Prisma.SelectSubset<T, ServicioProfesionalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ServicioProfesionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ServicioProfesionalCreateArgs>(args: Prisma.SelectSubset<T, ServicioProfesionalCreateArgs<ExtArgs>>): Prisma.Prisma__ServicioProfesionalClient<runtime.Types.Result.GetResult<Prisma.$ServicioProfesionalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ServicioProfesionalCreateManyArgs>(args?: Prisma.SelectSubset<T, ServicioProfesionalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ServicioProfesionalCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ServicioProfesionalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ServicioProfesionalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ServicioProfesionalDeleteArgs>(args: Prisma.SelectSubset<T, ServicioProfesionalDeleteArgs<ExtArgs>>): Prisma.Prisma__ServicioProfesionalClient<runtime.Types.Result.GetResult<Prisma.$ServicioProfesionalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ServicioProfesionalUpdateArgs>(args: Prisma.SelectSubset<T, ServicioProfesionalUpdateArgs<ExtArgs>>): Prisma.Prisma__ServicioProfesionalClient<runtime.Types.Result.GetResult<Prisma.$ServicioProfesionalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ServicioProfesionalDeleteManyArgs>(args?: Prisma.SelectSubset<T, ServicioProfesionalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ServicioProfesionalUpdateManyArgs>(args: Prisma.SelectSubset<T, ServicioProfesionalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ServicioProfesionalUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ServicioProfesionalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ServicioProfesionalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ServicioProfesionalUpsertArgs>(args: Prisma.SelectSubset<T, ServicioProfesionalUpsertArgs<ExtArgs>>): Prisma.Prisma__ServicioProfesionalClient<runtime.Types.Result.GetResult<Prisma.$ServicioProfesionalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ServicioProfesionalCountArgs>(args?: Prisma.Subset<T, ServicioProfesionalCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ServicioProfesionalCountAggregateOutputType> : number>;
    aggregate<T extends ServicioProfesionalAggregateArgs>(args: Prisma.Subset<T, ServicioProfesionalAggregateArgs>): Prisma.PrismaPromise<GetServicioProfesionalAggregateType<T>>;
    groupBy<T extends ServicioProfesionalGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ServicioProfesionalGroupByArgs['orderBy'];
    } : {
        orderBy?: ServicioProfesionalGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ServicioProfesionalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicioProfesionalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ServicioProfesionalFieldRefs;
}
export interface Prisma__ServicioProfesionalClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    servicio<T extends Prisma.ServicioDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ServicioDefaultArgs<ExtArgs>>): Prisma.Prisma__ServicioClient<runtime.Types.Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    profesional<T extends Prisma.ProfesionalDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProfesionalDefaultArgs<ExtArgs>>): Prisma.Prisma__ProfesionalClient<runtime.Types.Result.GetResult<Prisma.$ProfesionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ServicioProfesionalFieldRefs {
    readonly servicioId: Prisma.FieldRef<"ServicioProfesional", 'Int'>;
    readonly profesionalId: Prisma.FieldRef<"ServicioProfesional", 'Int'>;
}
export type ServicioProfesionalFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServicioProfesionalSelect<ExtArgs> | null;
    omit?: Prisma.ServicioProfesionalOmit<ExtArgs> | null;
    include?: Prisma.ServicioProfesionalInclude<ExtArgs> | null;
    where: Prisma.ServicioProfesionalWhereUniqueInput;
};
export type ServicioProfesionalFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServicioProfesionalSelect<ExtArgs> | null;
    omit?: Prisma.ServicioProfesionalOmit<ExtArgs> | null;
    include?: Prisma.ServicioProfesionalInclude<ExtArgs> | null;
    where: Prisma.ServicioProfesionalWhereUniqueInput;
};
export type ServicioProfesionalFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ServicioProfesionalFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ServicioProfesionalFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ServicioProfesionalCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServicioProfesionalSelect<ExtArgs> | null;
    omit?: Prisma.ServicioProfesionalOmit<ExtArgs> | null;
    include?: Prisma.ServicioProfesionalInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ServicioProfesionalCreateInput, Prisma.ServicioProfesionalUncheckedCreateInput>;
};
export type ServicioProfesionalCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ServicioProfesionalCreateManyInput | Prisma.ServicioProfesionalCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ServicioProfesionalCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServicioProfesionalSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ServicioProfesionalOmit<ExtArgs> | null;
    data: Prisma.ServicioProfesionalCreateManyInput | Prisma.ServicioProfesionalCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ServicioProfesionalIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ServicioProfesionalUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServicioProfesionalSelect<ExtArgs> | null;
    omit?: Prisma.ServicioProfesionalOmit<ExtArgs> | null;
    include?: Prisma.ServicioProfesionalInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ServicioProfesionalUpdateInput, Prisma.ServicioProfesionalUncheckedUpdateInput>;
    where: Prisma.ServicioProfesionalWhereUniqueInput;
};
export type ServicioProfesionalUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ServicioProfesionalUpdateManyMutationInput, Prisma.ServicioProfesionalUncheckedUpdateManyInput>;
    where?: Prisma.ServicioProfesionalWhereInput;
    limit?: number;
};
export type ServicioProfesionalUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServicioProfesionalSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ServicioProfesionalOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ServicioProfesionalUpdateManyMutationInput, Prisma.ServicioProfesionalUncheckedUpdateManyInput>;
    where?: Prisma.ServicioProfesionalWhereInput;
    limit?: number;
    include?: Prisma.ServicioProfesionalIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ServicioProfesionalUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServicioProfesionalSelect<ExtArgs> | null;
    omit?: Prisma.ServicioProfesionalOmit<ExtArgs> | null;
    include?: Prisma.ServicioProfesionalInclude<ExtArgs> | null;
    where: Prisma.ServicioProfesionalWhereUniqueInput;
    create: Prisma.XOR<Prisma.ServicioProfesionalCreateInput, Prisma.ServicioProfesionalUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ServicioProfesionalUpdateInput, Prisma.ServicioProfesionalUncheckedUpdateInput>;
};
export type ServicioProfesionalDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServicioProfesionalSelect<ExtArgs> | null;
    omit?: Prisma.ServicioProfesionalOmit<ExtArgs> | null;
    include?: Prisma.ServicioProfesionalInclude<ExtArgs> | null;
    where: Prisma.ServicioProfesionalWhereUniqueInput;
};
export type ServicioProfesionalDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ServicioProfesionalWhereInput;
    limit?: number;
};
export type ServicioProfesionalDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServicioProfesionalSelect<ExtArgs> | null;
    omit?: Prisma.ServicioProfesionalOmit<ExtArgs> | null;
    include?: Prisma.ServicioProfesionalInclude<ExtArgs> | null;
};
