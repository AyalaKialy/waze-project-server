import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  Length,
} from 'class-validator';
import * as mongoose from 'mongoose';
import { User } from '../user/user.model';

export enum Role {
  admin,
  manager,
  //   customer,
}

export const ManagerSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  systemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'System',
    required: true,
  },
  active: { type: Boolean, required: true },
  display_name: { type: String, required: true },
  role: { type: String, enum: Role, required: true },
  // invitation_sent
});

export class Manager {
  @IsNotEmpty()
  @IsString()
  userId: string;
  @IsNotEmpty()
  @IsString()
  systemId: string;
  @IsNotEmpty()
  @IsBoolean()
  active: boolean;
  @IsNotEmpty()
  @IsString()
  display_name: string;
  @IsNotEmpty()
  @IsEnum(Role)
  role: Role;
}
