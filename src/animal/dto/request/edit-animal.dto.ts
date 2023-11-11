import { IsBoolean, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString, IsUUID, Min, MinLength } from "class-validator";
import { Gender } from "../../enums/gender.enum";
import { IZookeeper } from "src/zookeeper/zookeeper.model";
import { EditCharacteristics } from "../characteristic.dto";

export class EditAnimalDto {
  @IsOptional()
  @IsString()
  @MinLength(2)
  name: string;

  @IsOptional()
  @IsString()
  type: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  age: number;

  @IsOptional()
  @IsString()
  location: string;

  @IsOptional()
  @IsString()
  gender: Gender;

  @IsOptional()
  @IsObject()
  characteristics: EditCharacteristics;

  @IsObject()
  @IsUUID()
  zookeeper: IZookeeper;
}