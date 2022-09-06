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

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://rivka:r325154359@cluster0.zpklj5y.mongodb.net/?retryWrites=true&w=majority',
    ),
    UserModule,
    SystemModule,
    ManagerModule,
    RequestModule,
    LocationModule,
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
