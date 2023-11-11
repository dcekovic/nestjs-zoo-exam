import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, Max, Min, MinLength } from "class-validator";
export class CreateZookeeperDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    name: string;

    @IsNumber()
    @IsNotEmpty()
    @Min(18)
    @Max(110)
    age: number;

    @IsString()
    @IsNotEmpty()
    location: string;

    @IsBoolean()
    @IsOptional()
    isActive: boolean = false;

    @IsNotEmpty()
    animals: string[];
}