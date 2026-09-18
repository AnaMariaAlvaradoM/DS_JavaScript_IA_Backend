import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { CategoriasModule } from './categorias/categorias.module';
import { TransaccionesModule } from './transacciones/transacciones.module';

@Module({
  imports: [PrismaModule, AuthModule, CategoriasModule, TransaccionesModule],
})
export class AppModule {}