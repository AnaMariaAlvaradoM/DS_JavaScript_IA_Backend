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
exports.TransaccionesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const roles_guard_1 = require("../auth/roles.guard");
const roles_decorator_1 = require("../auth/roles.decorator");
const client_1 = require("../generated/prisma/client");
const usuario_actual_decorator_1 = require("../auth/usuario-actual.decorator");
const transacciones_service_1 = require("./transacciones.service");
const crear_transaccion_dto_1 = require("./dto/crear-transaccion.dto");
const actualizar_transaccion_dto_1 = require("./dto/actualizar-transaccion.dto");
let TransaccionesController = class TransaccionesController {
    transaccionesService;
    constructor(transaccionesService) {
        this.transaccionesService = transaccionesService;
    }
    crear(dto, usuario) {
        return this.transaccionesService.crear(dto, usuario.id);
    }
    obtenerMias(usuario) {
        return this.transaccionesService.obtenerMias(usuario.id);
    }
    obtenerTodasAdmin() {
        return this.transaccionesService.obtenerTodasAdmin();
    }
    obtenerUna(id, usuario) {
        return this.transaccionesService.obtenerUna(id, usuario.id);
    }
    actualizar(id, dto, usuario) {
        return this.transaccionesService.actualizar(id, dto, usuario.id);
    }
    eliminar(id, usuario) {
        return this.transaccionesService.eliminar(id, usuario.id);
    }
};
exports.TransaccionesController = TransaccionesController;
__decorate([
    (0, common_1.Post)('crear'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, usuario_actual_decorator_1.UsuarioActual)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [crear_transaccion_dto_1.CrearTransaccionDto, Object]),
    __metadata("design:returntype", void 0)
], TransaccionesController.prototype, "crear", null);
__decorate([
    (0, common_1.Get)('mias'),
    __param(0, (0, usuario_actual_decorator_1.UsuarioActual)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TransaccionesController.prototype, "obtenerMias", null);
__decorate([
    (0, common_1.Get)('admin/todas'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)([client_1.Rol.ADMIN]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TransaccionesController.prototype, "obtenerTodasAdmin", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, usuario_actual_decorator_1.UsuarioActual)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], TransaccionesController.prototype, "obtenerUna", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, usuario_actual_decorator_1.UsuarioActual)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, actualizar_transaccion_dto_1.ActualizarTransaccionDto, Object]),
    __metadata("design:returntype", void 0)
], TransaccionesController.prototype, "actualizar", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, usuario_actual_decorator_1.UsuarioActual)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], TransaccionesController.prototype, "eliminar", null);
exports.TransaccionesController = TransaccionesController = __decorate([
    (0, swagger_1.ApiTags)('transacciones'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('transacciones'),
    __metadata("design:paramtypes", [transacciones_service_1.TransaccionesService])
], TransaccionesController);
//# sourceMappingURL=transacciones.controller.js.map