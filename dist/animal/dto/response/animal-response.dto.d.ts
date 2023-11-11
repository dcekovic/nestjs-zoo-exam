import { PreviewCharacteristic } from "../characteristic.dto";
import { ZookeeperAnimalResponseDto } from "./zookeeper-animal-response.dto";
export declare class AnimalResponseDto {
    id: string;
    name: string;
    type: string;
    age: number;
    location: string;
    gender: string;
    characteristics: PreviewCharacteristic;
    zookeeper: ZookeeperAnimalResponseDto;
}
