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
exports.CatalogoController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const negocios_service_1 = require("./negocios.service");
let CatalogoController = class CatalogoController {
    negociosService;
    constructor(negociosService) {
        this.negociosService = negociosService;
    }
    obtener(negocioId) {
        return this.negociosService.catalogo(negocioId);
    }
};
exports.CatalogoController = CatalogoController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Param)('negocioId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CatalogoController.prototype, "obtener", null);
exports.CatalogoController = CatalogoController = __decorate([
    (0, swagger_1.ApiTags)('catalogo'),
    (0, common_1.Controller)('negocios/:negocioId/catalogo'),
    __metadata("design:paramtypes", [negocios_service_1.NegociosService])
], CatalogoController);
//# sourceMappingURL=catalogo.controller.js.map