import {
  IsEnum,
  IsInt,
  IsNumber,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export enum TipoTransaccionDto {
  INGRESO = 'INGRESO',
  GASTO = 'GASTO',
}

export class CrearTransaccionDto {
  @ApiProperty({ example: 'Mercado de la semana' })
  @IsString()
  @MinLength(2, { message: 'La descripción debe tener al menos 2 caracteres' })
  descripcion!: string;

  @ApiProperty({ example: 50000 })
  @IsNumber({}, { message: 'El monto debe ser un número' })
  @IsPositive({ message: 'El monto debe ser positivo' })
  monto!: number;

  @ApiProperty({ enum: TipoTransaccionDto, example: 'GASTO' })
  @IsEnum(TipoTransaccionDto, { message: 'El tipo debe ser INGRESO o GASTO' })
  tipo!: TipoTransaccionDto;

  @ApiProperty({ example: 1 })
  @IsInt({ message: 'La categoría debe ser un número entero' })
  categoriaId!: number;
}