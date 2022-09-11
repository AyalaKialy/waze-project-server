import { Module } from '@nestjs/common';
import { RequestController } from './request.controller';
import { RequestService } from './request.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RequestSchema } from './request.model';
import { ManagerModule } from 'src/manager/manager.module';
import { UserModule } from 'src/user/user.module';
import { SendgridModule } from 'src/sendgrid/sendgrid.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Request', schema: RequestSchema }]),
    ManagerModule,
    UserModule,
    SendgridModule,
  ],
  controllers: [RequestController],
  providers: [RequestService],
})
export class RequestModule {}
