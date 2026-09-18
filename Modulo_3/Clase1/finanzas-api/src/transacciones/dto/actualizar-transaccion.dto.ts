import {
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { TipoTransaccionDto } from './crear-transaccion.dto';

export class ActualizarTransaccionDto {
  @ApiProperty({ example: 'Mercado quincenal', required: false })
  @IsOptional()
  @IsString()
  @MinLength(2, { message: 'La descripción debe tener al menos 2 caracteres' })
  descripcion?: string;

  @ApiProperty({ example: 75000, required: false })
  @IsOptional()
  @IsNumber({}, { message: 'El monto debe ser un número' })
  @IsPositive({ message: 'El monto debe ser positivo' })
  monto?: number;

  @ApiProperty({ enum: TipoTransaccionDto, required: false })
  @IsOptional()
  @IsEnum(TipoTransaccionDto, { message: 'El tipo debe ser INGRESO o GASTO' })
  tipo?: TipoTransaccionDto;

  @ApiProperty({ example: 2, required: false })
  @IsOptional()
  @IsInt({ message: 'La categoría debe ser un número entero' })
  categoriaId?: number;
}