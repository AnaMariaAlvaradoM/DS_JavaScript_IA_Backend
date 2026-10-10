import { Module } from '@nestjs/common';
import { NegociosService } from './negocios.service';
import { NegociosController } from './negocios.controller';
import { CatalogoController } from './catalogo.controller';

@Module({
  controllers: [NegociosController, CatalogoController],
  providers: [NegociosService],
})
export class NegociosModule {}
