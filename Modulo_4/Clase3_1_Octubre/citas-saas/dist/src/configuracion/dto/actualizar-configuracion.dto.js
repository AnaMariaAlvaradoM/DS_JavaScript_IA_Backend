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
exports.ActualizarConfiguracionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ActualizarConfiguracionDto {
    horaApertura;
    horaCierre;
    zonaHoraria;
    duracionDefault;
}
exports.ActualizarConfiguracionDto = ActualizarConfiguracionDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '08:00' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Matches)(/^([01]\d|2[0-3]):[0-5]\d$/, {
        message: 'La hora de apertura debe tener formato HH:MM (24h)',
    }),
    __metadata("design:type", String)
], ActualizarConfiguracionDto.prototype, "horaApertura", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '19:00' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Matches)(/^([01]\d|2[0-3]):[0-5]\d$/, {
        message: 'La hora de cierre debe tener formato HH:MM (24h)',
    }),
    __metadata("design:type", String)
], ActualizarConfiguracionDto.prototype, "horaCierre", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'America/Bogota' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ActualizarConfiguracionDto.prototype, "zonaHoraria", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 45 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(5, { message: 'La duración por defecto no puede ser menor a 5 minutos' }),
    (0, class_validator_1.Max)(480, { message: 'La duración por defecto no puede superar 480 minutos' }),
    __metadata("design:type", Number)
], ActualizarConfiguracionDto.prototype, "duracionDefault", void 0);
//# sourceMappingURL=actualizar-configuracion.dto.js.map