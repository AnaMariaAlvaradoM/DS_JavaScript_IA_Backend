"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_module_1 = require("./prisma/prisma.module");
const auth_module_1 = require("./auth/auth.module");
const negocios_module_1 = require("./negocios/negocios.module");
const perfiles_module_1 = require("./perfiles/perfiles.module");
const profesionales_module_1 = require("./profesionales/profesionales.module");
const servicios_module_1 = require("./servicios/servicios.module");
const citas_module_1 = require("./citas/citas.module");
const configuracion_module_1 = require("./configuracion/configuracion.module");
const suscripciones_module_1 = require("./suscripciones/suscripciones.module");
const asistente_ia_module_1 = require("./asistente-ia/asistente-ia.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            prisma_module_1.PrismaModule,
            auth_module_1.AuthModule,
            negocios_module_1.NegociosModule,
            perfiles_module_1.PerfilesModule,
            configuracion_module_1.ConfiguracionModule,
            servicios_module_1.ServiciosModule,
            profesionales_module_1.ProfesionalesModule,
            citas_module_1.CitasModule,
            suscripciones_module_1.SuscripcionesModule,
            asistente_ia_module_1.AsistenteIaModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map