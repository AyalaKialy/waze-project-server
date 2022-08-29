import { Module } from '@nestjs/common';
import { ManagerController } from './manager.controller';
import { ManagerService } from './manager.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ManagerSchema } from './manager.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Manager', schema: ManagerSchema }]),
  ],
  controllers: [ManagerController],
  providers: [ManagerService],
})
export class ManagerModule { }
