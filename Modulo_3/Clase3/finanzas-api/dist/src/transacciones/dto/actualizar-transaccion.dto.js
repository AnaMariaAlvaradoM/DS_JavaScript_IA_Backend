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
exports.ActualizarTransaccionDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const crear_transaccion_dto_1 = require("./crear-transaccion.dto");
class ActualizarTransaccionDto {
    descripcion;
    monto;
    tipo;
    categoriaId;
}
exports.ActualizarTransaccionDto = ActualizarTransaccionDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Mercado quincenal', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2, { message: 'La descripción debe tener al menos 2 caracteres' }),
    __metadata("design:type", String)
], ActualizarTransaccionDto.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 75000, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: 'El monto debe ser un número' }),
    (0, class_validator_1.IsPositive)({ message: 'El monto debe ser positivo' }),
    __metadata("design:type", Number)
], ActualizarTransaccionDto.prototype, "monto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: crear_transaccion_dto_1.TipoTransaccionDto, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(crear_transaccion_dto_1.TipoTransaccionDto, { message: 'El tipo debe ser INGRESO o GASTO' }),
    __metadata("design:type", String)
], ActualizarTransaccionDto.prototype, "tipo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)({ message: 'La categoría debe ser un número entero' }),
    __metadata("design:type", Number)
], ActualizarTransaccionDto.prototype, "categoriaId", void 0);
//# sourceMappingURL=actualizar-transaccion.dto.js.map