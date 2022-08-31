import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { Location } from './location.model';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class LocationService {
  constructor(
    @InjectModel('Location') private readonly locationModel: Model<Location>,
  ) { }

  //post
  async createLoction(location: Location) {
    return await (await this.locationModel.create(location)).save();
  }
  //put
  async updateLocation(locationId: string, location: Location) {
    return await (
      await this.locationModel.findByIdAndUpdate(locationId, location)
    ).save();
  }
  //delete
  async deleteLocation(locationId: string) {
    return await await this.locationModel.findByIdAndDelete(locationId);
  }
  //get
  async getLocationBysystemId(systemId: string) {
    return await this.locationModel.find({ systemId }).exec();
  }

  //get
  async getLocations() {
    return await this.locationModel.find().exec();
  }
}
