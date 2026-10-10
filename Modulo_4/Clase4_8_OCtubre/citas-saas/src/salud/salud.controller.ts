import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

// Endpoint público de salud para monitoreo (UptimeRobot, Render, etc.).
// No exige token: solo confirma que el servicio está vivo.
@ApiTags('salud')
@Controller('health')
export class SaludController {
  @Get()
  estado() {
    return {
      status: 'ok',
      uptime: Math.round(process.uptime()),
      timestamp: new Date().toISOString(),
    };
  }
}
