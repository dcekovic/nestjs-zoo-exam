import { IsBoolean, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString, IsUUID, Min, MinLength } from "class-validator";
import { Gender } from "../../enums/gender.enum";
import { CreateCharacteristics, PreviewCharacteristic } from "../characteristic.dto";
import { IZookeeper } from "src/zookeeper/zookeeper.model";
import { ZookeeperAnimalResponseDto } from "./zookeeper-animal-response.dto";

export class AnimalResponseDto {

    id: string;

    name: string;

    type: string;

    age: number;

    location: string;

    gender: string;

    characteristics: PreviewCharacteristic;

    zookeeper: ZookeeperAnimalResponseDto;
}