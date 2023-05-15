import { IsIn, IsArray, IsNotEmpty } from "class-validator";
export class surveyDto {
  @IsIn(["FrontEnd", "BackEnd"], { message: "유효하지 않은 요청입니다." })
  category: string = "";

  @IsArray({ message: "유효하지 않은 요청입니다" })
  @IsNotEmpty({ message: "유효하지 않은 요청입니다" })
  response: number[] = [];
}
