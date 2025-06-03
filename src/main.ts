import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); //NestFactory é responsável pela criação da instância da aplicação
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
