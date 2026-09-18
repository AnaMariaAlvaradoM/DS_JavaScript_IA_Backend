import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CategoriaModel = runtime.Types.Result.DefaultSelection<Prisma.$CategoriaPayload>;
export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null;
    _avg: CategoriaAvgAggregateOutputType | null;
    _sum: CategoriaSumAggregateOutputType | null;
    _min: CategoriaMinAggregateOutputType | null;
    _max: CategoriaMaxAggregateOutputType | null;
};
export type CategoriaAvgAggregateOutputType = {
    id: number | null;
};
export type CategoriaSumAggregateOutputType = {
    id: number | null;
};
export type CategoriaMinAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    creadoEn: Date | null;
};
export type CategoriaMaxAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    creadoEn: Date | null;
};
export type CategoriaCountAggregateOutputType = {
    id: number;
    nombre: number;
    creadoEn: number;
    _all: number;
};
export type CategoriaAvgAggregateInputType = {
    id?: true;
};
export type CategoriaSumAggregateInputType = {
    id?: true;
};
export type CategoriaMinAggregateInputType = {
    id?: true;
    nombre?: true;
    creadoEn?: true;
};
export type CategoriaMaxAggregateInputType = {
    id?: true;
    nombre?: true;
    creadoEn?: true;
};
export type CategoriaCountAggregateInputType = {
    id?: true;
    nombre?: true;
    creadoEn?: true;
    _all?: true;
};
export type CategoriaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CategoriaWhereInput;
    orderBy?: Prisma.CategoriaOrderByWithRelationInput | Prisma.CategoriaOrderByWithRelationInput[];
    cursor?: Prisma.CategoriaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CategoriaCountAggregateInputType;
    _avg?: CategoriaAvgAggregateInputType;
    _sum?: CategoriaSumAggregateInputType;
    _min?: CategoriaMinAggregateInputType;
    _max?: CategoriaMaxAggregateInputType;
};
export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
    [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCategoria[P]> : Prisma.GetScalarType<T[P], AggregateCategoria[P]>;
};
export type CategoriaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CategoriaWhereInput;
    orderBy?: Prisma.CategoriaOrderByWithAggregationInput | Prisma.CategoriaOrderByWithAggregationInput[];
    by: Prisma.CategoriaScalarFieldEnum[] | Prisma.CategoriaScalarFieldEnum;
    having?: Prisma.CategoriaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CategoriaCountAggregateInputType | true;
    _avg?: CategoriaAvgAggregateInputType;
    _sum?: CategoriaSumAggregateInputType;
    _min?: CategoriaMinAggregateInputType;
    _max?: CategoriaMaxAggregateInputType;
};
export type CategoriaGroupByOutputType = {
    id: number;
    nombre: string;
    creadoEn: Date;
    _count: CategoriaCountAggregateOutputType | null;
    _avg: CategoriaAvgAggregateOutputType | null;
    _sum: CategoriaSumAggregateOutputType | null;
    _min: CategoriaMinAggregateOutputType | null;
    _max: CategoriaMaxAggregateOutputType | null;
};
export type GetCategoriaGroupByPayload<T extends CategoriaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CategoriaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CategoriaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CategoriaGroupByOutputType[P]>;
}>>;
export type CategoriaWhereInput = {
    AND?: Prisma.CategoriaWhereInput | Prisma.CategoriaWhereInput[];
    OR?: Prisma.CategoriaWhereInput[];
    NOT?: Prisma.CategoriaWhereInput | Prisma.CategoriaWhereInput[];
    id?: Prisma.IntFilter<"Categoria"> | number;
    nombre?: Prisma.StringFilter<"Categoria"> | string;
    creadoEn?: Prisma.DateTimeFilter<"Categoria"> | Date | string;
    transacciones?: Prisma.TransaccionListRelationFilter;
};
export type CategoriaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    transacciones?: Prisma.TransaccionOrderByRelationAggregateInput;
};
export type CategoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    nombre?: string;
    AND?: Prisma.CategoriaWhereInput | Prisma.CategoriaWhereInput[];
    OR?: Prisma.CategoriaWhereInput[];
    NOT?: Prisma.CategoriaWhereInput | Prisma.CategoriaWhereInput[];
    creadoEn?: Prisma.DateTimeFilter<"Categoria"> | Date | string;
    transacciones?: Prisma.TransaccionListRelationFilter;
}, "id" | "nombre">;
export type CategoriaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    _count?: Prisma.CategoriaCountOrderByAggregateInput;
    _avg?: Prisma.CategoriaAvgOrderByAggregateInput;
    _max?: Prisma.CategoriaMaxOrderByAggregateInput;
    _min?: Prisma.CategoriaMinOrderByAggregateInput;
    _sum?: Prisma.CategoriaSumOrderByAggregateInput;
};
export type CategoriaScalarWhereWithAggregatesInput = {
    AND?: Prisma.CategoriaScalarWhereWithAggregatesInput | Prisma.CategoriaScalarWhereWithAggregatesInput[];
    OR?: Prisma.CategoriaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CategoriaScalarWhereWithAggregatesInput | Prisma.CategoriaScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Categoria"> | number;
    nombre?: Prisma.StringWithAggregatesFilter<"Categoria"> | string;
    creadoEn?: Prisma.DateTimeWithAggregatesFilter<"Categoria"> | Date | string;
};
export type CategoriaCreateInput = {
    nombre: string;
    creadoEn?: Date | string;
    transacciones?: Prisma.TransaccionCreateNestedManyWithoutCategoriaInput;
};
export type CategoriaUncheckedCreateInput = {
    id?: number;
    nombre: string;
    creadoEn?: Date | string;
    transacciones?: Prisma.TransaccionUncheckedCreateNestedManyWithoutCategoriaInput;
};
export type CategoriaUpdateInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transacciones?: Prisma.TransaccionUpdateManyWithoutCategoriaNestedInput;
};
export type CategoriaUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transacciones?: Prisma.TransaccionUncheckedUpdateManyWithoutCategoriaNestedInput;
};
export type CategoriaCreateManyInput = {
    id?: number;
    nombre: string;
    creadoEn?: Date | string;
};
export type CategoriaUpdateManyMutationInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CategoriaUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CategoriaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
};
export type CategoriaAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type CategoriaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
};
export type CategoriaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
};
export type CategoriaSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type CategoriaScalarRelationFilter = {
    is?: Prisma.CategoriaWhereInput;
    isNot?: Prisma.CategoriaWhereInput;
};
export type CategoriaCreateNestedOneWithoutTransaccionesInput = {
    create?: Prisma.XOR<Prisma.CategoriaCreateWithoutTransaccionesInput, Prisma.CategoriaUncheckedCreateWithoutTransaccionesInput>;
    connectOrCreate?: Prisma.CategoriaCreateOrConnectWithoutTransaccionesInput;
    connect?: Prisma.CategoriaWhereUniqueInput;
};
export type CategoriaUpdateOneRequiredWithoutTransaccionesNestedInput = {
    create?: Prisma.XOR<Prisma.CategoriaCreateWithoutTransaccionesInput, Prisma.CategoriaUncheckedCreateWithoutTransaccionesInput>;
    connectOrCreate?: Prisma.CategoriaCreateOrConnectWithoutTransaccionesInput;
    upsert?: Prisma.CategoriaUpsertWithoutTransaccionesInput;
    connect?: Prisma.CategoriaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CategoriaUpdateToOneWithWhereWithoutTransaccionesInput, Prisma.CategoriaUpdateWithoutTransaccionesInput>, Prisma.CategoriaUncheckedUpdateWithoutTransaccionesInput>;
};
export type CategoriaCreateWithoutTransaccionesInput = {
    nombre: string;
    creadoEn?: Date | string;
};
export type CategoriaUncheckedCreateWithoutTransaccionesInput = {
    id?: number;
    nombre: string;
    creadoEn?: Date | string;
};
export type CategoriaCreateOrConnectWithoutTransaccionesInput = {
    where: Prisma.CategoriaWhereUniqueInput;
    create: Prisma.XOR<Prisma.CategoriaCreateWithoutTransaccionesInput, Prisma.CategoriaUncheckedCreateWithoutTransaccionesInput>;
};
export type CategoriaUpsertWithoutTransaccionesInput = {
    update: Prisma.XOR<Prisma.CategoriaUpdateWithoutTransaccionesInput, Prisma.CategoriaUncheckedUpdateWithoutTransaccionesInput>;
    create: Prisma.XOR<Prisma.CategoriaCreateWithoutTransaccionesInput, Prisma.CategoriaUncheckedCreateWithoutTransaccionesInput>;
    where?: Prisma.CategoriaWhereInput;
};
export type CategoriaUpdateToOneWithWhereWithoutTransaccionesInput = {
    where?: Prisma.CategoriaWhereInput;
    data: Prisma.XOR<Prisma.CategoriaUpdateWithoutTransaccionesInput, Prisma.CategoriaUncheckedUpdateWithoutTransaccionesInput>;
};
export type CategoriaUpdateWithoutTransaccionesInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CategoriaUncheckedUpdateWithoutTransaccionesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CategoriaCountOutputType = {
    transacciones: number;
};
export type CategoriaCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    transacciones?: boolean | CategoriaCountOutputTypeCountTransaccionesArgs;
};
export type CategoriaCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriaCountOutputTypeSelect<ExtArgs> | null;
};
export type CategoriaCountOutputTypeCountTransaccionesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TransaccionWhereInput;
};
export type CategoriaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    creadoEn?: boolean;
    transacciones?: boolean | Prisma.Categoria$transaccionesArgs<ExtArgs>;
    _count?: boolean | Prisma.CategoriaCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["categoria"]>;
export type CategoriaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    creadoEn?: boolean;
}, ExtArgs["result"]["categoria"]>;
export type CategoriaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    creadoEn?: boolean;
}, ExtArgs["result"]["categoria"]>;
export type CategoriaSelectScalar = {
    id?: boolean;
    nombre?: boolean;
    creadoEn?: boolean;
};
export type CategoriaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre" | "creadoEn", ExtArgs["result"]["categoria"]>;
export type CategoriaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    transacciones?: boolean | Prisma.Categoria$transaccionesArgs<ExtArgs>;
    _count?: boolean | Prisma.CategoriaCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CategoriaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type CategoriaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $CategoriaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Categoria";
    objects: {
        transacciones: Prisma.$TransaccionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nombre: string;
        creadoEn: Date;
    }, ExtArgs["result"]["categoria"]>;
    composites: {};
};
export type CategoriaGetPayload<S extends boolean | null | undefined | CategoriaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CategoriaPayload, S>;
export type CategoriaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CategoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CategoriaCountAggregateInputType | true;
};
export interface CategoriaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Categoria'];
        meta: {
            name: 'Categoria';
        };
    };
    findUnique<T extends CategoriaFindUniqueArgs>(args: Prisma.SelectSubset<T, CategoriaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CategoriaClient<runtime.Types.Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CategoriaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CategoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CategoriaClient<runtime.Types.Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CategoriaFindFirstArgs>(args?: Prisma.SelectSubset<T, CategoriaFindFirstArgs<ExtArgs>>): Prisma.Prisma__CategoriaClient<runtime.Types.Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CategoriaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CategoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CategoriaClient<runtime.Types.Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CategoriaFindManyArgs>(args?: Prisma.SelectSubset<T, CategoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CategoriaCreateArgs>(args: Prisma.SelectSubset<T, CategoriaCreateArgs<ExtArgs>>): Prisma.Prisma__CategoriaClient<runtime.Types.Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CategoriaCreateManyArgs>(args?: Prisma.SelectSubset<T, CategoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CategoriaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CategoriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CategoriaDeleteArgs>(args: Prisma.SelectSubset<T, CategoriaDeleteArgs<ExtArgs>>): Prisma.Prisma__CategoriaClient<runtime.Types.Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CategoriaUpdateArgs>(args: Prisma.SelectSubset<T, CategoriaUpdateArgs<ExtArgs>>): Prisma.Prisma__CategoriaClient<runtime.Types.Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CategoriaDeleteManyArgs>(args?: Prisma.SelectSubset<T, CategoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CategoriaUpdateManyArgs>(args: Prisma.SelectSubset<T, CategoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CategoriaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CategoriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CategoriaUpsertArgs>(args: Prisma.SelectSubset<T, CategoriaUpsertArgs<ExtArgs>>): Prisma.Prisma__CategoriaClient<runtime.Types.Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CategoriaCountArgs>(args?: Prisma.Subset<T, CategoriaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CategoriaCountAggregateOutputType> : number>;
    aggregate<T extends CategoriaAggregateArgs>(args: Prisma.Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>;
    groupBy<T extends CategoriaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CategoriaGroupByArgs['orderBy'];
    } : {
        orderBy?: CategoriaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CategoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CategoriaFieldRefs;
}
export interface Prisma__CategoriaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    transacciones<T extends Prisma.Categoria$transaccionesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Categoria$transaccionesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TransaccionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CategoriaFieldRefs {
    readonly id: Prisma.FieldRef<"Categoria", 'Int'>;
    readonly nombre: Prisma.FieldRef<"Categoria", 'String'>;
    readonly creadoEn: Prisma.FieldRef<"Categoria", 'DateTime'>;
}
export type CategoriaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriaSelect<ExtArgs> | null;
    omit?: Prisma.CategoriaOmit<ExtArgs> | null;
    include?: Prisma.CategoriaInclude<ExtArgs> | null;
    where: Prisma.CategoriaWhereUniqueInput;
};
export type CategoriaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriaSelect<ExtArgs> | null;
    omit?: Prisma.CategoriaOmit<ExtArgs> | null;
    include?: Prisma.CategoriaInclude<ExtArgs> | null;
    where: Prisma.CategoriaWhereUniqueInput;
};
export type CategoriaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriaSelect<ExtArgs> | null;
    omit?: Prisma.CategoriaOmit<ExtArgs> | null;
    include?: Prisma.CategoriaInclude<ExtArgs> | null;
    where?: Prisma.CategoriaWhereInput;
    orderBy?: Prisma.CategoriaOrderByWithRelationInput | Prisma.CategoriaOrderByWithRelationInput[];
    cursor?: Prisma.CategoriaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CategoriaScalarFieldEnum | Prisma.CategoriaScalarFieldEnum[];
};
export type CategoriaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriaSelect<ExtArgs> | null;
    omit?: Prisma.CategoriaOmit<ExtArgs> | null;
    include?: Prisma.CategoriaInclude<ExtArgs> | null;
    where?: Prisma.CategoriaWhereInput;
    orderBy?: Prisma.CategoriaOrderByWithRelationInput | Prisma.CategoriaOrderByWithRelationInput[];
    cursor?: Prisma.CategoriaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CategoriaScalarFieldEnum | Prisma.CategoriaScalarFieldEnum[];
};
export type CategoriaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriaSelect<ExtArgs> | null;
    omit?: Prisma.CategoriaOmit<ExtArgs> | null;
    include?: Prisma.CategoriaInclude<ExtArgs> | null;
    where?: Prisma.CategoriaWhereInput;
    orderBy?: Prisma.CategoriaOrderByWithRelationInput | Prisma.CategoriaOrderByWithRelationInput[];
    cursor?: Prisma.CategoriaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CategoriaScalarFieldEnum | Prisma.CategoriaScalarFieldEnum[];
};
export type CategoriaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriaSelect<ExtArgs> | null;
    omit?: Prisma.CategoriaOmit<ExtArgs> | null;
    include?: Prisma.CategoriaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CategoriaCreateInput, Prisma.CategoriaUncheckedCreateInput>;
};
export type CategoriaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CategoriaCreateManyInput | Prisma.CategoriaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CategoriaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CategoriaOmit<ExtArgs> | null;
    data: Prisma.CategoriaCreateManyInput | Prisma.CategoriaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CategoriaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriaSelect<ExtArgs> | null;
    omit?: Prisma.CategoriaOmit<ExtArgs> | null;
    include?: Prisma.CategoriaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CategoriaUpdateInput, Prisma.CategoriaUncheckedUpdateInput>;
    where: Prisma.CategoriaWhereUniqueInput;
};
export type CategoriaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CategoriaUpdateManyMutationInput, Prisma.CategoriaUncheckedUpdateManyInput>;
    where?: Prisma.CategoriaWhereInput;
    limit?: number;
};
export type CategoriaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CategoriaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CategoriaUpdateManyMutationInput, Prisma.CategoriaUncheckedUpdateManyInput>;
    where?: Prisma.CategoriaWhereInput;
    limit?: number;
};
export type CategoriaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriaSelect<ExtArgs> | null;
    omit?: Prisma.CategoriaOmit<ExtArgs> | null;
    include?: Prisma.CategoriaInclude<ExtArgs> | null;
    where: Prisma.CategoriaWhereUniqueInput;
    create: Prisma.XOR<Prisma.CategoriaCreateInput, Prisma.CategoriaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CategoriaUpdateInput, Prisma.CategoriaUncheckedUpdateInput>;
};
export type CategoriaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriaSelect<ExtArgs> | null;
    omit?: Prisma.CategoriaOmit<ExtArgs> | null;
    include?: Prisma.CategoriaInclude<ExtArgs> | null;
    where: Prisma.CategoriaWhereUniqueInput;
};
export type CategoriaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CategoriaWhereInput;
    limit?: number;
};
export type Categoria$transaccionesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CategoriaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriaSelect<ExtArgs> | null;
    omit?: Prisma.CategoriaOmit<ExtArgs> | null;
    include?: Prisma.CategoriaInclude<ExtArgs> | null;
};
