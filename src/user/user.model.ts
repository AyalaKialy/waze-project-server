import {
  IsEmail,
  IsEmpty,
  IsEnum,
  IsNotEmpty,
  IsString,
  Length,
} from 'class-validator';
import * as mongoose from 'mongoose';

export enum Role {
  admin,
  manager,
  customer,
}

export const UserSchema = new mongoose.Schema({
  role: { type: String, enum: Role, default: Role.customer },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
});

export class User {
  @IsNotEmpty()
  @IsEnum(Role)
  role: Role;
  @IsNotEmpty()
  @IsString()
  firstName: string;
  @IsNotEmpty()
  @IsString()
  lastName: string;
  @IsNotEmpty()
  @IsString()
  @Length(9, 10)
  phone: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
