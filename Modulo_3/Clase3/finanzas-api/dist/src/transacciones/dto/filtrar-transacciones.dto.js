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
exports.FiltrarTransaccionesDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const crear_transaccion_dto_1 = require("./crear-transaccion.dto");
let RangoDeFechasValidoConstraint = class RangoDeFechasValidoConstraint {
    validate(hasta, args) {
        const dto = args.object;
        if (!dto.desde || !hasta) {
            return true;
        }
        return new Date(hasta) >= new Date(dto.desde);
    }
    defaultMessage() {
        return 'La fecha "hasta" no puede ser anterior a la fecha "desde"';
    }
};
RangoDeFechasValidoConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'RangoDeFechasValido', async: false })
], RangoDeFechasValidoConstraint);
class FiltrarTransaccionesDto {
    tipo;
    desde;
    hasta;
    pagina = 1;
    limite = 10;
}
exports.FiltrarTransaccionesDto = FiltrarTransaccionesDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: crear_transaccion_dto_1.TipoTransaccionDto }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(crear_transaccion_dto_1.TipoTransaccionDto, { message: 'El tipo debe ser INGRESO o GASTO' }),
    __metadata("design:type", String)
], FiltrarTransaccionesDto.prototype, "tipo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '2026-01-01' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)({}, { message: 'La fecha "desde" debe tener formato AAAA-MM-DD' }),
    __metadata("design:type", String)
], FiltrarTransaccionesDto.prototype, "desde", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '2026-01-31' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)({}, { message: 'La fecha "hasta" debe tener formato AAAA-MM-DD' }),
    (0, class_validator_1.Validate)(RangoDeFechasValidoConstraint),
    __metadata("design:type", String)
], FiltrarTransaccionesDto.prototype, "hasta", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 1, default: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)({ message: 'La página debe ser un número entero' }),
    (0, class_validator_1.Min)(1, { message: 'La página debe ser al menos 1' }),
    __metadata("design:type", Number)
], FiltrarTransaccionesDto.prototype, "pagina", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 10, default: 10 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)({ message: 'El límite debe ser un número entero' }),
    (0, class_validator_1.Min)(1, { message: 'El límite debe ser al menos 1' }),
    (0, class_validator_1.Max)(50, { message: 'El límite no puede superar 50' }),
    __metadata("design:type", Number)
], FiltrarTransaccionesDto.prototype, "limite", void 0);
//# sourceMappingURL=filtrar-transacciones.dto.js.map