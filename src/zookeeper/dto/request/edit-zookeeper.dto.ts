import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, Max, Min, MinLength } from "class-validator";
export class EditZookeeperDto {
    @IsString()
    @IsOptional()
    @MinLength(5)
    name: string;

    @IsNumber()
    @IsOptional()
    @Min(18)
    @Max(110)
    age: number;

    @IsString()
    @IsOptional()
    location: string;

    @IsBoolean()
    @IsOptional()
    isActive: boolean = false;

    @IsOptional()
    animals: string[];
}