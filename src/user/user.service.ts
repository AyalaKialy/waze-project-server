import { Model, ObjectId } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.model';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {

  constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

  //post
  async createUser(user: User) {
    await this.userModel.create(user);
  }

  //put
  async updateUser(userId: string, user: User) {
    await this.userModel.findByIdAndUpdate(userId, user);
  }

  //delete
  async deleteUser(userId: string) {
    await this.userModel.findByIdAndDelete(userId);
  }

  //get
  async getUserByUId(uid: string): Promise<User> {
    return await this.userModel.findOne({ uid });
  }

  async getUserById(id: string): Promise<User> {
    return await this.userModel.findOne({ _id: id });
  }

  //get
  async getUsers() {
    return await this.userModel.find().exec();
  }

  // const createdUser = new this.userModel({
  //   name: user.name,
  //   email: user.email
  // });
  // await createdUser.save();
}