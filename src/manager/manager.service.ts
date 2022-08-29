import { Model, ObjectId } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Manager, Role } from './manager.model';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ManagerService {
  constructor(
    @InjectModel('Manager') private readonly ManagerService: Model<Manager>,
  ) {}

  //post
  async createManager(manager: Manager) {
    return await (await this.ManagerService.create(manager)).save();
  }

  //put
  async updateManager(id: string, manager: Manager) {
    await (await this.ManagerService.findByIdAndUpdate(id, manager)).save();
  }

  //delete
  async deleteManager(userId: string) {
    await this.ManagerService.findByIdAndDelete(userId);
  }

  //get
  async getRoleByUserIdAndSystemId(
    userId: string,
    systemId: string,
  ): Promise<Role> {
    return await (
      await this.ManagerService.findOne({ userId, systemId })
    ).role;
  }

  //getAll
  async getManagers() {
    return await this.ManagerService.find().exec();
  }
}
