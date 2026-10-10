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
exports.ServiciosController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const usuario_actual_decorator_1 = require("../auth/usuario-actual.decorator");
const servicios_service_1 = require("./servicios.service");
const crear_servicio_dto_1 = require("./dto/crear-servicio.dto");
let ServiciosController = class ServiciosController {
    serviciosService;
    constructor(serviciosService) {
        this.serviciosService = serviciosService;
    }
    crear(negocioId, usuario, dto) {
        return this.serviciosService.crear(negocioId, usuario.id, dto);
    }
    listar(negocioId, usuario) {
        return this.serviciosService.listarPorNegocio(negocioId, usuario.id);
    }
};
exports.ServiciosController = ServiciosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Param)('negocioId', common_1.ParseIntPipe)),
    __param(1, (0, usuario_actual_decorator_1.UsuarioActual)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, crear_servicio_dto_1.CrearServicioDto]),
    __metadata("design:returntype", void 0)
], ServiciosController.prototype, "crear", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Param)('negocioId', common_1.ParseIntPipe)),
    __param(1, (0, usuario_actual_decorator_1.UsuarioActual)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], ServiciosController.prototype, "listar", null);
exports.ServiciosController = ServiciosController = __decorate([
    (0, swagger_1.ApiTags)('servicios'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('negocios/:negocioId/servicios'),
    __metadata("design:paramtypes", [servicios_service_1.ServiciosService])
], ServiciosController);
//# sourceMappingURL=servicios.controller.js.map