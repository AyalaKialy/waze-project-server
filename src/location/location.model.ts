import { IsEmail, IsNotEmpty, IsString, Length, IsNumber } from 'class-validator';
import mongoose from 'mongoose';


export const LocationSchema = new mongoose.Schema({
    managerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Manager', required: false },
    systemId: { type: mongoose.Schema.Types.ObjectId, ref: 'System', required: true },
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
    description: { type: String, required: false },
    name: { type: String, required: true },
    notes: { type: String, required: false },
    email: { type: String, required: true },
    phone: { type: String, required: true },
});

export class Location {
    @IsNotEmpty()
    @IsString()
    managerId: string;
    @IsNotEmpty()
    @IsString()
    systemId: string;
    @IsNotEmpty()
    @IsNumber()
    lat: Number;
    @IsNotEmpty()
    @IsNumber()
    lng: Number;
    @IsNotEmpty()
    @IsString()
    description: String;
    @IsNotEmpty()
    @IsString()
    name: String;
    @IsNotEmpty()
    @IsString()
    notes: String;
    @IsNotEmpty()
    @IsEmail()
    email: string;
    @IsNotEmpty()
    @IsString()
    @Length(9, 10)
    phone: string;
}
