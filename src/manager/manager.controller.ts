import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { ManagerService } from './manager.service';
import { Manager } from './manager.model';
import { Request } from 'express';

@Controller('manager')
export class ManagerController {
  constructor(private managerService: ManagerService) {}

  @Post()
  createManager(@Body() newManager: Manager) {
    console.log('createManager');
    return this.managerService.createManager(newManager);
  }

  @Put(':id')
  updateManager(
    @Param('id') managerId: string,
    @Body() updateManager: Manager,
  ) {
    this.managerService.updateManager(managerId, updateManager);
  }

  @Delete(':id')
  deleteManager(@Param('id') id: string) {
    this.managerService.deleteManager(id);
  }
  @Get(':userId/:systemId')
  getManagerById(
    @Param('userId') userId: string,
    @Param('systemId') systemId: string,
  ) {
    return this.managerService.getRoleByUserIdAndSystemId(userId, systemId);
  }

  // @Get('getUserById/:id')
  // getUserById(@Param('id') userId: string) {
  //     return this.userService.getUserById(userId);
  // }

  @Get()
  getAll() {
    return this.managerService.getManagers();
  }
}
