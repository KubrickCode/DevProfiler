import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, Length, Matches, IsString } from 'class-validator';

class UserPasswordrDto {
  @ApiProperty()
  @IsString({ message: '비밀번호 형식을 확인하세요' })
  @Matches(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,20}$/, {
    message: '비밀번호 형식을 확인하세요(영문+숫자+특수문자)',
  })
  @Length(6, 20, { message: '비밀번호는 6자이상 20자이하로 입력하세요' })
  password: string;
}

class UserDto extends UserPasswordrDto {
  @ApiProperty()
  @IsEmail({}, { message: '이메일 형식을 확인하세요' })
  @Length(5, 255, { message: '이메일은 5자 이상 255자 이하로 입력하세요' })
  email: string;
}

export { UserPasswordrDto, UserDto };
