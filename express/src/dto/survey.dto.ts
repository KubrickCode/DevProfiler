import { IsIn, IsArray, IsNotEmpty, IsInt } from "class-validator";
export class surveyDto {
  @IsIn(["FrontEnd", "BackEnd"], { message: "유효하지 않은 요청입니다." })
  category: string = "";

  @IsArray({ message: "유효하지 않은 요청입니다" })
  @IsNotEmpty({ message: "유효하지 않은 요청입니다" })
  response: number[] = [];
}

export class updateSurveyDto {
  @IsInt()
  id: number = 0;

  @IsArray({ message: "유효하지 않은 요청입니다" })
  @IsNotEmpty({ message: "유효하지 않은 요청입니다" })
  response: number[] = [];
}
