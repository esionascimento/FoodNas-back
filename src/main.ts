import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const PORT = process.env.PORT || 4000;
  const app = await NestFactory.create(AppModule);
  // app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.enableCors();
  await app.listen(PORT);
  console.info('aplicação rodando na porta: ' + PORT);
}
bootstrap();
