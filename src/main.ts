import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
<<<<<<< HEAD
  const app = await NestFactory.create(AppModule, { cors: true });
=======
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  // const app = await NestFactory.create(AppModule, { cors: true });
>>>>>>> 8087f5fcc044f769585a036dda9e8fccb9273c75
  await app.listen(3333);
}
bootstrap();
