import { Types } from "mongoose";
import { Gender } from "src/animal/enums/gender.enum";
import { CreateCharacteristics } from "../characteristic.dto";
export declare class CreateAnimalDto {
    name: string;
    type: string;
    age: number;
    location: string;
    gender: Gender;
    characteristics: CreateCharacteristics;
    zookeeperId: Types.ObjectId;
}
