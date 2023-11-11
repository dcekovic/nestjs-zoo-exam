
import { IsBoolean, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString, IsUUID, Min, MinLength } from "class-validator";

export interface Characteristics {

    food: string[];

    colour: string;

    isDangerous: boolean;

    weight: number;

    enclosure: string;
}

export class PreviewCharacteristic implements Characteristics {
    food: string[];
    colour: string;
    isDangerous: boolean;
    weight: number;
    enclosure: string;
}

export class CreateCharacteristics implements Characteristics {
    @IsOptional()
    @IsString()
    food: string[];

    @IsOptional()
    @IsString()
    colour: string;

    @IsOptional()
    @IsBoolean()
    isDangerous: boolean = false;

    @IsOptional()
    @IsNumber()
    @Min(0)
    weight: number;

    @IsString()
    @IsNotEmpty()
    enclosure: string;
}

export class EditCharacteristics implements Characteristics {
    @IsOptional()
    @IsString()
    food: string[];

    @IsOptional()
    @IsString()
    colour: string;

    @IsOptional()
    @IsBoolean()
    isDangerous: boolean = false;

    @IsOptional()
    @IsNumber()
    @Min(0)
    weight: number;

    @IsString()
    @IsOptional()
    enclosure: string;
}