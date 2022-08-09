import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { SystemService } from './system.service';
import { System } from './system.model';

@Controller('system')
export class SystemController {
  constructor(private systemService: SystemService) {}

  @Post()
  createSystem(@Body() newSystem: System) {
    this.systemService.createSystem(newSystem);
  }

  @Put(':id')
  updateSystem(@Param('id') systemId: string, @Body() updateSystem: System) {
    this.systemService.updateSystem(systemId, updateSystem);
  }

  @Delete(':id')
  deleteSystem(@Param('id') systemId: string) {
    this.systemService.deleteSystem(systemId);
  }

  @Get('getSystemByurlName/:urlName')
  getSystemByurlName(@Param('urlName') urlName: string) {
    return this.systemService.getSystemByUrlName(urlName);
  }

  @Get(':id')
  getSystemById(@Param('id') systemId: string) {
    return this.systemService.getSystemById(systemId);
  }

  @Get()
  getAll() {
    return this.systemService.getSystems();
  }
}
