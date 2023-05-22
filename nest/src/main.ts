import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const origin = configService.get<string>('ORIGIN');
  const corsOptions = {
    origin,
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'Accept',
      'x-refresh-token',
    ],
    credentials: true,
  };

  const config = new DocumentBuilder()
    .setTitle('Nest API')
    .setDescription('Nest API를 위한 swagger 문서')
    .setVersion('1.0.0')
    .addTag('Auth', '인증 정보 관련 API')
    .addTag('User', '유저 정보 관련 API')
    .addTag('Survey', '검사 결과 관련 API')
    .addServer('http://localhost:3000/api')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  app.enableCors(corsOptions);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
};
bootstrap();
