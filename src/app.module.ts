import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { SystemModule } from './system/system.module'
// import { LocationModule } from './location/location.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/finalProject_DB'),
    UserModule,
    SystemModule,
    // LocationModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
