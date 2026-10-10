import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  // rawBody: true guarda el cuerpo crudo de la petición (lo necesita Stripe
  // para verificar la firma del webhook; ver SuscripcionesService).
  const app = await NestFactory.create(AppModule, { rawBody: true });

  app.use(helmet());
  // CORS: en local queda abierto; en producción se restringe con la variable
  // CORS_ORIGIN (uno o varios dominios separados por coma).
  app.enableCors({
    origin: process.env.CORS_ORIGIN
      ? process.env.CORS_ORIGIN.split(',').map((o) => o.trim())
      : true,
  });

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  app.useGlobalFilters(new HttpExceptionFilter());

  const config = new DocumentBuilder()
    .setTitle('AgendaFácil API')
    .setDescription('SaaS de agendamiento de citas · Dev Senior')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  const port = process.env.PORT ?? 3000;
  await app.listen(port, '0.0.0.0');
}
bootstrap();
