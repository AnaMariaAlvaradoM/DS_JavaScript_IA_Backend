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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrearTransaccionDto = exports.TipoTransaccionDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
var TipoTransaccionDto;
(function (TipoTransaccionDto) {
    TipoTransaccionDto["INGRESO"] = "INGRESO";
    TipoTransaccionDto["GASTO"] = "GASTO";
})(TipoTransaccionDto || (exports.TipoTransaccionDto = TipoTransaccionDto = {}));
class CrearTransaccionDto {
    descripcion;
    monto;
    tipo;
    categoriaId;
}
exports.CrearTransaccionDto = CrearTransaccionDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Mercado de la semana' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2, { message: 'La descripción debe tener al menos 2 caracteres' }),
    __metadata("design:type", String)
], CrearTransaccionDto.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 50000 }),
    (0, class_validator_1.IsNumber)({}, { message: 'El monto debe ser un número' }),
    (0, class_validator_1.IsPositive)({ message: 'El monto debe ser positivo' }),
    __metadata("design:type", Number)
], CrearTransaccionDto.prototype, "monto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: TipoTransaccionDto, example: 'GASTO' }),
    (0, class_validator_1.IsEnum)(TipoTransaccionDto, { message: 'El tipo debe ser INGRESO o GASTO' }),
    __metadata("design:type", String)
], CrearTransaccionDto.prototype, "tipo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, class_validator_1.IsInt)({ message: 'La categoría debe ser un número entero' }),
    __metadata("design:type", Number)
], CrearTransaccionDto.prototype, "categoriaId", void 0);
//# sourceMappingURL=crear-transaccion.dto.js.map