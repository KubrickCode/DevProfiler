import { UserPros } from './user.swagger.type';

const GetUserResponse = {
  status: 201,
  description:
    '사용자 정보 제공 성공. 이 작업은 사용자 스키마에서 일부 정보를 반환합니다. \n\n 제공된 정보: \n - `id`: 사용자의 고유 ID \n - `email`: 사용자 이메일 \n - `provider`: 사용자 정보 관리 조직 ("Local", "Google", "Kakao")',
  type: UserPros,
};

export { GetUserResponse };
