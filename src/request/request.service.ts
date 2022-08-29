import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Request } from './request.model';
import { InjectModel } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';

@Injectable()
export class RequestService {
    constructor(
        @InjectModel('Request') private readonly requestModel: Model<Request>,
    ) { }

    //post
    async createRequest(request: Request) {
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
    async getRequestById(Id: string) {
        return await this.requestModel.find({ Id }).exec();
    }

    //get
    async getRequests() {
        return await this.requestModel.find().exec();
    }
}
