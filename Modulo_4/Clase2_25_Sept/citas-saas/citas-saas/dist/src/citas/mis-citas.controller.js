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
exports.MisCitasController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const usuario_actual_decorator_1 = require("../auth/usuario-actual.decorator");
const citas_service_1 = require("./citas.service");
let MisCitasController = class MisCitasController {
    citasService;
    constructor(citasService) {
        this.citasService = citasService;
    }
    listar(usuario) {
        return this.citasService.listarMias(usuario.id);
    }
};
exports.MisCitasController = MisCitasController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, usuario_actual_decorator_1.UsuarioActual)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MisCitasController.prototype, "listar", null);
exports.MisCitasController = MisCitasController = __decorate([
    (0, swagger_1.ApiTags)('mis-citas'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('mis-citas'),
    __metadata("design:paramtypes", [citas_service_1.CitasService])
], MisCitasController);
//# sourceMappingURL=mis-citas.controller.js.map