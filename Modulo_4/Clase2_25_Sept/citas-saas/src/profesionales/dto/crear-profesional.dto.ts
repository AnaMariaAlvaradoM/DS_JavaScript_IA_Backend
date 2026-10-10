import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class CrearProfesionalDto {
  @ApiProperty({ example: 'Luis Barbero' })
  @IsString()
  @MinLength(2, { message: 'El nombre debe tener al menos 2 caracteres' })
  nombre!: string;

  @ApiPropertyOptional({ example: 'Fade y diseño' })
  @IsOptional()
  @IsString()
  @MaxLength(80)
  especialidad?: string;
}
