import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { NegociosService } from './negocios.service';

// Vitrina pública de un negocio: sin login, para que un cliente vea qué
// puede reservar (servicios, profesionales y qué hace cada uno).
@ApiTags('catalogo')
@Controller('negocios/:negocioId/catalogo')
export class CatalogoController {
  constructor(private readonly negociosService: NegociosService) {}

  @Get()
  obtener(@Param('negocioId', ParseIntPipe) negocioId: number) {
    return this.negociosService.catalogo(negocioId);
  }
}
