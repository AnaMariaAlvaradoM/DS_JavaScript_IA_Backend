import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { Rol } from '../generated/prisma/client';
import { UsuarioActual } from '../auth/usuario-actual.decorator';
import { TransaccionesService } from './transacciones.service';
import { CrearTransaccionDto } from './dto/crear-transaccion.dto';
import { ActualizarTransaccionDto } from './dto/actualizar-transaccion.dto';

@ApiTags('transacciones')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('transacciones')
export class TransaccionesController {
  constructor(private readonly transaccionesService: TransaccionesService) {}

  @Post('crear')
  crear(
    @Body() dto: CrearTransaccionDto,
    @UsuarioActual() usuario: { id: number },
  ) {
    return this.transaccionesService.crear(dto, usuario.id);
  }

  @Get('mias')
  obtenerMias(@UsuarioActual() usuario: { id: number }) {
    return this.transaccionesService.obtenerMias(usuario.id);
  }

  @Get('admin/todas')
  @UseGuards(RolesGuard)
  @Roles([Rol.ADMIN])
  obtenerTodasAdmin() {
    return this.transaccionesService.obtenerTodasAdmin();
  }

  @Get(':id')
  obtenerUna(
    @Param('id', ParseIntPipe) id: number,
    @UsuarioActual() usuario: { id: number },
  ) {
    return this.transaccionesService.obtenerUna(id, usuario.id);
  }

  @Patch(':id')
  actualizar(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: ActualizarTransaccionDto,
    @UsuarioActual() usuario: { id: number },
  ) {
    return this.transaccionesService.actualizar(id, dto, usuario.id);
  }

  @Delete(':id')
  eliminar(
    @Param('id', ParseIntPipe) id: number,
    @UsuarioActual() usuario: { id: number },
  ) {
    return this.transaccionesService.eliminar(id, usuario.id);
  }
}