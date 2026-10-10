import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SuscripcionModel = runtime.Types.Result.DefaultSelection<Prisma.$SuscripcionPayload>;
export type AggregateSuscripcion = {
    _count: SuscripcionCountAggregateOutputType | null;
    _avg: SuscripcionAvgAggregateOutputType | null;
    _sum: SuscripcionSumAggregateOutputType | null;
    _min: SuscripcionMinAggregateOutputType | null;
    _max: SuscripcionMaxAggregateOutputType | null;
};
export type SuscripcionAvgAggregateOutputType = {
    id: number | null;
    negocioId: number | null;
};
export type SuscripcionSumAggregateOutputType = {
    id: number | null;
    negocioId: number | null;
};
export type SuscripcionMinAggregateOutputType = {
    id: number | null;
    plan: $Enums.Plan | null;
    estado: $Enums.EstadoSuscripcion | null;
    stripeCustomerId: string | null;
    stripeSubscriptionId: string | null;
    vigenteHasta: Date | null;
    creadoEn: Date | null;
    negocioId: number | null;
};
export type SuscripcionMaxAggregateOutputType = {
    id: number | null;
    plan: $Enums.Plan | null;
    estado: $Enums.EstadoSuscripcion | null;
    stripeCustomerId: string | null;
    stripeSubscriptionId: string | null;
    vigenteHasta: Date | null;
    creadoEn: Date | null;
    negocioId: number | null;
};
export type SuscripcionCountAggregateOutputType = {
    id: number;
    plan: number;
    estado: number;
    stripeCustomerId: number;
    stripeSubscriptionId: number;
    vigenteHasta: number;
    creadoEn: number;
    negocioId: number;
    _all: number;
};
export type SuscripcionAvgAggregateInputType = {
    id?: true;
    negocioId?: true;
};
export type SuscripcionSumAggregateInputType = {
    id?: true;
    negocioId?: true;
};
export type SuscripcionMinAggregateInputType = {
    id?: true;
    plan?: true;
    estado?: true;
    stripeCustomerId?: true;
    stripeSubscriptionId?: true;
    vigenteHasta?: true;
    creadoEn?: true;
    negocioId?: true;
};
export type SuscripcionMaxAggregateInputType = {
    id?: true;
    plan?: true;
    estado?: true;
    stripeCustomerId?: true;
    stripeSubscriptionId?: true;
    vigenteHasta?: true;
    creadoEn?: true;
    negocioId?: true;
};
export type SuscripcionCountAggregateInputType = {
    id?: true;
    plan?: true;
    estado?: true;
    stripeCustomerId?: true;
    stripeSubscriptionId?: true;
    vigenteHasta?: true;
    creadoEn?: true;
    negocioId?: true;
    _all?: true;
};
export type SuscripcionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SuscripcionWhereInput;
    orderBy?: Prisma.SuscripcionOrderByWithRelationInput | Prisma.SuscripcionOrderByWithRelationInput[];
    cursor?: Prisma.SuscripcionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SuscripcionCountAggregateInputType;
    _avg?: SuscripcionAvgAggregateInputType;
    _sum?: SuscripcionSumAggregateInputType;
    _min?: SuscripcionMinAggregateInputType;
    _max?: SuscripcionMaxAggregateInputType;
};
export type GetSuscripcionAggregateType<T extends SuscripcionAggregateArgs> = {
    [P in keyof T & keyof AggregateSuscripcion]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSuscripcion[P]> : Prisma.GetScalarType<T[P], AggregateSuscripcion[P]>;
};
export type SuscripcionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SuscripcionWhereInput;
    orderBy?: Prisma.SuscripcionOrderByWithAggregationInput | Prisma.SuscripcionOrderByWithAggregationInput[];
    by: Prisma.SuscripcionScalarFieldEnum[] | Prisma.SuscripcionScalarFieldEnum;
    having?: Prisma.SuscripcionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SuscripcionCountAggregateInputType | true;
    _avg?: SuscripcionAvgAggregateInputType;
    _sum?: SuscripcionSumAggregateInputType;
    _min?: SuscripcionMinAggregateInputType;
    _max?: SuscripcionMaxAggregateInputType;
};
export type SuscripcionGroupByOutputType = {
    id: number;
    plan: $Enums.Plan;
    estado: $Enums.EstadoSuscripcion;
    stripeCustomerId: string | null;
    stripeSubscriptionId: string | null;
    vigenteHasta: Date | null;
    creadoEn: Date;
    negocioId: number;
    _count: SuscripcionCountAggregateOutputType | null;
    _avg: SuscripcionAvgAggregateOutputType | null;
    _sum: SuscripcionSumAggregateOutputType | null;
    _min: SuscripcionMinAggregateOutputType | null;
    _max: SuscripcionMaxAggregateOutputType | null;
};
export type GetSuscripcionGroupByPayload<T extends SuscripcionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SuscripcionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SuscripcionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SuscripcionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SuscripcionGroupByOutputType[P]>;
}>>;
export type SuscripcionWhereInput = {
    AND?: Prisma.SuscripcionWhereInput | Prisma.SuscripcionWhereInput[];
    OR?: Prisma.SuscripcionWhereInput[];
    NOT?: Prisma.SuscripcionWhereInput | Prisma.SuscripcionWhereInput[];
    id?: Prisma.IntFilter<"Suscripcion"> | number;
    plan?: Prisma.EnumPlanFilter<"Suscripcion"> | $Enums.Plan;
    estado?: Prisma.EnumEstadoSuscripcionFilter<"Suscripcion"> | $Enums.EstadoSuscripcion;
    stripeCustomerId?: Prisma.StringNullableFilter<"Suscripcion"> | string | null;
    stripeSubscriptionId?: Prisma.StringNullableFilter<"Suscripcion"> | string | null;
    vigenteHasta?: Prisma.DateTimeNullableFilter<"Suscripcion"> | Date | string | null;
    creadoEn?: Prisma.DateTimeFilter<"Suscripcion"> | Date | string;
    negocioId?: Prisma.IntFilter<"Suscripcion"> | number;
    negocio?: Prisma.XOR<Prisma.NegocioScalarRelationFilter, Prisma.NegocioWhereInput>;
};
export type SuscripcionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    plan?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    stripeCustomerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    stripeSubscriptionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    vigenteHasta?: Prisma.SortOrderInput | Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    negocioId?: Prisma.SortOrder;
    negocio?: Prisma.NegocioOrderByWithRelationInput;
};
export type SuscripcionWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    negocioId?: number;
    AND?: Prisma.SuscripcionWhereInput | Prisma.SuscripcionWhereInput[];
    OR?: Prisma.SuscripcionWhereInput[];
    NOT?: Prisma.SuscripcionWhereInput | Prisma.SuscripcionWhereInput[];
    plan?: Prisma.EnumPlanFilter<"Suscripcion"> | $Enums.Plan;
    estado?: Prisma.EnumEstadoSuscripcionFilter<"Suscripcion"> | $Enums.EstadoSuscripcion;
    stripeCustomerId?: Prisma.StringNullableFilter<"Suscripcion"> | string | null;
    stripeSubscriptionId?: Prisma.StringNullableFilter<"Suscripcion"> | string | null;
    vigenteHasta?: Prisma.DateTimeNullableFilter<"Suscripcion"> | Date | string | null;
    creadoEn?: Prisma.DateTimeFilter<"Suscripcion"> | Date | string;
    negocio?: Prisma.XOR<Prisma.NegocioScalarRelationFilter, Prisma.NegocioWhereInput>;
}, "id" | "negocioId">;
export type SuscripcionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    plan?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    stripeCustomerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    stripeSubscriptionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    vigenteHasta?: Prisma.SortOrderInput | Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    negocioId?: Prisma.SortOrder;
    _count?: Prisma.SuscripcionCountOrderByAggregateInput;
    _avg?: Prisma.SuscripcionAvgOrderByAggregateInput;
    _max?: Prisma.SuscripcionMaxOrderByAggregateInput;
    _min?: Prisma.SuscripcionMinOrderByAggregateInput;
    _sum?: Prisma.SuscripcionSumOrderByAggregateInput;
};
export type SuscripcionScalarWhereWithAggregatesInput = {
    AND?: Prisma.SuscripcionScalarWhereWithAggregatesInput | Prisma.SuscripcionScalarWhereWithAggregatesInput[];
    OR?: Prisma.SuscripcionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SuscripcionScalarWhereWithAggregatesInput | Prisma.SuscripcionScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Suscripcion"> | number;
    plan?: Prisma.EnumPlanWithAggregatesFilter<"Suscripcion"> | $Enums.Plan;
    estado?: Prisma.EnumEstadoSuscripcionWithAggregatesFilter<"Suscripcion"> | $Enums.EstadoSuscripcion;
    stripeCustomerId?: Prisma.StringNullableWithAggregatesFilter<"Suscripcion"> | string | null;
    stripeSubscriptionId?: Prisma.StringNullableWithAggregatesFilter<"Suscripcion"> | string | null;
    vigenteHasta?: Prisma.DateTimeNullableWithAggregatesFilter<"Suscripcion"> | Date | string | null;
    creadoEn?: Prisma.DateTimeWithAggregatesFilter<"Suscripcion"> | Date | string;
    negocioId?: Prisma.IntWithAggregatesFilter<"Suscripcion"> | number;
};
export type SuscripcionCreateInput = {
    plan?: $Enums.Plan;
    estado?: $Enums.EstadoSuscripcion;
    stripeCustomerId?: string | null;
    stripeSubscriptionId?: string | null;
    vigenteHasta?: Date | string | null;
    creadoEn?: Date | string;
    negocio: Prisma.NegocioCreateNestedOneWithoutSuscripcionInput;
};
export type SuscripcionUncheckedCreateInput = {
    id?: number;
    plan?: $Enums.Plan;
    estado?: $Enums.EstadoSuscripcion;
    stripeCustomerId?: string | null;
    stripeSubscriptionId?: string | null;
    vigenteHasta?: Date | string | null;
    creadoEn?: Date | string;
    negocioId: number;
};
export type SuscripcionUpdateInput = {
    plan?: Prisma.EnumPlanFieldUpdateOperationsInput | $Enums.Plan;
    estado?: Prisma.EnumEstadoSuscripcionFieldUpdateOperationsInput | $Enums.EstadoSuscripcion;
    stripeCustomerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeSubscriptionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vigenteHasta?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    negocio?: Prisma.NegocioUpdateOneRequiredWithoutSuscripcionNestedInput;
};
export type SuscripcionUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    plan?: Prisma.EnumPlanFieldUpdateOperationsInput | $Enums.Plan;
    estado?: Prisma.EnumEstadoSuscripcionFieldUpdateOperationsInput | $Enums.EstadoSuscripcion;
    stripeCustomerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeSubscriptionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vigenteHasta?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    negocioId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type SuscripcionCreateManyInput = {
    id?: number;
    plan?: $Enums.Plan;
    estado?: $Enums.EstadoSuscripcion;
    stripeCustomerId?: string | null;
    stripeSubscriptionId?: string | null;
    vigenteHasta?: Date | string | null;
    creadoEn?: Date | string;
    negocioId: number;
};
export type SuscripcionUpdateManyMutationInput = {
    plan?: Prisma.EnumPlanFieldUpdateOperationsInput | $Enums.Plan;
    estado?: Prisma.EnumEstadoSuscripcionFieldUpdateOperationsInput | $Enums.EstadoSuscripcion;
    stripeCustomerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeSubscriptionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vigenteHasta?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SuscripcionUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    plan?: Prisma.EnumPlanFieldUpdateOperationsInput | $Enums.Plan;
    estado?: Prisma.EnumEstadoSuscripcionFieldUpdateOperationsInput | $Enums.EstadoSuscripcion;
    stripeCustomerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeSubscriptionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vigenteHasta?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    negocioId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type SuscripcionNullableScalarRelationFilter = {
    is?: Prisma.SuscripcionWhereInput | null;
    isNot?: Prisma.SuscripcionWhereInput | null;
};
export type SuscripcionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    plan?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    stripeCustomerId?: Prisma.SortOrder;
    stripeSubscriptionId?: Prisma.SortOrder;
    vigenteHasta?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    negocioId?: Prisma.SortOrder;
};
export type SuscripcionAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    negocioId?: Prisma.SortOrder;
};
export type SuscripcionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    plan?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    stripeCustomerId?: Prisma.SortOrder;
    stripeSubscriptionId?: Prisma.SortOrder;
    vigenteHasta?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    negocioId?: Prisma.SortOrder;
};
export type SuscripcionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    plan?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    stripeCustomerId?: Prisma.SortOrder;
    stripeSubscriptionId?: Prisma.SortOrder;
    vigenteHasta?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    negocioId?: Prisma.SortOrder;
};
export type SuscripcionSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    negocioId?: Prisma.SortOrder;
};
export type SuscripcionCreateNestedOneWithoutNegocioInput = {
    create?: Prisma.XOR<Prisma.SuscripcionCreateWithoutNegocioInput, Prisma.SuscripcionUncheckedCreateWithoutNegocioInput>;
    connectOrCreate?: Prisma.SuscripcionCreateOrConnectWithoutNegocioInput;
    connect?: Prisma.SuscripcionWhereUniqueInput;
};
export type SuscripcionUncheckedCreateNestedOneWithoutNegocioInput = {
    create?: Prisma.XOR<Prisma.SuscripcionCreateWithoutNegocioInput, Prisma.SuscripcionUncheckedCreateWithoutNegocioInput>;
    connectOrCreate?: Prisma.SuscripcionCreateOrConnectWithoutNegocioInput;
    connect?: Prisma.SuscripcionWhereUniqueInput;
};
export type SuscripcionUpdateOneWithoutNegocioNestedInput = {
    create?: Prisma.XOR<Prisma.SuscripcionCreateWithoutNegocioInput, Prisma.SuscripcionUncheckedCreateWithoutNegocioInput>;
    connectOrCreate?: Prisma.SuscripcionCreateOrConnectWithoutNegocioInput;
    upsert?: Prisma.SuscripcionUpsertWithoutNegocioInput;
    disconnect?: Prisma.SuscripcionWhereInput | boolean;
    delete?: Prisma.SuscripcionWhereInput | boolean;
    connect?: Prisma.SuscripcionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SuscripcionUpdateToOneWithWhereWithoutNegocioInput, Prisma.SuscripcionUpdateWithoutNegocioInput>, Prisma.SuscripcionUncheckedUpdateWithoutNegocioInput>;
};
export type SuscripcionUncheckedUpdateOneWithoutNegocioNestedInput = {
    create?: Prisma.XOR<Prisma.SuscripcionCreateWithoutNegocioInput, Prisma.SuscripcionUncheckedCreateWithoutNegocioInput>;
    connectOrCreate?: Prisma.SuscripcionCreateOrConnectWithoutNegocioInput;
    upsert?: Prisma.SuscripcionUpsertWithoutNegocioInput;
    disconnect?: Prisma.SuscripcionWhereInput | boolean;
    delete?: Prisma.SuscripcionWhereInput | boolean;
    connect?: Prisma.SuscripcionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SuscripcionUpdateToOneWithWhereWithoutNegocioInput, Prisma.SuscripcionUpdateWithoutNegocioInput>, Prisma.SuscripcionUncheckedUpdateWithoutNegocioInput>;
};
export type EnumPlanFieldUpdateOperationsInput = {
    set?: $Enums.Plan;
};
export type EnumEstadoSuscripcionFieldUpdateOperationsInput = {
    set?: $Enums.EstadoSuscripcion;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type SuscripcionCreateWithoutNegocioInput = {
    plan?: $Enums.Plan;
    estado?: $Enums.EstadoSuscripcion;
    stripeCustomerId?: string | null;
    stripeSubscriptionId?: string | null;
    vigenteHasta?: Date | string | null;
    creadoEn?: Date | string;
};
export type SuscripcionUncheckedCreateWithoutNegocioInput = {
    id?: number;
    plan?: $Enums.Plan;
    estado?: $Enums.EstadoSuscripcion;
    stripeCustomerId?: string | null;
    stripeSubscriptionId?: string | null;
    vigenteHasta?: Date | string | null;
    creadoEn?: Date | string;
};
export type SuscripcionCreateOrConnectWithoutNegocioInput = {
    where: Prisma.SuscripcionWhereUniqueInput;
    create: Prisma.XOR<Prisma.SuscripcionCreateWithoutNegocioInput, Prisma.SuscripcionUncheckedCreateWithoutNegocioInput>;
};
export type SuscripcionUpsertWithoutNegocioInput = {
    update: Prisma.XOR<Prisma.SuscripcionUpdateWithoutNegocioInput, Prisma.SuscripcionUncheckedUpdateWithoutNegocioInput>;
    create: Prisma.XOR<Prisma.SuscripcionCreateWithoutNegocioInput, Prisma.SuscripcionUncheckedCreateWithoutNegocioInput>;
    where?: Prisma.SuscripcionWhereInput;
};
export type SuscripcionUpdateToOneWithWhereWithoutNegocioInput = {
    where?: Prisma.SuscripcionWhereInput;
    data: Prisma.XOR<Prisma.SuscripcionUpdateWithoutNegocioInput, Prisma.SuscripcionUncheckedUpdateWithoutNegocioInput>;
};
export type SuscripcionUpdateWithoutNegocioInput = {
    plan?: Prisma.EnumPlanFieldUpdateOperationsInput | $Enums.Plan;
    estado?: Prisma.EnumEstadoSuscripcionFieldUpdateOperationsInput | $Enums.EstadoSuscripcion;
    stripeCustomerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeSubscriptionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vigenteHasta?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SuscripcionUncheckedUpdateWithoutNegocioInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    plan?: Prisma.EnumPlanFieldUpdateOperationsInput | $Enums.Plan;
    estado?: Prisma.EnumEstadoSuscripcionFieldUpdateOperationsInput | $Enums.EstadoSuscripcion;
    stripeCustomerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeSubscriptionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vigenteHasta?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SuscripcionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    plan?: boolean;
    estado?: boolean;
    stripeCustomerId?: boolean;
    stripeSubscriptionId?: boolean;
    vigenteHasta?: boolean;
    creadoEn?: boolean;
    negocioId?: boolean;
    negocio?: boolean | Prisma.NegocioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["suscripcion"]>;
export type SuscripcionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    plan?: boolean;
    estado?: boolean;
    stripeCustomerId?: boolean;
    stripeSubscriptionId?: boolean;
    vigenteHasta?: boolean;
    creadoEn?: boolean;
    negocioId?: boolean;
    negocio?: boolean | Prisma.NegocioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["suscripcion"]>;
export type SuscripcionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    plan?: boolean;
    estado?: boolean;
    stripeCustomerId?: boolean;
    stripeSubscriptionId?: boolean;
    vigenteHasta?: boolean;
    creadoEn?: boolean;
    negocioId?: boolean;
    negocio?: boolean | Prisma.NegocioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["suscripcion"]>;
export type SuscripcionSelectScalar = {
    id?: boolean;
    plan?: boolean;
    estado?: boolean;
    stripeCustomerId?: boolean;
    stripeSubscriptionId?: boolean;
    vigenteHasta?: boolean;
    creadoEn?: boolean;
    negocioId?: boolean;
};
export type SuscripcionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "plan" | "estado" | "stripeCustomerId" | "stripeSubscriptionId" | "vigenteHasta" | "creadoEn" | "negocioId", ExtArgs["result"]["suscripcion"]>;
export type SuscripcionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    negocio?: boolean | Prisma.NegocioDefaultArgs<ExtArgs>;
};
export type SuscripcionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    negocio?: boolean | Prisma.NegocioDefaultArgs<ExtArgs>;
};
export type SuscripcionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    negocio?: boolean | Prisma.NegocioDefaultArgs<ExtArgs>;
};
export type $SuscripcionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Suscripcion";
    objects: {
        negocio: Prisma.$NegocioPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        plan: $Enums.Plan;
        estado: $Enums.EstadoSuscripcion;
        stripeCustomerId: string | null;
        stripeSubscriptionId: string | null;
        vigenteHasta: Date | null;
        creadoEn: Date;
        negocioId: number;
    }, ExtArgs["result"]["suscripcion"]>;
    composites: {};
};
export type SuscripcionGetPayload<S extends boolean | null | undefined | SuscripcionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SuscripcionPayload, S>;
export type SuscripcionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SuscripcionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SuscripcionCountAggregateInputType | true;
};
export interface SuscripcionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Suscripcion'];
        meta: {
            name: 'Suscripcion';
        };
    };
    findUnique<T extends SuscripcionFindUniqueArgs>(args: Prisma.SelectSubset<T, SuscripcionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SuscripcionClient<runtime.Types.Result.GetResult<Prisma.$SuscripcionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SuscripcionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SuscripcionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SuscripcionClient<runtime.Types.Result.GetResult<Prisma.$SuscripcionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SuscripcionFindFirstArgs>(args?: Prisma.SelectSubset<T, SuscripcionFindFirstArgs<ExtArgs>>): Prisma.Prisma__SuscripcionClient<runtime.Types.Result.GetResult<Prisma.$SuscripcionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SuscripcionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SuscripcionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SuscripcionClient<runtime.Types.Result.GetResult<Prisma.$SuscripcionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SuscripcionFindManyArgs>(args?: Prisma.SelectSubset<T, SuscripcionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SuscripcionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SuscripcionCreateArgs>(args: Prisma.SelectSubset<T, SuscripcionCreateArgs<ExtArgs>>): Prisma.Prisma__SuscripcionClient<runtime.Types.Result.GetResult<Prisma.$SuscripcionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SuscripcionCreateManyArgs>(args?: Prisma.SelectSubset<T, SuscripcionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SuscripcionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SuscripcionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SuscripcionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SuscripcionDeleteArgs>(args: Prisma.SelectSubset<T, SuscripcionDeleteArgs<ExtArgs>>): Prisma.Prisma__SuscripcionClient<runtime.Types.Result.GetResult<Prisma.$SuscripcionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SuscripcionUpdateArgs>(args: Prisma.SelectSubset<T, SuscripcionUpdateArgs<ExtArgs>>): Prisma.Prisma__SuscripcionClient<runtime.Types.Result.GetResult<Prisma.$SuscripcionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SuscripcionDeleteManyArgs>(args?: Prisma.SelectSubset<T, SuscripcionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SuscripcionUpdateManyArgs>(args: Prisma.SelectSubset<T, SuscripcionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SuscripcionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SuscripcionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SuscripcionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SuscripcionUpsertArgs>(args: Prisma.SelectSubset<T, SuscripcionUpsertArgs<ExtArgs>>): Prisma.Prisma__SuscripcionClient<runtime.Types.Result.GetResult<Prisma.$SuscripcionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SuscripcionCountArgs>(args?: Prisma.Subset<T, SuscripcionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SuscripcionCountAggregateOutputType> : number>;
    aggregate<T extends SuscripcionAggregateArgs>(args: Prisma.Subset<T, SuscripcionAggregateArgs>): Prisma.PrismaPromise<GetSuscripcionAggregateType<T>>;
    groupBy<T extends SuscripcionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SuscripcionGroupByArgs['orderBy'];
    } : {
        orderBy?: SuscripcionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SuscripcionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuscripcionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SuscripcionFieldRefs;
}
export interface Prisma__SuscripcionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    negocio<T extends Prisma.NegocioDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.NegocioDefaultArgs<ExtArgs>>): Prisma.Prisma__NegocioClient<runtime.Types.Result.GetResult<Prisma.$NegocioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SuscripcionFieldRefs {
    readonly id: Prisma.FieldRef<"Suscripcion", 'Int'>;
    readonly plan: Prisma.FieldRef<"Suscripcion", 'Plan'>;
    readonly estado: Prisma.FieldRef<"Suscripcion", 'EstadoSuscripcion'>;
    readonly stripeCustomerId: Prisma.FieldRef<"Suscripcion", 'String'>;
    readonly stripeSubscriptionId: Prisma.FieldRef<"Suscripcion", 'String'>;
    readonly vigenteHasta: Prisma.FieldRef<"Suscripcion", 'DateTime'>;
    readonly creadoEn: Prisma.FieldRef<"Suscripcion", 'DateTime'>;
    readonly negocioId: Prisma.FieldRef<"Suscripcion", 'Int'>;
}
export type SuscripcionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SuscripcionSelect<ExtArgs> | null;
    omit?: Prisma.SuscripcionOmit<ExtArgs> | null;
    include?: Prisma.SuscripcionInclude<ExtArgs> | null;
    where: Prisma.SuscripcionWhereUniqueInput;
};
export type SuscripcionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SuscripcionSelect<ExtArgs> | null;
    omit?: Prisma.SuscripcionOmit<ExtArgs> | null;
    include?: Prisma.SuscripcionInclude<ExtArgs> | null;
    where: Prisma.SuscripcionWhereUniqueInput;
};
export type SuscripcionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SuscripcionSelect<ExtArgs> | null;
    omit?: Prisma.SuscripcionOmit<ExtArgs> | null;
    include?: Prisma.SuscripcionInclude<ExtArgs> | null;
    where?: Prisma.SuscripcionWhereInput;
    orderBy?: Prisma.SuscripcionOrderByWithRelationInput | Prisma.SuscripcionOrderByWithRelationInput[];
    cursor?: Prisma.SuscripcionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SuscripcionScalarFieldEnum | Prisma.SuscripcionScalarFieldEnum[];
};
export type SuscripcionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SuscripcionSelect<ExtArgs> | null;
    omit?: Prisma.SuscripcionOmit<ExtArgs> | null;
    include?: Prisma.SuscripcionInclude<ExtArgs> | null;
    where?: Prisma.SuscripcionWhereInput;
    orderBy?: Prisma.SuscripcionOrderByWithRelationInput | Prisma.SuscripcionOrderByWithRelationInput[];
    cursor?: Prisma.SuscripcionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SuscripcionScalarFieldEnum | Prisma.SuscripcionScalarFieldEnum[];
};
export type SuscripcionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SuscripcionSelect<ExtArgs> | null;
    omit?: Prisma.SuscripcionOmit<ExtArgs> | null;
    include?: Prisma.SuscripcionInclude<ExtArgs> | null;
    where?: Prisma.SuscripcionWhereInput;
    orderBy?: Prisma.SuscripcionOrderByWithRelationInput | Prisma.SuscripcionOrderByWithRelationInput[];
    cursor?: Prisma.SuscripcionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SuscripcionScalarFieldEnum | Prisma.SuscripcionScalarFieldEnum[];
};
export type SuscripcionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SuscripcionSelect<ExtArgs> | null;
    omit?: Prisma.SuscripcionOmit<ExtArgs> | null;
    include?: Prisma.SuscripcionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SuscripcionCreateInput, Prisma.SuscripcionUncheckedCreateInput>;
};
export type SuscripcionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SuscripcionCreateManyInput | Prisma.SuscripcionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SuscripcionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SuscripcionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SuscripcionOmit<ExtArgs> | null;
    data: Prisma.SuscripcionCreateManyInput | Prisma.SuscripcionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SuscripcionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SuscripcionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SuscripcionSelect<ExtArgs> | null;
    omit?: Prisma.SuscripcionOmit<ExtArgs> | null;
    include?: Prisma.SuscripcionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SuscripcionUpdateInput, Prisma.SuscripcionUncheckedUpdateInput>;
    where: Prisma.SuscripcionWhereUniqueInput;
};
export type SuscripcionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SuscripcionUpdateManyMutationInput, Prisma.SuscripcionUncheckedUpdateManyInput>;
    where?: Prisma.SuscripcionWhereInput;
    limit?: number;
};
export type SuscripcionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SuscripcionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SuscripcionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SuscripcionUpdateManyMutationInput, Prisma.SuscripcionUncheckedUpdateManyInput>;
    where?: Prisma.SuscripcionWhereInput;
    limit?: number;
    include?: Prisma.SuscripcionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SuscripcionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SuscripcionSelect<ExtArgs> | null;
    omit?: Prisma.SuscripcionOmit<ExtArgs> | null;
    include?: Prisma.SuscripcionInclude<ExtArgs> | null;
    where: Prisma.SuscripcionWhereUniqueInput;
    create: Prisma.XOR<Prisma.SuscripcionCreateInput, Prisma.SuscripcionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SuscripcionUpdateInput, Prisma.SuscripcionUncheckedUpdateInput>;
};
export type SuscripcionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SuscripcionSelect<ExtArgs> | null;
    omit?: Prisma.SuscripcionOmit<ExtArgs> | null;
    include?: Prisma.SuscripcionInclude<ExtArgs> | null;
    where: Prisma.SuscripcionWhereUniqueInput;
};
export type SuscripcionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SuscripcionWhereInput;
    limit?: number;
};
export type SuscripcionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SuscripcionSelect<ExtArgs> | null;
    omit?: Prisma.SuscripcionOmit<ExtArgs> | null;
    include?: Prisma.SuscripcionInclude<ExtArgs> | null;
};
