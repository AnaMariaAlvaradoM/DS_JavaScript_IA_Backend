import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { NegociosModule } from './negocios/negocios.module';
import { ProfesionalesModule } from './profesionales/profesionales.module';
import { ServiciosModule } from './servicios/servicios.module';
import { CitasModule } from './citas/citas.module';
import { ConfiguracionModule } from './configuracion/configuracion.module';
import { SuscripcionesModule } from './suscripciones/suscripciones.module';
import { AsistenteIaModule } from './asistente-ia/asistente-ia.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    NegociosModule,
    ProfesionalesModule,
    ServiciosModule,
    CitasModule,
    ConfiguracionModule,
    SuscripcionesModule,
    AsistenteIaModule,
  ],
})
export class AppModule {}
