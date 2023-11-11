import { IsBoolean, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString, IsUUID, Min, MinLength } from "class-validator";
import { Gender } from "../../enums/gender.enum";
import { CreateCharacteristics, PreviewCharacteristic } from "../characteristic.dto";
import { IZookeeper } from "src/zookeeper/zookeeper.model";

export class ZookeeperAnimalResponseDto {

    id: string;

    name: string;

    age: number;

    location: string;
    
    isActive: boolean;
}