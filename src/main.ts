import { NestFactory } from '@nestjs/core';
import {useContainer} from "class-validator";
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  useContainer(app.select(AppModule), {fallbackOnErrors: true});

  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
