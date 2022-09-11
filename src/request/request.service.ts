import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Request } from './request.model';
import { InjectModel } from '@nestjs/mongoose';
import { ManagerService } from '../manager/manager.service';
import { UserService } from '../user/user.service';
import { SendgridService } from '../sendgrid/sendgrid.service';
import { Mail } from '../sendgrid/sendgrid.model';
@Injectable()
export class RequestService {
  constructor(
    @InjectModel('Request') private readonly requestModel: Model<Request>,
    private readonly managerService: ManagerService,
    private readonly userService: UserService,
    private readonly sendgridService: SendgridService,
  ) {}

  async findEmailBySystemId(systemId: string) {
    const manager = await this.managerService.getManagerBySystemId(systemId);
    const user = await this.userService.getUserById(manager.userId);
    const email = user.email;
    return email;
  }

  //post
  async createRequest(request: Request) {
    console.log('createRequest');
    //
    const email = await this.findEmailBySystemId(request.systemId);
    const mail: Mail = {
      to: email,
      from: 'r0533145417@gmail.com',
      subject: request.firstName + ' ' + request.lastName,
      text: 'hello',
      html: '<h1>Hello I Want To Create A New Location To Your System</h1>',
    };
    this.sendgridService.send(mail);
    //
    return await (await this.requestModel.create(request)).save();
  }

  //put
  async updateRequest(Id: string, request: Request) {
    return await (
      await this.requestModel.findByIdAndUpdate(Id, request)
    ).save();
  }

  //delete
  async deleteRequest(Id: string) {
    await this.requestModel.findByIdAndDelete(Id);
  }

  //get
  async getRequestsById(systemId: string) {
    return await this.requestModel.find({ systemId }).exec();
  }

  //get
  async getRequests() {
    return await this.requestModel.find().exec();
  }
}
