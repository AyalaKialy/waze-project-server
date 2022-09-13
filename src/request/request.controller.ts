import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { RequestService } from './request.service';
import { Request, Status } from './request.model';

@Controller('request')
export class RequestController {
  constructor(private requestService: RequestService) {}

  @Post()
  createRequest(@Body() newRequest: Request) {
    console.log('request controller');
    return this.requestService.createRequest(newRequest);
  }

  @Put(':id')
  updateRequest(@Param('id') Id: string, @Body() updateRequest: Request) {
    return this.requestService.updateRequest(Id, updateRequest);
  }

  @Patch(':id')
  update(@Param('id') Id: string) {
    return this.requestService.update(Id);
  }

  @Delete(':id')
  deleteRequest(@Param('id') Id: string) {
    this.requestService.deleteRequest(Id);
  }

  @Get(':systemId')
  getRequestById(@Param('systemId') systemId: string) {
    return this.requestService.getRequestsById(systemId);
  }

  @Get()
  getAll() {
    return this.requestService.getRequests();
  }
}
