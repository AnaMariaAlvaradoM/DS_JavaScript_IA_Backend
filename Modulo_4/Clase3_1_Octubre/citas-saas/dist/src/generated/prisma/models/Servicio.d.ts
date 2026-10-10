import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ServicioModel = runtime.Types.Result.DefaultSelection<Prisma.$ServicioPayload>;
export type AggregateServicio = {
    _count: ServicioCountAggregateOutputType | null;
    _avg: ServicioAvgAggregateOutputType | null;
    _sum: ServicioSumAggregateOutputType | null;
    _min: ServicioMinAggregateOutputType | null;
    _max: ServicioMaxAggregateOutputType | null;
};
export type ServicioAvgAggregateOutputType = {
    id: number | null;
    duracionMin: number | null;
    precio: runtime.Decimal | null;
    negocioId: number | null;
};
export type ServicioSumAggregateOutputType = {
    id: number | null;
    duracionMin: number | null;
    precio: runtime.Decimal | null;
    negocioId: number | null;
};
export type ServicioMinAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    duracionMin: number | null;
    precio: runtime.Decimal | null;
    activo: boolean | null;
    creadoEn: Date | null;
    negocioId: number | null;
};
export type ServicioMaxAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    duracionMin: number | null;
    precio: runtime.Decimal | null;
    activo: boolean | null;
    creadoEn: Date | null;
    negocioId: number | null;
};
export type ServicioCountAggregateOutputType = {
    id: number;
    nombre: number;
    duracionMin: number;
    precio: number;
    activo: number;
    creadoEn: number;
    negocioId: number;
    _all: number;
};
export type ServicioAvgAggregateInputType = {
    id?: true;
    duracionMin?: true;
    precio?: true;
    negocioId?: true;
};
export type ServicioSumAggregateInputType = {
    id?: true;
    duracionMin?: true;
    precio?: true;
    negocioId?: true;
};
export type ServicioMinAggregateInputType = {
    id?: true;
    nombre?: true;
    duracionMin?: true;
    precio?: true;
    activo?: true;
    creadoEn?: true;
    negocioId?: true;
};
export type ServicioMaxAggregateInputType = {
    id?: true;
    nombre?: true;
    duracionMin?: true;
    precio?: true;
    activo?: true;
    creadoEn?: true;
    negocioId?: true;
};
export type ServicioCountAggregateInputType = {
    id?: true;
    nombre?: true;
    duracionMin?: true;
    precio?: true;
    activo?: true;
    creadoEn?: true;
    negocioId?: true;
    _all?: true;
};
export type ServicioAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ServicioWhereInput;
    orderBy?: Prisma.ServicioOrderByWithRelationInput | Prisma.ServicioOrderByWithRelationInput[];
    cursor?: Prisma.ServicioWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ServicioCountAggregateInputType;
    _avg?: ServicioAvgAggregateInputType;
    _sum?: ServicioSumAggregateInputType;
    _min?: ServicioMinAggregateInputType;
    _max?: ServicioMaxAggregateInputType;
};
export type GetServicioAggregateType<T extends ServicioAggregateArgs> = {
    [P in keyof T & keyof AggregateServicio]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateServicio[P]> : Prisma.GetScalarType<T[P], AggregateServicio[P]>;
};
export type ServicioGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ServicioWhereInput;
    orderBy?: Prisma.ServicioOrderByWithAggregationInput | Prisma.ServicioOrderByWithAggregationInput[];
    by: Prisma.ServicioScalarFieldEnum[] | Prisma.ServicioScalarFieldEnum;
    having?: Prisma.ServicioScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ServicioCountAggregateInputType | true;
    _avg?: ServicioAvgAggregateInputType;
    _sum?: ServicioSumAggregateInputType;
    _min?: ServicioMinAggregateInputType;
    _max?: ServicioMaxAggregateInputType;
};
export type ServicioGroupByOutputType = {
    id: number;
    nombre: string;
    duracionMin: number;
    precio: runtime.Decimal;
    activo: boolean;
    creadoEn: Date;
    negocioId: number;
    _count: ServicioCountAggregateOutputType | null;
    _avg: ServicioAvgAggregateOutputType | null;
    _sum: ServicioSumAggregateOutputType | null;
    _min: ServicioMinAggregateOutputType | null;
    _max: ServicioMaxAggregateOutputType | null;
};
export type GetServicioGroupByPayload<T extends ServicioGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ServicioGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ServicioGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ServicioGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ServicioGroupByOutputType[P]>;
}>>;
export type ServicioWhereInput = {
    AND?: Prisma.ServicioWhereInput | Prisma.ServicioWhereInput[];
    OR?: Prisma.ServicioWhereInput[];
    NOT?: Prisma.ServicioWhereInput | Prisma.ServicioWhereInput[];
    id?: Prisma.IntFilter<"Servicio"> | number;
    nombre?: Prisma.StringFilter<"Servicio"> | string;
    duracionMin?: Prisma.IntFilter<"Servicio"> | number;
    precio?: Prisma.DecimalFilter<"Servicio"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFilter<"Servicio"> | boolean;
    creadoEn?: Prisma.DateTimeFilter<"Servicio"> | Date | string;
    negocioId?: Prisma.IntFilter<"Servicio"> | number;
    negocio?: Prisma.XOR<Prisma.NegocioScalarRelationFilter, Prisma.NegocioWhereInput>;
    profesionales?: Prisma.ServicioProfesionalListRelationFilter;
    citas?: Prisma.CitaListRelationFilter;
};
export type ServicioOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    duracionMin?: Prisma.SortOrder;
    precio?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    negocioId?: Prisma.SortOrder;
    negocio?: Prisma.NegocioOrderByWithRelationInput;
    profesionales?: Prisma.ServicioProfesionalOrderByRelationAggregateInput;
    citas?: Prisma.CitaOrderByRelationAggregateInput;
};
export type ServicioWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ServicioWhereInput | Prisma.ServicioWhereInput[];
    OR?: Prisma.ServicioWhereInput[];
    NOT?: Prisma.ServicioWhereInput | Prisma.ServicioWhereInput[];
    nombre?: Prisma.StringFilter<"Servicio"> | string;
    duracionMin?: Prisma.IntFilter<"Servicio"> | number;
    precio?: Prisma.DecimalFilter<"Servicio"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFilter<"Servicio"> | boolean;
    creadoEn?: Prisma.DateTimeFilter<"Servicio"> | Date | string;
    negocioId?: Prisma.IntFilter<"Servicio"> | number;
    negocio?: Prisma.XOR<Prisma.NegocioScalarRelationFilter, Prisma.NegocioWhereInput>;
    profesionales?: Prisma.ServicioProfesionalListRelationFilter;
    citas?: Prisma.CitaListRelationFilter;
}, "id">;
export type ServicioOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    duracionMin?: Prisma.SortOrder;
    precio?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    negocioId?: Prisma.SortOrder;
    _count?: Prisma.ServicioCountOrderByAggregateInput;
    _avg?: Prisma.ServicioAvgOrderByAggregateInput;
    _max?: Prisma.ServicioMaxOrderByAggregateInput;
    _min?: Prisma.ServicioMinOrderByAggregateInput;
    _sum?: Prisma.ServicioSumOrderByAggregateInput;
};
export type ServicioScalarWhereWithAggregatesInput = {
    AND?: Prisma.ServicioScalarWhereWithAggregatesInput | Prisma.ServicioScalarWhereWithAggregatesInput[];
    OR?: Prisma.ServicioScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ServicioScalarWhereWithAggregatesInput | Prisma.ServicioScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Servicio"> | number;
    nombre?: Prisma.StringWithAggregatesFilter<"Servicio"> | string;
    duracionMin?: Prisma.IntWithAggregatesFilter<"Servicio"> | number;
    precio?: Prisma.DecimalWithAggregatesFilter<"Servicio"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolWithAggregatesFilter<"Servicio"> | boolean;
    creadoEn?: Prisma.DateTimeWithAggregatesFilter<"Servicio"> | Date | string;
    negocioId?: Prisma.IntWithAggregatesFilter<"Servicio"> | number;
};
export type ServicioCreateInput = {
    nombre: string;
    duracionMin: number;
    precio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: boolean;
    creadoEn?: Date | string;
    negocio: Prisma.NegocioCreateNestedOneWithoutServiciosInput;
    profesionales?: Prisma.ServicioProfesionalCreateNestedManyWithoutServicioInput;
    citas?: Prisma.CitaCreateNestedManyWithoutServicioInput;
};
export type ServicioUncheckedCreateInput = {
    id?: number;
    nombre: string;
    duracionMin: number;
    precio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: boolean;
    creadoEn?: Date | string;
    negocioId: number;
    profesionales?: Prisma.ServicioProfesionalUncheckedCreateNestedManyWithoutServicioInput;
    citas?: Prisma.CitaUncheckedCreateNestedManyWithoutServicioInput;
};
export type ServicioUpdateInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    duracionMin?: Prisma.IntFieldUpdateOperationsInput | number;
    precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    negocio?: Prisma.NegocioUpdateOneRequiredWithoutServiciosNestedInput;
    profesionales?: Prisma.ServicioProfesionalUpdateManyWithoutServicioNestedInput;
    citas?: Prisma.CitaUpdateManyWithoutServicioNestedInput;
};
export type ServicioUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    duracionMin?: Prisma.IntFieldUpdateOperationsInput | number;
    precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    negocioId?: Prisma.IntFieldUpdateOperationsInput | number;
    profesionales?: Prisma.ServicioProfesionalUncheckedUpdateManyWithoutServicioNestedInput;
    citas?: Prisma.CitaUncheckedUpdateManyWithoutServicioNestedInput;
};
export type ServicioCreateManyInput = {
    id?: number;
    nombre: string;
    duracionMin: number;
    precio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: boolean;
    creadoEn?: Date | string;
    negocioId: number;
};
export type ServicioUpdateManyMutationInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    duracionMin?: Prisma.IntFieldUpdateOperationsInput | number;
    precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ServicioUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    duracionMin?: Prisma.IntFieldUpdateOperationsInput | number;
    precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    negocioId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ServicioListRelationFilter = {
    every?: Prisma.ServicioWhereInput;
    some?: Prisma.ServicioWhereInput;
    none?: Prisma.ServicioWhereInput;
};
export type ServicioOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ServicioCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    duracionMin?: Prisma.SortOrder;
    precio?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    negocioId?: Prisma.SortOrder;
};
export type ServicioAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    duracionMin?: Prisma.SortOrder;
    precio?: Prisma.SortOrder;
    negocioId?: Prisma.SortOrder;
};
export type ServicioMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    duracionMin?: Prisma.SortOrder;
    precio?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    negocioId?: Prisma.SortOrder;
};
export type ServicioMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    duracionMin?: Prisma.SortOrder;
    precio?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    negocioId?: Prisma.SortOrder;
};
export type ServicioSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    duracionMin?: Prisma.SortOrder;
    precio?: Prisma.SortOrder;
    negocioId?: Prisma.SortOrder;
};
export type ServicioScalarRelationFilter = {
    is?: Prisma.ServicioWhereInput;
    isNot?: Prisma.ServicioWhereInput;
};
export type ServicioCreateNestedManyWithoutNegocioInput = {
    create?: Prisma.XOR<Prisma.ServicioCreateWithoutNegocioInput, Prisma.ServicioUncheckedCreateWithoutNegocioInput> | Prisma.ServicioCreateWithoutNegocioInput[] | Prisma.ServicioUncheckedCreateWithoutNegocioInput[];
    connectOrCreate?: Prisma.ServicioCreateOrConnectWithoutNegocioInput | Prisma.ServicioCreateOrConnectWithoutNegocioInput[];
    createMany?: Prisma.ServicioCreateManyNegocioInputEnvelope;
    connect?: Prisma.ServicioWhereUniqueInput | Prisma.ServicioWhereUniqueInput[];
};
export type ServicioUncheckedCreateNestedManyWithoutNegocioInput = {
    create?: Prisma.XOR<Prisma.ServicioCreateWithoutNegocioInput, Prisma.ServicioUncheckedCreateWithoutNegocioInput> | Prisma.ServicioCreateWithoutNegocioInput[] | Prisma.ServicioUncheckedCreateWithoutNegocioInput[];
    connectOrCreate?: Prisma.ServicioCreateOrConnectWithoutNegocioInput | Prisma.ServicioCreateOrConnectWithoutNegocioInput[];
    createMany?: Prisma.ServicioCreateManyNegocioInputEnvelope;
    connect?: Prisma.ServicioWhereUniqueInput | Prisma.ServicioWhereUniqueInput[];
};
export type ServicioUpdateManyWithoutNegocioNestedInput = {
    create?: Prisma.XOR<Prisma.ServicioCreateWithoutNegocioInput, Prisma.ServicioUncheckedCreateWithoutNegocioInput> | Prisma.ServicioCreateWithoutNegocioInput[] | Prisma.ServicioUncheckedCreateWithoutNegocioInput[];
    connectOrCreate?: Prisma.ServicioCreateOrConnectWithoutNegocioInput | Prisma.ServicioCreateOrConnectWithoutNegocioInput[];
    upsert?: Prisma.ServicioUpsertWithWhereUniqueWithoutNegocioInput | Prisma.ServicioUpsertWithWhereUniqueWithoutNegocioInput[];
    createMany?: Prisma.ServicioCreateManyNegocioInputEnvelope;
    set?: Prisma.ServicioWhereUniqueInput | Prisma.ServicioWhereUniqueInput[];
    disconnect?: Prisma.ServicioWhereUniqueInput | Prisma.ServicioWhereUniqueInput[];
    delete?: Prisma.ServicioWhereUniqueInput | Prisma.ServicioWhereUniqueInput[];
    connect?: Prisma.ServicioWhereUniqueInput | Prisma.ServicioWhereUniqueInput[];
    update?: Prisma.ServicioUpdateWithWhereUniqueWithoutNegocioInput | Prisma.ServicioUpdateWithWhereUniqueWithoutNegocioInput[];
    updateMany?: Prisma.ServicioUpdateManyWithWhereWithoutNegocioInput | Prisma.ServicioUpdateManyWithWhereWithoutNegocioInput[];
    deleteMany?: Prisma.ServicioScalarWhereInput | Prisma.ServicioScalarWhereInput[];
};
export type ServicioUncheckedUpdateManyWithoutNegocioNestedInput = {
    create?: Prisma.XOR<Prisma.ServicioCreateWithoutNegocioInput, Prisma.ServicioUncheckedCreateWithoutNegocioInput> | Prisma.ServicioCreateWithoutNegocioInput[] | Prisma.ServicioUncheckedCreateWithoutNegocioInput[];
    connectOrCreate?: Prisma.ServicioCreateOrConnectWithoutNegocioInput | Prisma.ServicioCreateOrConnectWithoutNegocioInput[];
    upsert?: Prisma.ServicioUpsertWithWhereUniqueWithoutNegocioInput | Prisma.ServicioUpsertWithWhereUniqueWithoutNegocioInput[];
    createMany?: Prisma.ServicioCreateManyNegocioInputEnvelope;
    set?: Prisma.ServicioWhereUniqueInput | Prisma.ServicioWhereUniqueInput[];
    disconnect?: Prisma.ServicioWhereUniqueInput | Prisma.ServicioWhereUniqueInput[];
    delete?: Prisma.ServicioWhereUniqueInput | Prisma.ServicioWhereUniqueInput[];
    connect?: Prisma.ServicioWhereUniqueInput | Prisma.ServicioWhereUniqueInput[];
    update?: Prisma.ServicioUpdateWithWhereUniqueWithoutNegocioInput | Prisma.ServicioUpdateWithWhereUniqueWithoutNegocioInput[];
    updateMany?: Prisma.ServicioUpdateManyWithWhereWithoutNegocioInput | Prisma.ServicioUpdateManyWithWhereWithoutNegocioInput[];
    deleteMany?: Prisma.ServicioScalarWhereInput | Prisma.ServicioScalarWhereInput[];
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type ServicioCreateNestedOneWithoutProfesionalesInput = {
    create?: Prisma.XOR<Prisma.ServicioCreateWithoutProfesionalesInput, Prisma.ServicioUncheckedCreateWithoutProfesionalesInput>;
    connectOrCreate?: Prisma.ServicioCreateOrConnectWithoutProfesionalesInput;
    connect?: Prisma.ServicioWhereUniqueInput;
};
export type ServicioUpdateOneRequiredWithoutProfesionalesNestedInput = {
    create?: Prisma.XOR<Prisma.ServicioCreateWithoutProfesionalesInput, Prisma.ServicioUncheckedCreateWithoutProfesionalesInput>;
    connectOrCreate?: Prisma.ServicioCreateOrConnectWithoutProfesionalesInput;
    upsert?: Prisma.ServicioUpsertWithoutProfesionalesInput;
    connect?: Prisma.ServicioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ServicioUpdateToOneWithWhereWithoutProfesionalesInput, Prisma.ServicioUpdateWithoutProfesionalesInput>, Prisma.ServicioUncheckedUpdateWithoutProfesionalesInput>;
};
export type ServicioCreateNestedOneWithoutCitasInput = {
    create?: Prisma.XOR<Prisma.ServicioCreateWithoutCitasInput, Prisma.ServicioUncheckedCreateWithoutCitasInput>;
    connectOrCreate?: Prisma.ServicioCreateOrConnectWithoutCitasInput;
    connect?: Prisma.ServicioWhereUniqueInput;
};
export type ServicioUpdateOneRequiredWithoutCitasNestedInput = {
    create?: Prisma.XOR<Prisma.ServicioCreateWithoutCitasInput, Prisma.ServicioUncheckedCreateWithoutCitasInput>;
    connectOrCreate?: Prisma.ServicioCreateOrConnectWithoutCitasInput;
    upsert?: Prisma.ServicioUpsertWithoutCitasInput;
    connect?: Prisma.ServicioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ServicioUpdateToOneWithWhereWithoutCitasInput, Prisma.ServicioUpdateWithoutCitasInput>, Prisma.ServicioUncheckedUpdateWithoutCitasInput>;
};
export type ServicioCreateWithoutNegocioInput = {
    nombre: string;
    duracionMin: number;
    precio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: boolean;
    creadoEn?: Date | string;
    profesionales?: Prisma.ServicioProfesionalCreateNestedManyWithoutServicioInput;
    citas?: Prisma.CitaCreateNestedManyWithoutServicioInput;
};
export type ServicioUncheckedCreateWithoutNegocioInput = {
    id?: number;
    nombre: string;
    duracionMin: number;
    precio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: boolean;
    creadoEn?: Date | string;
    profesionales?: Prisma.ServicioProfesionalUncheckedCreateNestedManyWithoutServicioInput;
    citas?: Prisma.CitaUncheckedCreateNestedManyWithoutServicioInput;
};
export type ServicioCreateOrConnectWithoutNegocioInput = {
    where: Prisma.ServicioWhereUniqueInput;
    create: Prisma.XOR<Prisma.ServicioCreateWithoutNegocioInput, Prisma.ServicioUncheckedCreateWithoutNegocioInput>;
};
export type ServicioCreateManyNegocioInputEnvelope = {
    data: Prisma.ServicioCreateManyNegocioInput | Prisma.ServicioCreateManyNegocioInput[];
    skipDuplicates?: boolean;
};
export type ServicioUpsertWithWhereUniqueWithoutNegocioInput = {
    where: Prisma.ServicioWhereUniqueInput;
    update: Prisma.XOR<Prisma.ServicioUpdateWithoutNegocioInput, Prisma.ServicioUncheckedUpdateWithoutNegocioInput>;
    create: Prisma.XOR<Prisma.ServicioCreateWithoutNegocioInput, Prisma.ServicioUncheckedCreateWithoutNegocioInput>;
};
export type ServicioUpdateWithWhereUniqueWithoutNegocioInput = {
    where: Prisma.ServicioWhereUniqueInput;
    data: Prisma.XOR<Prisma.ServicioUpdateWithoutNegocioInput, Prisma.ServicioUncheckedUpdateWithoutNegocioInput>;
};
export type ServicioUpdateManyWithWhereWithoutNegocioInput = {
    where: Prisma.ServicioScalarWhereInput;
    data: Prisma.XOR<Prisma.ServicioUpdateManyMutationInput, Prisma.ServicioUncheckedUpdateManyWithoutNegocioInput>;
};
export type ServicioScalarWhereInput = {
    AND?: Prisma.ServicioScalarWhereInput | Prisma.ServicioScalarWhereInput[];
    OR?: Prisma.ServicioScalarWhereInput[];
    NOT?: Prisma.ServicioScalarWhereInput | Prisma.ServicioScalarWhereInput[];
    id?: Prisma.IntFilter<"Servicio"> | number;
    nombre?: Prisma.StringFilter<"Servicio"> | string;
    duracionMin?: Prisma.IntFilter<"Servicio"> | number;
    precio?: Prisma.DecimalFilter<"Servicio"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFilter<"Servicio"> | boolean;
    creadoEn?: Prisma.DateTimeFilter<"Servicio"> | Date | string;
    negocioId?: Prisma.IntFilter<"Servicio"> | number;
};
export type ServicioCreateWithoutProfesionalesInput = {
    nombre: string;
    duracionMin: number;
    precio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: boolean;
    creadoEn?: Date | string;
    negocio: Prisma.NegocioCreateNestedOneWithoutServiciosInput;
    citas?: Prisma.CitaCreateNestedManyWithoutServicioInput;
};
export type ServicioUncheckedCreateWithoutProfesionalesInput = {
    id?: number;
    nombre: string;
    duracionMin: number;
    precio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: boolean;
    creadoEn?: Date | string;
    negocioId: number;
    citas?: Prisma.CitaUncheckedCreateNestedManyWithoutServicioInput;
};
export type ServicioCreateOrConnectWithoutProfesionalesInput = {
    where: Prisma.ServicioWhereUniqueInput;
    create: Prisma.XOR<Prisma.ServicioCreateWithoutProfesionalesInput, Prisma.ServicioUncheckedCreateWithoutProfesionalesInput>;
};
export type ServicioUpsertWithoutProfesionalesInput = {
    update: Prisma.XOR<Prisma.ServicioUpdateWithoutProfesionalesInput, Prisma.ServicioUncheckedUpdateWithoutProfesionalesInput>;
    create: Prisma.XOR<Prisma.ServicioCreateWithoutProfesionalesInput, Prisma.ServicioUncheckedCreateWithoutProfesionalesInput>;
    where?: Prisma.ServicioWhereInput;
};
export type ServicioUpdateToOneWithWhereWithoutProfesionalesInput = {
    where?: Prisma.ServicioWhereInput;
    data: Prisma.XOR<Prisma.ServicioUpdateWithoutProfesionalesInput, Prisma.ServicioUncheckedUpdateWithoutProfesionalesInput>;
};
export type ServicioUpdateWithoutProfesionalesInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    duracionMin?: Prisma.IntFieldUpdateOperationsInput | number;
    precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    negocio?: Prisma.NegocioUpdateOneRequiredWithoutServiciosNestedInput;
    citas?: Prisma.CitaUpdateManyWithoutServicioNestedInput;
};
export type ServicioUncheckedUpdateWithoutProfesionalesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    duracionMin?: Prisma.IntFieldUpdateOperationsInput | number;
    precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    negocioId?: Prisma.IntFieldUpdateOperationsInput | number;
    citas?: Prisma.CitaUncheckedUpdateManyWithoutServicioNestedInput;
};
export type ServicioCreateWithoutCitasInput = {
    nombre: string;
    duracionMin: number;
    precio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: boolean;
    creadoEn?: Date | string;
    negocio: Prisma.NegocioCreateNestedOneWithoutServiciosInput;
    profesionales?: Prisma.ServicioProfesionalCreateNestedManyWithoutServicioInput;
};
export type ServicioUncheckedCreateWithoutCitasInput = {
    id?: number;
    nombre: string;
    duracionMin: number;
    precio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: boolean;
    creadoEn?: Date | string;
    negocioId: number;
    profesionales?: Prisma.ServicioProfesionalUncheckedCreateNestedManyWithoutServicioInput;
};
export type ServicioCreateOrConnectWithoutCitasInput = {
    where: Prisma.ServicioWhereUniqueInput;
    create: Prisma.XOR<Prisma.ServicioCreateWithoutCitasInput, Prisma.ServicioUncheckedCreateWithoutCitasInput>;
};
export type ServicioUpsertWithoutCitasInput = {
    update: Prisma.XOR<Prisma.ServicioUpdateWithoutCitasInput, Prisma.ServicioUncheckedUpdateWithoutCitasInput>;
    create: Prisma.XOR<Prisma.ServicioCreateWithoutCitasInput, Prisma.ServicioUncheckedCreateWithoutCitasInput>;
    where?: Prisma.ServicioWhereInput;
};
export type ServicioUpdateToOneWithWhereWithoutCitasInput = {
    where?: Prisma.ServicioWhereInput;
    data: Prisma.XOR<Prisma.ServicioUpdateWithoutCitasInput, Prisma.ServicioUncheckedUpdateWithoutCitasInput>;
};
export type ServicioUpdateWithoutCitasInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    duracionMin?: Prisma.IntFieldUpdateOperationsInput | number;
    precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    negocio?: Prisma.NegocioUpdateOneRequiredWithoutServiciosNestedInput;
    profesionales?: Prisma.ServicioProfesionalUpdateManyWithoutServicioNestedInput;
};
export type ServicioUncheckedUpdateWithoutCitasInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    duracionMin?: Prisma.IntFieldUpdateOperationsInput | number;
    precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    negocioId?: Prisma.IntFieldUpdateOperationsInput | number;
    profesionales?: Prisma.ServicioProfesionalUncheckedUpdateManyWithoutServicioNestedInput;
};
export type ServicioCreateManyNegocioInput = {
    id?: number;
    nombre: string;
    duracionMin: number;
    precio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: boolean;
    creadoEn?: Date | string;
};
export type ServicioUpdateWithoutNegocioInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    duracionMin?: Prisma.IntFieldUpdateOperationsInput | number;
    precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profesionales?: Prisma.ServicioProfesionalUpdateManyWithoutServicioNestedInput;
    citas?: Prisma.CitaUpdateManyWithoutServicioNestedInput;
};
export type ServicioUncheckedUpdateWithoutNegocioInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    duracionMin?: Prisma.IntFieldUpdateOperationsInput | number;
    precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profesionales?: Prisma.ServicioProfesionalUncheckedUpdateManyWithoutServicioNestedInput;
    citas?: Prisma.CitaUncheckedUpdateManyWithoutServicioNestedInput;
};
export type ServicioUncheckedUpdateManyWithoutNegocioInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    duracionMin?: Prisma.IntFieldUpdateOperationsInput | number;
    precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ServicioCountOutputType = {
    profesionales: number;
    citas: number;
};
export type ServicioCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profesionales?: boolean | ServicioCountOutputTypeCountProfesionalesArgs;
    citas?: boolean | ServicioCountOutputTypeCountCitasArgs;
};
export type ServicioCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServicioCountOutputTypeSelect<ExtArgs> | null;
};
export type ServicioCountOutputTypeCountProfesionalesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ServicioProfesionalWhereInput;
};
export type ServicioCountOutputTypeCountCitasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CitaWhereInput;
};
export type ServicioSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    duracionMin?: boolean;
    precio?: boolean;
    activo?: boolean;
    creadoEn?: boolean;
    negocioId?: boolean;
    negocio?: boolean | Prisma.NegocioDefaultArgs<ExtArgs>;
    profesionales?: boolean | Prisma.Servicio$profesionalesArgs<ExtArgs>;
    citas?: boolean | Prisma.Servicio$citasArgs<ExtArgs>;
    _count?: boolean | Prisma.ServicioCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["servicio"]>;
export type ServicioSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    duracionMin?: boolean;
    precio?: boolean;
    activo?: boolean;
    creadoEn?: boolean;
    negocioId?: boolean;
    negocio?: boolean | Prisma.NegocioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["servicio"]>;
export type ServicioSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    duracionMin?: boolean;
    precio?: boolean;
    activo?: boolean;
    creadoEn?: boolean;
    negocioId?: boolean;
    negocio?: boolean | Prisma.NegocioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["servicio"]>;
export type ServicioSelectScalar = {
    id?: boolean;
    nombre?: boolean;
    duracionMin?: boolean;
    precio?: boolean;
    activo?: boolean;
    creadoEn?: boolean;
    negocioId?: boolean;
};
export type ServicioOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre" | "duracionMin" | "precio" | "activo" | "creadoEn" | "negocioId", ExtArgs["result"]["servicio"]>;
export type ServicioInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    negocio?: boolean | Prisma.NegocioDefaultArgs<ExtArgs>;
    profesionales?: boolean | Prisma.Servicio$profesionalesArgs<ExtArgs>;
    citas?: boolean | Prisma.Servicio$citasArgs<ExtArgs>;
    _count?: boolean | Prisma.ServicioCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ServicioIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    negocio?: boolean | Prisma.NegocioDefaultArgs<ExtArgs>;
};
export type ServicioIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    negocio?: boolean | Prisma.NegocioDefaultArgs<ExtArgs>;
};
export type $ServicioPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Servicio";
    objects: {
        negocio: Prisma.$NegocioPayload<ExtArgs>;
        profesionales: Prisma.$ServicioProfesionalPayload<ExtArgs>[];
        citas: Prisma.$CitaPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nombre: string;
        duracionMin: number;
        precio: runtime.Decimal;
        activo: boolean;
        creadoEn: Date;
        negocioId: number;
    }, ExtArgs["result"]["servicio"]>;
    composites: {};
};
export type ServicioGetPayload<S extends boolean | null | undefined | ServicioDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ServicioPayload, S>;
export type ServicioCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ServicioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ServicioCountAggregateInputType | true;
};
export interface ServicioDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Servicio'];
        meta: {
            name: 'Servicio';
        };
    };
    findUnique<T extends ServicioFindUniqueArgs>(args: Prisma.SelectSubset<T, ServicioFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ServicioClient<runtime.Types.Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ServicioFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ServicioFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ServicioClient<runtime.Types.Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ServicioFindFirstArgs>(args?: Prisma.SelectSubset<T, ServicioFindFirstArgs<ExtArgs>>): Prisma.Prisma__ServicioClient<runtime.Types.Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ServicioFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ServicioFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ServicioClient<runtime.Types.Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ServicioFindManyArgs>(args?: Prisma.SelectSubset<T, ServicioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ServicioCreateArgs>(args: Prisma.SelectSubset<T, ServicioCreateArgs<ExtArgs>>): Prisma.Prisma__ServicioClient<runtime.Types.Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ServicioCreateManyArgs>(args?: Prisma.SelectSubset<T, ServicioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ServicioCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ServicioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ServicioDeleteArgs>(args: Prisma.SelectSubset<T, ServicioDeleteArgs<ExtArgs>>): Prisma.Prisma__ServicioClient<runtime.Types.Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ServicioUpdateArgs>(args: Prisma.SelectSubset<T, ServicioUpdateArgs<ExtArgs>>): Prisma.Prisma__ServicioClient<runtime.Types.Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ServicioDeleteManyArgs>(args?: Prisma.SelectSubset<T, ServicioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ServicioUpdateManyArgs>(args: Prisma.SelectSubset<T, ServicioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ServicioUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ServicioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ServicioUpsertArgs>(args: Prisma.SelectSubset<T, ServicioUpsertArgs<ExtArgs>>): Prisma.Prisma__ServicioClient<runtime.Types.Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ServicioCountArgs>(args?: Prisma.Subset<T, ServicioCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ServicioCountAggregateOutputType> : number>;
    aggregate<T extends ServicioAggregateArgs>(args: Prisma.Subset<T, ServicioAggregateArgs>): Prisma.PrismaPromise<GetServicioAggregateType<T>>;
    groupBy<T extends ServicioGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ServicioGroupByArgs['orderBy'];
    } : {
        orderBy?: ServicioGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ServicioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ServicioFieldRefs;
}
export interface Prisma__ServicioClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    negocio<T extends Prisma.NegocioDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.NegocioDefaultArgs<ExtArgs>>): Prisma.Prisma__NegocioClient<runtime.Types.Result.GetResult<Prisma.$NegocioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    profesionales<T extends Prisma.Servicio$profesionalesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Servicio$profesionalesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ServicioProfesionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    citas<T extends Prisma.Servicio$citasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Servicio$citasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ServicioFieldRefs {
    readonly id: Prisma.FieldRef<"Servicio", 'Int'>;
    readonly nombre: Prisma.FieldRef<"Servicio", 'String'>;
    readonly duracionMin: Prisma.FieldRef<"Servicio", 'Int'>;
    readonly precio: Prisma.FieldRef<"Servicio", 'Decimal'>;
    readonly activo: Prisma.FieldRef<"Servicio", 'Boolean'>;
    readonly creadoEn: Prisma.FieldRef<"Servicio", 'DateTime'>;
    readonly negocioId: Prisma.FieldRef<"Servicio", 'Int'>;
}
export type ServicioFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServicioSelect<ExtArgs> | null;
    omit?: Prisma.ServicioOmit<ExtArgs> | null;
    include?: Prisma.ServicioInclude<ExtArgs> | null;
    where: Prisma.ServicioWhereUniqueInput;
};
export type ServicioFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServicioSelect<ExtArgs> | null;
    omit?: Prisma.ServicioOmit<ExtArgs> | null;
    include?: Prisma.ServicioInclude<ExtArgs> | null;
    where: Prisma.ServicioWhereUniqueInput;
};
export type ServicioFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ServicioFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ServicioFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ServicioCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServicioSelect<ExtArgs> | null;
    omit?: Prisma.ServicioOmit<ExtArgs> | null;
    include?: Prisma.ServicioInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ServicioCreateInput, Prisma.ServicioUncheckedCreateInput>;
};
export type ServicioCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ServicioCreateManyInput | Prisma.ServicioCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ServicioCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServicioSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ServicioOmit<ExtArgs> | null;
    data: Prisma.ServicioCreateManyInput | Prisma.ServicioCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ServicioIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ServicioUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServicioSelect<ExtArgs> | null;
    omit?: Prisma.ServicioOmit<ExtArgs> | null;
    include?: Prisma.ServicioInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ServicioUpdateInput, Prisma.ServicioUncheckedUpdateInput>;
    where: Prisma.ServicioWhereUniqueInput;
};
export type ServicioUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ServicioUpdateManyMutationInput, Prisma.ServicioUncheckedUpdateManyInput>;
    where?: Prisma.ServicioWhereInput;
    limit?: number;
};
export type ServicioUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServicioSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ServicioOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ServicioUpdateManyMutationInput, Prisma.ServicioUncheckedUpdateManyInput>;
    where?: Prisma.ServicioWhereInput;
    limit?: number;
    include?: Prisma.ServicioIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ServicioUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServicioSelect<ExtArgs> | null;
    omit?: Prisma.ServicioOmit<ExtArgs> | null;
    include?: Prisma.ServicioInclude<ExtArgs> | null;
    where: Prisma.ServicioWhereUniqueInput;
    create: Prisma.XOR<Prisma.ServicioCreateInput, Prisma.ServicioUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ServicioUpdateInput, Prisma.ServicioUncheckedUpdateInput>;
};
export type ServicioDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServicioSelect<ExtArgs> | null;
    omit?: Prisma.ServicioOmit<ExtArgs> | null;
    include?: Prisma.ServicioInclude<ExtArgs> | null;
    where: Prisma.ServicioWhereUniqueInput;
};
export type ServicioDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ServicioWhereInput;
    limit?: number;
};
export type Servicio$profesionalesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Servicio$citasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ServicioDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServicioSelect<ExtArgs> | null;
    omit?: Prisma.ServicioOmit<ExtArgs> | null;
    include?: Prisma.ServicioInclude<ExtArgs> | null;
};
