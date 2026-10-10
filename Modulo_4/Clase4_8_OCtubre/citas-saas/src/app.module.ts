import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { NegociosModule } from './negocios/negocios.module';
import { PerfilesModule } from './perfiles/perfiles.module';
import { ProfesionalesModule } from './profesionales/profesionales.module';
import { ServiciosModule } from './servicios/servicios.module';
import { CitasModule } from './citas/citas.module';
import { ConfiguracionModule } from './configuracion/configuracion.module';
import { SuscripcionesModule } from './suscripciones/suscripciones.module';
import { AsistenteIaModule } from './asistente-ia/asistente-ia.module';
import { SaludModule } from './salud/salud.module';

@Module({
  imports: [
    // Límite de peticiones global: máximo 60 por minuto por IP.
    ThrottlerModule.forRoot([{ ttl: 60000, limit: 60 }]),
    // Infraestructura
    PrismaModule,
    // Ya construido (M3, reusado)
    AuthModule,
    // Funcional desde C1
    NegociosModule,
    // Funcional desde C2: usuarios/perfiles, configuración, relaciones y la reserva
    PerfilesModule,
    ConfiguracionModule,
    ServiciosModule,
    ProfesionalesModule,
    CitasModule,
    // Funcional desde C3: monetización e IA
    SuscripcionesModule,
    AsistenteIaModule,
    // C4: endpoint de salud para monitoreo
    SaludModule,
  ],
  providers: [
    // Activa el límite de peticiones en TODA la app.
    { provide: APP_GUARD, useClass: ThrottlerGuard },
  ],
})
export class AppModule {}
