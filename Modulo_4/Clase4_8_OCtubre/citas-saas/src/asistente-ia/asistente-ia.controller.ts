import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { PlanProGuard } from './plan-pro.guard';
import { AsistenteIaService } from './asistente-ia.service';

// Función PRO: generar el mensaje de confirmación de una cita con IA.
// JwtAuthGuard valida el token; PlanProGuard valida propiedad + plan PRO (402).
@ApiTags('asistente-ia')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, PlanProGuard)
@Controller('negocios/:negocioId/citas/:citaId/mensaje-ia')
export class AsistenteIaController {
  constructor(private readonly asistenteIaService: AsistenteIaService) {}

  // La IA cuesta por uso: límite más estricto que el global (10 por minuto).
  @Throttle({ default: { ttl: 60000, limit: 10 } })
  @Get()
  generar(
    @Param('negocioId', ParseIntPipe) negocioId: number,
    @Param('citaId', ParseIntPipe) citaId: number,
  ) {
    return this.asistenteIaService.generarMensajeCita(negocioId, citaId);
  }
}
