import { IsNotEmpty, Min, MinLength } from "class-validator";
import { Types } from "mongoose";

export class AssignAnimalsToZookeeeperDto {
    @IsNotEmpty()
    animals: Types.ObjectId[];
}