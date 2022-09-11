import { IsEmail, IsNotEmpty, IsString, IsEnum, Length, IsNumber } from 'class-validator';
import mongoose from 'mongoose';
import { User, UserSchema } from '../user/user.model';

export enum Status {
  sent,
  pending,
  approve,
  reject,
}

export const RequestSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  systemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'System',
    required: true,
  },
  display_name: { type: String, required: true },
  status: { type: String, enum: Status, required: true },
  notes: { type: String, required: false },
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
});

export class Request {
  @IsNotEmpty()
  @IsString()
  firstName: string;
  @IsNotEmpty()
  @IsString()
  lastName: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @IsString()
  @Length(9, 10)
  phone: string;
  @IsNotEmpty()
  @IsString()
  systemId: string;
  @IsNotEmpty()
  @IsString()
  display_name: string;
  @IsNotEmpty()
  @IsEnum(Status)
  status: Status;
  @IsString()
  notes: string;
  @IsNotEmpty()
  @IsNumber()
  lat: number;
  @IsNotEmpty()
  @IsNumber()
  lng: number;
}
