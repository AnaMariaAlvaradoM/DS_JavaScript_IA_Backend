"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsistenteIaController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const plan_pro_guard_1 = require("./plan-pro.guard");
const asistente_ia_service_1 = require("./asistente-ia.service");
let AsistenteIaController = class AsistenteIaController {
    asistenteIaService;
    constructor(asistenteIaService) {
        this.asistenteIaService = asistenteIaService;
    }
    generar(negocioId, citaId) {
        return this.asistenteIaService.generarMensajeCita(negocioId, citaId);
    }
};
exports.AsistenteIaController = AsistenteIaController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Param)('negocioId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('citaId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], AsistenteIaController.prototype, "generar", null);
exports.AsistenteIaController = AsistenteIaController = __decorate([
    (0, swagger_1.ApiTags)('asistente-ia'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, plan_pro_guard_1.PlanProGuard),
    (0, common_1.Controller)('negocios/:negocioId/citas/:citaId/mensaje-ia'),
    __metadata("design:paramtypes", [asistente_ia_service_1.AsistenteIaService])
], AsistenteIaController);
//# sourceMappingURL=asistente-ia.controller.js.map