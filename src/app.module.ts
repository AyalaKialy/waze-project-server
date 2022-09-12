import {
  Module,
  MiddlewareConsumer,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UserModule } from './user/user.module';
import { SystemModule } from './system/system.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthMiddleware } from './auth/auth.middleware';
import { ManagerModule } from './manager/manager.module';
import { RequestModule } from './request/request.module';
import { LocationModule } from './location/location.module';
import { ConfigModule } from '@nestjs/config';
import { SendgridModule } from './sendgrid/sendgrid.module';
import * as SendGrid from '@sendgrid/mail';

@Module({
  imports: [
    MongooseModule.forRoot(
      // 'mongodb+srv://rivka:r325154359@cluster0.zpklj5y.mongodb.net/?retryWrites=true&w=majority',
      'mongodb://localhost:27017/finalProject_DB'
    ),
    ConfigModule.forRoot(),
    UserModule,
    SystemModule,
    ManagerModule,
    RequestModule,
    LocationModule,
    SendgridModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}

//     curl --request POST \
// --url https://api.sendgrid.com/v3/mail/send \
// --header 'Authorization: Bearer <<YOUR_API_KEY>>' \
// --header 'Content-Type: application/json' \
// --data '{"personalizations":[{"to":[{"email":"john.doe@example.com","name":"John Doe"}],"subject":"Hello, World!"}],"content": [{"type": "text/plain", "value": "Heya!"}],"from":{"email":"sam.smith@example.com","name":"Sam Smith"},"reply_to":{"email":"sam.smith@example.com","name":"Sam Smith"}}'
