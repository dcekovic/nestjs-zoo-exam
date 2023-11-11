import { Gender } from "../../enums/gender.enum";
import { IZookeeper } from "src/zookeeper/zookeeper.model";
import { EditCharacteristics } from "../characteristic.dto";
export declare class EditAnimalDto {
    name: string;
    type: string;
    age: number;
    location: string;
    gender: Gender;
    characteristics: EditCharacteristics;
    zookeeper: IZookeeper;
}
