import { Model, ObjectId } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.model';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

    //post
    async createUser(user: User) {
        await (await this.userModel.create(user)).save();
    }

    //put
    async updateUser(userId: string, user: User) {
        await (await this.userModel.findByIdAndUpdate(userId, user)).save();
    }

    //delete
    async deleteUser(userId: string) {
        await (await this.userModel.findByIdAndDelete(userId)).save();
    }

    //get
    async getUserById(userId: string) {
        return await this.userModel.findOne({ _id: userId }).exec();
    }

    //get
    async getUsers() {
        return await this.userModel.find().exec();
    }
}
