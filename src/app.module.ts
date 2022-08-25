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

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/finalProject_DB'),
    UserModule,
    SystemModule,
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
