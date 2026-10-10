import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsNumber,
  IsPositive,
  IsString,
  Min,
  MinLength,
} from 'class-validator';

export class CrearServicioDto {
  @ApiProperty({ example: 'Corte clásico' })
  @IsString()
  @MinLength(3, { message: 'El nombre debe tener al menos 3 caracteres' })
  nombre!: string;

  @ApiProperty({ example: 30 })
  @IsInt()
  @Min(5, { message: 'La duración debe ser de al menos 5 minutos' })
  duracionMin!: number;

  @ApiProperty({ example: 25000 })
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive({ message: 'El precio debe ser mayor a cero' })
  precio!: number;
}
