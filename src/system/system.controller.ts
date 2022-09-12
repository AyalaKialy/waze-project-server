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
  constructor(private systemService: SystemService) { }

  @Post()
  createSystem(@Body() newSystem: System) {
    return this.systemService.createSystem(newSystem);
  }

  @Put(':id')
  updateSystem(@Param('id') systemId: string, @Body() updateSystem: System) {
    console.log('updateSystem');
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

  @Get(':managerId')
  getSystemsBymanagerId(@Param('managerId') managerId: string) {
    return this.systemService.getSystemsByManagerId(managerId);
  }

  @Get('getSystemBySearchWord/:searchWord')
  getSystemsBySearchword(@Param('searchWord') searchWord: string) {
    return this.systemService.getSystemsBySearchWord(searchWord);
  }
  @Get()
  getAll() {
    return this.systemService.getSystems();
  }
}
