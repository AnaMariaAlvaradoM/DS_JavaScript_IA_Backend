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
exports.CrearNegocioDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CrearNegocioDto {
    nombre;
    descripcion;
    telefono;
    direccion;
}
exports.CrearNegocioDto = CrearNegocioDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Barbería Don Pepe' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(3, { message: 'El nombre debe tener al menos 3 caracteres' }),
    (0, class_validator_1.MaxLength)(80, { message: 'El nombre no puede superar 80 caracteres' }),
    __metadata("design:type", String)
], CrearNegocioDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Cortes clásicos y arreglo de barba' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(300, { message: 'La descripción no puede superar 300 caracteres' }),
    __metadata("design:type", String)
], CrearNegocioDto.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '3001234567' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], CrearNegocioDto.prototype, "telefono", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Calle 3 # 4-5, Zipaquirá' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(120),
    __metadata("design:type", String)
], CrearNegocioDto.prototype, "direccion", void 0);
//# sourceMappingURL=crear-negocio.dto.js.map