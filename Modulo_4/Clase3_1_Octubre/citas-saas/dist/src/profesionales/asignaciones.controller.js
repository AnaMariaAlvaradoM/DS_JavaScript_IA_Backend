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
exports.AsignacionesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const usuario_actual_decorator_1 = require("../auth/usuario-actual.decorator");
const profesionales_service_1 = require("./profesionales.service");
const asignar_servicio_dto_1 = require("./dto/asignar-servicio.dto");
let AsignacionesController = class AsignacionesController {
    profesionalesService;
    constructor(profesionalesService) {
        this.profesionalesService = profesionalesService;
    }
    asignar(profesionalId, usuario, dto) {
        return this.profesionalesService.asignarServicio(profesionalId, dto.servicioId, usuario.id);
    }
    listar(profesionalId, usuario) {
        return this.profesionalesService.listarServicios(profesionalId, usuario.id);
    }
    quitar(profesionalId, servicioId, usuario) {
        return this.profesionalesService.quitarServicio(profesionalId, servicioId, usuario.id);
    }
};
exports.AsignacionesController = AsignacionesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Param)('profesionalId', common_1.ParseIntPipe)),
    __param(1, (0, usuario_actual_decorator_1.UsuarioActual)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, asignar_servicio_dto_1.AsignarServicioDto]),
    __metadata("design:returntype", void 0)
], AsignacionesController.prototype, "asignar", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Param)('profesionalId', common_1.ParseIntPipe)),
    __param(1, (0, usuario_actual_decorator_1.UsuarioActual)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], AsignacionesController.prototype, "listar", null);
__decorate([
    (0, common_1.Delete)(':servicioId'),
    __param(0, (0, common_1.Param)('profesionalId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('servicioId', common_1.ParseIntPipe)),
    __param(2, (0, usuario_actual_decorator_1.UsuarioActual)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", void 0)
], AsignacionesController.prototype, "quitar", null);
exports.AsignacionesController = AsignacionesController = __decorate([
    (0, swagger_1.ApiTags)('profesionales-servicios'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('profesionales/:profesionalId/servicios'),
    __metadata("design:paramtypes", [profesionales_service_1.ProfesionalesService])
], AsignacionesController);
//# sourceMappingURL=asignaciones.controller.js.map