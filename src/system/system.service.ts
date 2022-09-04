import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { System } from './system.model';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SystemService {
  constructor(
    @InjectModel('System') private readonly systemModel: Model<System>,
  ) {}

  //post
  async createSystem(system: System) {
    return await (await this.systemModel.create(system)).save();
  }

  //put
  async updateSystem(systemId: string, sustem: System) {
    console.log('updateSystem');
    await (await this.systemModel.findByIdAndUpdate(systemId, sustem)).save();
  }

  //delete
  async deleteSystem(systemId: string) {
    await this.systemModel.findByIdAndDelete(systemId);
  }

  //get
  async getSystemByUrlName(urlName: string) {
    return await this.systemModel.findOne({ urlName }).exec();
  }

  //get
  async getSystemBymanagerId(managerId: string) {
    return await this.systemModel.find({ managerId }).exec();
  }

  //get
  async getSystems() {
    return await this.systemModel.find().exec();
  }
}
