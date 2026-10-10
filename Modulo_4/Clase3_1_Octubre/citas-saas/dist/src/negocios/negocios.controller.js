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
exports.NegociosController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const usuario_actual_decorator_1 = require("../auth/usuario-actual.decorator");
const negocios_service_1 = require("./negocios.service");
const crear_negocio_dto_1 = require("./dto/crear-negocio.dto");
let NegociosController = class NegociosController {
    negociosService;
    constructor(negociosService) {
        this.negociosService = negociosService;
    }
    crear(dto, usuario) {
        return this.negociosService.crear(dto, usuario.id);
    }
    obtenerMios(usuario) {
        return this.negociosService.obtenerMios(usuario.id);
    }
    obtenerUno(id, usuario) {
        return this.negociosService.obtenerUno(id, usuario.id);
    }
};
exports.NegociosController = NegociosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, usuario_actual_decorator_1.UsuarioActual)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [crear_negocio_dto_1.CrearNegocioDto, Object]),
    __metadata("design:returntype", void 0)
], NegociosController.prototype, "crear", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, usuario_actual_decorator_1.UsuarioActual)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NegociosController.prototype, "obtenerMios", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, usuario_actual_decorator_1.UsuarioActual)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], NegociosController.prototype, "obtenerUno", null);
exports.NegociosController = NegociosController = __decorate([
    (0, swagger_1.ApiTags)('negocios'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('negocios'),
    __metadata("design:paramtypes", [negocios_service_1.NegociosService])
], NegociosController);
//# sourceMappingURL=negocios.controller.js.map