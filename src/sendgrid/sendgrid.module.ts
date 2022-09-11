import { Module } from '@nestjs/common';
import { SendgridService } from './sendgrid.service';
import { MailController } from './sendgrid.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [],
  controllers: [MailController],
  providers: [SendgridService],
  exports: [SendgridService],
})
export class SendgridModule { }
