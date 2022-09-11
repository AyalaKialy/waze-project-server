import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
import mongoose from 'mongoose';
import { User, UserSchema } from '../user/user.model';
import { ObjectId } from 'mongodb';

export const SystemSchema = new mongoose.Schema({
  topic: { type: String, required: true },
  objectName: { type: String, required: true },
  managerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  description: { type: String, required: true },
  urlName: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  systemUrl: { type: String, required: true },
});

export class System {
  @IsNotEmpty()
  @Length(2)
  @IsString()
  topic: string;
  @IsNotEmpty()
  @Length(2)
  @IsString()
  objectName: string;
  @IsNotEmpty()
  @IsString()
  managerId: string;
  @IsNotEmpty()
  @IsString()
  description: string;
  @IsNotEmpty()
  @IsString()
  urlName: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @IsString()
  @Length(9, 10)
  phone: string;
  @IsNotEmpty()
  @IsString()
  systemUrl: string;
}
