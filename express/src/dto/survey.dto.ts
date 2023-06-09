import { IsIn, IsArray, IsNotEmpty, IsInt } from "class-validator";
import { Category } from "../db/db.type";
class surveyDto {
  @IsIn(["FrontEnd", "BackEnd"], { message: "유효하지 않은 요청입니다." })
  category: Category = "FrontEnd";

  @IsArray({ message: "유효하지 않은 요청입니다" })
  @IsNotEmpty({ message: "유효하지 않은 요청입니다" })
  response: number[] = [];
}

class updateSurveyDto {
  @IsInt()
  id: number = 0;

  @IsArray({ message: "유효하지 않은 요청입니다" })
  @IsNotEmpty({ message: "유효하지 않은 요청입니다" })
  response: number[] = [];
}

export { surveyDto, updateSurveyDto };
