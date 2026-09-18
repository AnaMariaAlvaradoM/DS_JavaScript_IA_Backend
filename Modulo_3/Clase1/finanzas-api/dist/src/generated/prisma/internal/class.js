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
exports.getPrismaClientClass = getPrismaClientClass;
const runtime = __importStar(require("@prisma/client/runtime/client"));
const config = {
    "previewFeatures": [],
    "clientVersion": "7.9.1",
    "engineVersion": "e922089b7d7502aff4249d5da3420f6fa55fc6ad",
    "activeProvider": "postgresql",
    "inlineSchema": "generator client {\n  provider     = \"prisma-client\"\n  output       = \"../src/generated/prisma\"\n  moduleFormat = \"cjs\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n}\n\nenum TipoTransaccion {\n  INGRESO\n  GASTO\n}\n\nmodel Usuario {\n  id            Int           @id @default(autoincrement())\n  nombre        String\n  email         String        @unique\n  password      String\n  creadoEn      DateTime      @default(now())\n  transacciones Transaccion[]\n\n  @@map(\"usuarios\")\n}\n\nmodel Categoria {\n  id            Int           @id @default(autoincrement())\n  nombre        String        @unique\n  creadoEn      DateTime      @default(now())\n  transacciones Transaccion[]\n\n  @@map(\"categorias\")\n}\n\nmodel Transaccion {\n  id          Int             @id @default(autoincrement())\n  descripcion String\n  monto       Decimal         @db.Decimal(12, 2)\n  tipo        TipoTransaccion\n  fecha       DateTime        @default(now())\n  categoriaId Int\n  usuarioId   Int\n  categoria   Categoria       @relation(fields: [categoriaId], references: [id])\n  usuario     Usuario         @relation(fields: [usuarioId], references: [id])\n\n  @@index([categoriaId])\n  @@index([usuarioId])\n  @@map(\"transacciones\")\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    },
    "parameterizationSchema": {
        "strings": [],
        "graph": ""
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"Usuario\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"nombre\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"password\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"creadoEn\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"transacciones\",\"kind\":\"object\",\"type\":\"Transaccion\",\"relationName\":\"TransaccionToUsuario\"}],\"dbName\":\"usuarios\"},\"Categoria\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"nombre\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"creadoEn\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"transacciones\",\"kind\":\"object\",\"type\":\"Transaccion\",\"relationName\":\"CategoriaToTransaccion\"}],\"dbName\":\"categorias\"},\"Transaccion\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"descripcion\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"monto\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"tipo\",\"kind\":\"enum\",\"type\":\"TipoTransaccion\"},{\"name\":\"fecha\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"categoriaId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"usuarioId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"categoria\",\"kind\":\"object\",\"type\":\"Categoria\",\"relationName\":\"CategoriaToTransaccion\"},{\"name\":\"usuario\",\"kind\":\"object\",\"type\":\"Usuario\",\"relationName\":\"TransaccionToUsuario\"}],\"dbName\":\"transacciones\"}},\"enums\":{},\"types\":{}}");
config.parameterizationSchema = {
    strings: JSON.parse("[\"where\",\"orderBy\",\"cursor\",\"transacciones\",\"_count\",\"categoria\",\"usuario\",\"Usuario.findUnique\",\"Usuario.findUniqueOrThrow\",\"Usuario.findFirst\",\"Usuario.findFirstOrThrow\",\"Usuario.findMany\",\"data\",\"Usuario.createOne\",\"Usuario.createMany\",\"Usuario.createManyAndReturn\",\"Usuario.updateOne\",\"Usuario.updateMany\",\"Usuario.updateManyAndReturn\",\"create\",\"update\",\"Usuario.upsertOne\",\"Usuario.deleteOne\",\"Usuario.deleteMany\",\"having\",\"_avg\",\"_sum\",\"_min\",\"_max\",\"Usuario.groupBy\",\"Usuario.aggregate\",\"Categoria.findUnique\",\"Categoria.findUniqueOrThrow\",\"Categoria.findFirst\",\"Categoria.findFirstOrThrow\",\"Categoria.findMany\",\"Categoria.createOne\",\"Categoria.createMany\",\"Categoria.createManyAndReturn\",\"Categoria.updateOne\",\"Categoria.updateMany\",\"Categoria.updateManyAndReturn\",\"Categoria.upsertOne\",\"Categoria.deleteOne\",\"Categoria.deleteMany\",\"Categoria.groupBy\",\"Categoria.aggregate\",\"Transaccion.findUnique\",\"Transaccion.findUniqueOrThrow\",\"Transaccion.findFirst\",\"Transaccion.findFirstOrThrow\",\"Transaccion.findMany\",\"Transaccion.createOne\",\"Transaccion.createMany\",\"Transaccion.createManyAndReturn\",\"Transaccion.updateOne\",\"Transaccion.updateMany\",\"Transaccion.updateManyAndReturn\",\"Transaccion.upsertOne\",\"Transaccion.deleteOne\",\"Transaccion.deleteMany\",\"Transaccion.groupBy\",\"Transaccion.aggregate\",\"AND\",\"OR\",\"NOT\",\"id\",\"descripcion\",\"monto\",\"TipoTransaccion\",\"tipo\",\"fecha\",\"categoriaId\",\"usuarioId\",\"equals\",\"in\",\"notIn\",\"lt\",\"lte\",\"gt\",\"gte\",\"not\",\"contains\",\"startsWith\",\"endsWith\",\"nombre\",\"creadoEn\",\"every\",\"some\",\"none\",\"email\",\"password\",\"is\",\"isNot\",\"connectOrCreate\",\"upsert\",\"createMany\",\"set\",\"disconnect\",\"delete\",\"connect\",\"updateMany\",\"deleteMany\",\"increment\",\"decrement\",\"multiply\",\"divide\"]"),
    graph: "rQEhMAkDAABmACA_AABoADBAAAALABBBAABoADBCAgAAAAFVAQBkACFWQABlACFaAQAAAAFbAQBkACEBAAAAAQAgDAUAAGwAIAYAAG0AID8AAGkAMEAAAAMAEEEAAGkAMEICAGMAIUMBAGQAIUQQAGoAIUYAAGtGIkdAAGUAIUgCAGMAIUkCAGMAIQIFAACgAQAgBgAAoQEAIAwFAABsACAGAABtACA_AABpADBAAAADABBBAABpADBCAgAAAAFDAQBkACFEEABqACFGAABrRiJHQABlACFIAgBjACFJAgBjACEDAAAAAwAgAQAABAAwAgAABQAgAwAAAAMAIAEAAAQAMAIAAAUAIAEAAAADACABAAAAAwAgAQAAAAEAIAkDAABmACA_AABoADBAAAALABBBAABoADBCAgBjACFVAQBkACFWQABlACFaAQBkACFbAQBkACEBAwAAjwEAIAMAAAALACABAAAMADACAAABACADAAAACwAgAQAADAAwAgAAAQAgAwAAAAsAIAEAAAwAMAIAAAEAIAYDAACfAQAgQgIAAAABVQEAAAABVkAAAAABWgEAAAABWwEAAAABAQwAABAAIAVCAgAAAAFVAQAAAAFWQAAAAAFaAQAAAAFbAQAAAAEBDAAAEgAwAQwAABIAMAYDAACVAQAgQgIAdwAhVQEAcwAhVkAAdgAhWgEAcwAhWwEAcwAhAgAAAAEAIAwAABUAIAVCAgB3ACFVAQBzACFWQAB2ACFaAQBzACFbAQBzACECAAAACwAgDAAAFwAgAgAAAAsAIAwAABcAIAMAAAABACATAAAQACAUAAAVACABAAAAAQAgAQAAAAsAIAUEAACQAQAgGQAAkQEAIBoAAJQBACAbAACTAQAgHAAAkgEAIAg_AABnADBAAAAeABBBAABnADBCAgBRACFVAQBSACFWQABVACFaAQBSACFbAQBSACEDAAAACwAgAQAAHQAwGAAAHgAgAwAAAAsAIAEAAAwAMAIAAAEAIAcDAABmACA_AABiADBAAAAkABBBAABiADBCAgAAAAFVAQAAAAFWQABlACEBAAAAIQAgAQAAACEAIAcDAABmACA_AABiADBAAAAkABBBAABiADBCAgBjACFVAQBkACFWQABlACEBAwAAjwEAIAMAAAAkACABAAAlADACAAAhACADAAAAJAAgAQAAJQAwAgAAIQAgAwAAACQAIAEAACUAMAIAACEAIAQDAACOAQAgQgIAAAABVQEAAAABVkAAAAABAQwAACkAIANCAgAAAAFVAQAAAAFWQAAAAAEBDAAAKwAwAQwAACsAMAQDAACBAQAgQgIAdwAhVQEAcwAhVkAAdgAhAgAAACEAIAwAAC4AIANCAgB3ACFVAQBzACFWQAB2ACECAAAAJAAgDAAAMAAgAgAAACQAIAwAADAAIAMAAAAhACATAAApACAUAAAuACABAAAAIQAgAQAAACQAIAUEAAB8ACAZAAB9ACAaAACAAQAgGwAAfwAgHAAAfgAgBj8AAGEAMEAAADcAEEEAAGEAMEICAFEAIVUBAFIAIVZAAFUAIQMAAAAkACABAAA2ADAYAAA3ACADAAAAJAAgAQAAJQAwAgAAIQAgAQAAAAUAIAEAAAAFACADAAAAAwAgAQAABAAwAgAABQAgAwAAAAMAIAEAAAQAMAIAAAUAIAMAAAADACABAAAEADACAAAFACAJBQAAegAgBgAAewAgQgIAAAABQwEAAAABRBAAAAABRgAAAEYCR0AAAAABSAIAAAABSQIAAAABAQwAAD8AIAdCAgAAAAFDAQAAAAFEEAAAAAFGAAAARgJHQAAAAAFIAgAAAAFJAgAAAAEBDAAAQQAwAQwAAEEAMAkFAAB4ACAGAAB5ACBCAgB3ACFDAQBzACFEEAB0ACFGAAB1RiJHQAB2ACFIAgB3ACFJAgB3ACECAAAABQAgDAAARAAgB0ICAHcAIUMBAHMAIUQQAHQAIUYAAHVGIkdAAHYAIUgCAHcAIUkCAHcAIQIAAAADACAMAABGACACAAAAAwAgDAAARgAgAwAAAAUAIBMAAD8AIBQAAEQAIAEAAAAFACABAAAAAwAgBQQAAG4AIBkAAG8AIBoAAHIAIBsAAHEAIBwAAHAAIAo_AABQADBAAABNABBBAABQADBCAgBRACFDAQBSACFEEABTACFGAABURiJHQABVACFIAgBRACFJAgBRACEDAAAAAwAgAQAATAAwGAAATQAgAwAAAAMAIAEAAAQAMAIAAAUAIAo_AABQADBAAABNABBBAABQADBCAgBRACFDAQBSACFEEABTACFGAABURiJHQABVACFIAgBRACFJAgBRACENBAAAVwAgGQAAYAAgGgAAVwAgGwAAVwAgHAAAVwAgSgIAAAABSwIAAAAETAIAAAAETQIAAAABTgIAAAABTwIAAAABUAIAAAABUQIAXwAhDgQAAFcAIBsAAF4AIBwAAF4AIEoBAAAAAUsBAAAABEwBAAAABE0BAAAAAU4BAAAAAU8BAAAAAVABAAAAAVEBAF0AIVIBAAAAAVMBAAAAAVQBAAAAAQ0EAABXACAZAABcACAaAABcACAbAABcACAcAABcACBKEAAAAAFLEAAAAARMEAAAAARNEAAAAAFOEAAAAAFPEAAAAAFQEAAAAAFREABbACEHBAAAVwAgGwAAWgAgHAAAWgAgSgAAAEYCSwAAAEYITAAAAEYIUQAAWUYiCwQAAFcAIBsAAFgAIBwAAFgAIEpAAAAAAUtAAAAABExAAAAABE1AAAAAAU5AAAAAAU9AAAAAAVBAAAAAAVFAAFYAIQsEAABXACAbAABYACAcAABYACBKQAAAAAFLQAAAAARMQAAAAARNQAAAAAFOQAAAAAFPQAAAAAFQQAAAAAFRQABWACEISgIAAAABSwIAAAAETAIAAAAETQIAAAABTgIAAAABTwIAAAABUAIAAAABUQIAVwAhCEpAAAAAAUtAAAAABExAAAAABE1AAAAAAU5AAAAAAU9AAAAAAVBAAAAAAVFAAFgAIQcEAABXACAbAABaACAcAABaACBKAAAARgJLAAAARghMAAAARghRAABZRiIESgAAAEYCSwAAAEYITAAAAEYIUQAAWkYiDQQAAFcAIBkAAFwAIBoAAFwAIBsAAFwAIBwAAFwAIEoQAAAAAUsQAAAABEwQAAAABE0QAAAAAU4QAAAAAU8QAAAAAVAQAAAAAVEQAFsAIQhKEAAAAAFLEAAAAARMEAAAAARNEAAAAAFOEAAAAAFPEAAAAAFQEAAAAAFREABcACEOBAAAVwAgGwAAXgAgHAAAXgAgSgEAAAABSwEAAAAETAEAAAAETQEAAAABTgEAAAABTwEAAAABUAEAAAABUQEAXQAhUgEAAAABUwEAAAABVAEAAAABC0oBAAAAAUsBAAAABEwBAAAABE0BAAAAAU4BAAAAAU8BAAAAAVABAAAAAVEBAF4AIVIBAAAAAVMBAAAAAVQBAAAAAQ0EAABXACAZAABgACAaAABXACAbAABXACAcAABXACBKAgAAAAFLAgAAAARMAgAAAARNAgAAAAFOAgAAAAFPAgAAAAFQAgAAAAFRAgBfACEISggAAAABSwgAAAAETAgAAAAETQgAAAABTggAAAABTwgAAAABUAgAAAABUQgAYAAhBj8AAGEAMEAAADcAEEEAAGEAMEICAFEAIVUBAFIAIVZAAFUAIQcDAABmACA_AABiADBAAAAkABBBAABiADBCAgBjACFVAQBkACFWQABlACEISgIAAAABSwIAAAAETAIAAAAETQIAAAABTgIAAAABTwIAAAABUAIAAAABUQIAVwAhC0oBAAAAAUsBAAAABEwBAAAABE0BAAAAAU4BAAAAAU8BAAAAAVABAAAAAVEBAF4AIVIBAAAAAVMBAAAAAVQBAAAAAQhKQAAAAAFLQAAAAARMQAAAAARNQAAAAAFOQAAAAAFPQAAAAAFQQAAAAAFRQABYACEDVwAAAwAgWAAAAwAgWQAAAwAgCD8AAGcAMEAAAB4AEEEAAGcAMEICAFEAIVUBAFIAIVZAAFUAIVoBAFIAIVsBAFIAIQkDAABmACA_AABoADBAAAALABBBAABoADBCAgBjACFVAQBkACFWQABlACFaAQBkACFbAQBkACEMBQAAbAAgBgAAbQAgPwAAaQAwQAAAAwAQQQAAaQAwQgIAYwAhQwEAZAAhRBAAagAhRgAAa0YiR0AAZQAhSAIAYwAhSQIAYwAhCEoQAAAAAUsQAAAABEwQAAAABE0QAAAAAU4QAAAAAU8QAAAAAVAQAAAAAVEQAFwAIQRKAAAARgJLAAAARghMAAAARghRAABaRiIJAwAAZgAgPwAAYgAwQAAAJAAQQQAAYgAwQgIAYwAhVQEAZAAhVkAAZQAhXAAAJAAgXQAAJAAgCwMAAGYAID8AAGgAMEAAAAsAEEEAAGgAMEICAGMAIVUBAGQAIVZAAGUAIVoBAGQAIVsBAGQAIVwAAAsAIF0AAAsAIAAAAAAAAWEBAAAAAQVhEAAAAAFnEAAAAAFoEAAAAAFpEAAAAAFqEAAAAAEBYQAAAEYCAWFAAAAAAQVhAgAAAAFnAgAAAAFoAgAAAAFpAgAAAAFqAgAAAAEFEwAApgEAIBQAAKwBACBeAACnAQAgXwAAqwEAIGQAACEAIAUTAACkAQAgFAAAqQEAIF4AAKUBACBfAACoAQAgZAAAAQAgAxMAAKYBACBeAACnAQAgZAAAIQAgAxMAAKQBACBeAAClAQAgZAAAAQAgAAAAAAALEwAAggEAMBQAAIcBADBeAACDAQAwXwAAhAEAMGAAAIUBACBhAACGAQAwYgAAhgEAMGMAAIYBADBkAACGAQAwZQAAiAEAMGYAAIkBADAHBgAAewAgQgIAAAABQwEAAAABRBAAAAABRgAAAEYCR0AAAAABSQIAAAABAgAAAAUAIBMAAI0BACADAAAABQAgEwAAjQEAIBQAAIwBACABDAAAowEAMAwFAABsACAGAABtACA_AABpADBAAAADABBBAABpADBCAgAAAAFDAQBkACFEEABqACFGAABrRiJHQABlACFIAgBjACFJAgBjACECAAAABQAgDAAAjAEAIAIAAACKAQAgDAAAiwEAIAo_AACJAQAwQAAAigEAEEEAAIkBADBCAgBjACFDAQBkACFEEABqACFGAABrRiJHQABlACFIAgBjACFJAgBjACEKPwAAiQEAMEAAAIoBABBBAACJAQAwQgIAYwAhQwEAZAAhRBAAagAhRgAAa0YiR0AAZQAhSAIAYwAhSQIAYwAhBkICAHcAIUMBAHMAIUQQAHQAIUYAAHVGIkdAAHYAIUkCAHcAIQcGAAB5ACBCAgB3ACFDAQBzACFEEAB0ACFGAAB1RiJHQAB2ACFJAgB3ACEHBgAAewAgQgIAAAABQwEAAAABRBAAAAABRgAAAEYCR0AAAAABSQIAAAABBBMAAIIBADBeAACDAQAwYAAAhQEAIGQAAIYBADAAAAAAAAALEwAAlgEAMBQAAJoBADBeAACXAQAwXwAAmAEAMGAAAJkBACBhAACGAQAwYgAAhgEAMGMAAIYBADBkAACGAQAwZQAAmwEAMGYAAIkBADAHBQAAegAgQgIAAAABQwEAAAABRBAAAAABRgAAAEYCR0AAAAABSAIAAAABAgAAAAUAIBMAAJ4BACADAAAABQAgEwAAngEAIBQAAJ0BACABDAAAogEAMAIAAAAFACAMAACdAQAgAgAAAIoBACAMAACcAQAgBkICAHcAIUMBAHMAIUQQAHQAIUYAAHVGIkdAAHYAIUgCAHcAIQcFAAB4ACBCAgB3ACFDAQBzACFEEAB0ACFGAAB1RiJHQAB2ACFIAgB3ACEHBQAAegAgQgIAAAABQwEAAAABRBAAAAABRgAAAEYCR0AAAAABSAIAAAABBBMAAJYBADBeAACXAQAwYAAAmQEAIGQAAIYBADABAwAAjwEAIAEDAACPAQAgBkICAAAAAUMBAAAAAUQQAAAAAUYAAABGAkdAAAAAAUgCAAAAAQZCAgAAAAFDAQAAAAFEEAAAAAFGAAAARgJHQAAAAAFJAgAAAAEFQgIAAAABVQEAAAABVkAAAAABWgEAAAABWwEAAAABAgAAAAEAIBMAAKQBACADQgIAAAABVQEAAAABVkAAAAABAgAAACEAIBMAAKYBACADAAAACwAgEwAApAEAIBQAAKoBACAHAAAACwAgDAAAqgEAIEICAHcAIVUBAHMAIVZAAHYAIVoBAHMAIVsBAHMAIQVCAgB3ACFVAQBzACFWQAB2ACFaAQBzACFbAQBzACEDAAAAJAAgEwAApgEAIBQAAK0BACAFAAAAJAAgDAAArQEAIEICAHcAIVUBAHMAIVZAAHYAIQNCAgB3ACFVAQBzACFWQAB2ACECAwYCBAAFAgUAAwYAAQIDBwIEAAQBAwgAAQMJAAAAAAUEAAoZAAsaAAwbAA0cAA4AAAAAAAUEAAoZAAsaAAwbAA0cAA4AAAUEABMZABQaABUbABYcABcAAAAAAAUEABMZABQaABUbABYcABcCBQADBgABAgUAAwYAAQUEABwZAB0aAB4bAB8cACAAAAAAAAUEABwZAB0aAB4bAB8cACAHAgEICgEJDQEKDgELDwENEQEOEwYPFAcQFgERGAYSGQgVGgEWGwEXHAYdHwkeIA8fIgMgIwMhJgMiJwMjKAMkKgMlLAYmLRAnLwMoMQYpMhEqMwMrNAMsNQYtOBIuORgvOgIwOwIxPAIyPQIzPgI0QAI1QgY2Qxk3RQI4RwY5SBo6SQI7SgI8SwY9Ths-TyE"
};
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await import('node:buffer');
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.js"),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.js");
        return await decodeBase64AsWasm(wasm);
    },
    importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}
//# sourceMappingURL=class.js.map