import { IsBoolean, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString, IsUUID, Min, MinLength } from "class-validator";
import { Type } from "class-transformer";
import { Types } from "mongoose";
import { Gender } from "src/animal/enums/gender.enum";
import { CreateCharacteristics } from "../characteristic.dto";

export class CreateAnimalDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    name: string;

    @IsNotEmpty()
    @IsString()
    type: string;

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    age: number;

    @IsNotEmpty()
    @IsString()
    location: string;

    @IsNotEmpty()
    @IsString()
    gender: Gender;

    @IsNotEmpty()
    @IsObject()
    @Type(() => CreateCharacteristics)
    characteristics: CreateCharacteristics;

    @IsNotEmpty()
    zookeeperId: Types.ObjectId;
  }