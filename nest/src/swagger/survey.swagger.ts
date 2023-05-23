import { SurveyProps } from './survey.swagger.type';

const GetSurveyResponse = {
  status: 201,
  description: `검사 결과 배열 제공
  제공된 정보:
  - 'Survey[]': 검사 결과 배열
  - 'Survey' :\n
    id: 검사 결과 고유id(숫자);
  
    user_id: 유저 고유 id(숫자);
  
    category: 카테고리(FrontEnd or BackEnd);

    response: 검사 점수 배열(0~4로 이루어진 길이 25의 배열);
  `,
  type: SurveyProps,
};

export { GetSurveyResponse };
