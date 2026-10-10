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
exports.ConfiguracionController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const usuario_actual_decorator_1 = require("../auth/usuario-actual.decorator");
const configuracion_service_1 = require("./configuracion.service");
const actualizar_configuracion_dto_1 = require("./dto/actualizar-configuracion.dto");
let ConfiguracionController = class ConfiguracionController {
    configuracionService;
    constructor(configuracionService) {
        this.configuracionService = configuracionService;
    }
    obtener(negocioId, usuario) {
        return this.configuracionService.obtener(negocioId, usuario.id);
    }
    actualizar(negocioId, usuario, dto) {
        return this.configuracionService.actualizar(negocioId, usuario.id, dto);
    }
};
exports.ConfiguracionController = ConfiguracionController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Param)('negocioId', common_1.ParseIntPipe)),
    __param(1, (0, usuario_actual_decorator_1.UsuarioActual)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], ConfiguracionController.prototype, "obtener", null);
__decorate([
    (0, common_1.Patch)(),
    __param(0, (0, common_1.Param)('negocioId', common_1.ParseIntPipe)),
    __param(1, (0, usuario_actual_decorator_1.UsuarioActual)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, actualizar_configuracion_dto_1.ActualizarConfiguracionDto]),
    __metadata("design:returntype", void 0)
], ConfiguracionController.prototype, "actualizar", null);
exports.ConfiguracionController = ConfiguracionController = __decorate([
    (0, swagger_1.ApiTags)('configuracion'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('negocios/:negocioId/configuracion'),
    __metadata("design:paramtypes", [configuracion_service_1.ConfiguracionService])
], ConfiguracionController);
//# sourceMappingURL=configuracion.controller.js.map