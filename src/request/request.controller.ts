import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { RequestService } from './request.service';
import { Request } from './request.model';

@Controller('request')
export class RequestController {
  constructor(private requestService: RequestService) {}

  @Post()
  createRequest(@Body() newRequest: Request) {
    return this.requestService.createRequest(newRequest);
  }

  @Put(':id')
  updateRequest(@Param('id') Id: string, @Body() updateRequest: Request) {
    return this.requestService.updateRequest(Id, updateRequest);
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
