import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { SystemModule } from './system/system.module'
import { MongooseModule } from '@nestjs/mongoose';
// import { UserController } from './user/user.controller';
// import { UserService } from './user/user.service';
// import { SystemController } from './system/system.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/finalProject_DB'),
    UserModule,
    SystemModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
