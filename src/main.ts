import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const uri =
    'mongodb+srv://dautchekovikj:F3Ei%40ZWDKe7F7A%40@cluster0.dug6qbv.mongodb.net/?retryWrites=true&w=majority';
  await app.listen(3000);
}
bootstrap();
