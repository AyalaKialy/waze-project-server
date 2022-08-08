import { IsEmail, IsEmpty, IsNotEmpty, Length } from "class-validator";
import * as mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true }
});

export class User {
    @IsNotEmpty()
    @Length(2)
    name: string;
    @IsEmail()
    @IsNotEmpty()
    email: string;
}