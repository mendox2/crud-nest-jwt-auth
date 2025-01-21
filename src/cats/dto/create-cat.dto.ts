import { IsInt, IsOptional, IsPositive, isPositive, IsString, MinLength } from "class-validator";

export class CreateCatDto {

    @IsString()
    @MinLength(2)
    name: string; 

    @IsInt()
    @IsPositive()
    age: number;

    @IsString()
    @IsOptional()
    breed?: string;

}
