import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Request, Status } from './request.model';
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
    console.log('find email');
    const manager = await this.managerService.getManagerBySystemId(systemId);
    const user = await this.userService.getUserById(manager.userId);
    const email = user.email;
    return email;
  }

  //post
  async createRequest(request: Request) {
    console.log('request service');
    //send email to manager.
    const email = await this.findEmailBySystemId(request.systemId);
    const mail: Mail = {
      to: email,
      from: 'r0533145417@gmail.com',
      subject: request.firstName + ' ' + request.lastName,
      text: 'hello',
      html: '<h2>Hello I Want To Create A New Location To Your System</h2>',
    };
    this.sendgridService.send(mail);
    //send email to user.
    const mail2: Mail = {
      to: request.email,
      from: 'r0533145417@gmail.com',
      subject: 'hello',
      text: 'hello',
      html: '<h2>Hello your request has been sent to the admin</h2>',
    };
    this.sendgridService.send(mail);
    this.sendgridService.send(mail2);
    //
    return await (await this.requestModel.create(request)).save();
  }

  //put
  async updateRequest(Id: string, request: Request) {
    return await (
      await this.requestModel.findByIdAndUpdate(Id, request)
    ).save();
  }

  //patch
  async update(Id: string) {
    console.log('patch');
    await (
      await this.requestModel.findByIdAndUpdate(
        { _id: Id },
        { $set: { status: Status.approve } },
      )
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
