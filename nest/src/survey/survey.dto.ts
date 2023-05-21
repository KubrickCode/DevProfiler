import { Category } from '@prisma/client';
import {
  IsArray,
  ArrayMinSize,
  ArrayMaxSize,
  IsInt,
  IsIn,
} from 'class-validator';

class CreateSurveyDto {
  @IsIn([Category.FrontEnd, Category.BackEnd])
  category: Category;

  @IsArray()
  @ArrayMinSize(25)
  @ArrayMaxSize(25)
  @IsInt({ each: true })
  response: number[];
}

class UpdateSurveyDto {
  @IsInt()
  id: number;

  @IsArray()
  @ArrayMinSize(25)
  @ArrayMaxSize(25)
  @IsInt({ each: true })
  response: number[];
}

export { CreateSurveyDto, UpdateSurveyDto };
