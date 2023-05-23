import { UserProps } from './user.swagger.type';

const GetUserResponse = {
  status: 201,
  description:
    '사용자 정보 제공\n\n 제공된 정보: \n - `id`: 사용자의 고유 ID \n - `email`: 사용자 이메일 \n - `provider`: 사용자 정보 관리 조직 ("Local", "Google", "Kakao")',
  type: UserProps,
};

export { GetUserResponse };
