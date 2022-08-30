import { Model, ObjectId } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Manager, Role } from './manager.model';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ManagerService {
  constructor(
    @InjectModel('Manager') private readonly managerService: Model<Manager>,
  ) {}

  //post
  async createManager(manager: Manager) {
    return await (await this.managerService.create(manager)).save();
  }

  //put
  async updateManager(id: string, manager: Manager) {
    await (await this.managerService.findByIdAndUpdate(id, manager)).save();
  }

  //delete
  async deleteManager(userId: string) {
    await this.managerService.findByIdAndDelete(userId);
  }

  //get
  async getRoleByUserIdAndSystemId(
    userId: string,
    systemId: string,
  ): Promise<Role> {
    return await (
      await this.managerService.findOne({ userId, systemId })
    ).role;
  }

  //getAll
  async getManagers() {
    return await this.managerService.find().exec();
  }
}
