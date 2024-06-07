import {
  IsArray,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateCharacterDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  race: string;

  @IsString()
  subrace: string;

  @IsString()
  @IsNotEmpty()
  class: string;

  @MinLength(0)
  @MaxLength(20)
  @IsNotEmpty()
  level: number;

  @IsString()
  @IsNotEmpty()
  ability: string;

  @IsString()
  @IsNotEmpty()
  feat: string;

  @IsString()
  @IsNotEmpty()
  spell: string;

  @IsString()
  @IsNotEmpty()
  alignment: string;

  @IsArray()
  @IsNotEmpty()
  skill: string[];

  @IsArray()
  @IsNotEmpty()
  equipment: string[];
}