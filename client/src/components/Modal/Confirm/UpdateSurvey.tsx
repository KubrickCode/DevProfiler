import { FC } from "react";
import { useQueryGet, useQueryMutate } from "../../../hooks/useQueryFetch";
import { useSurveyStore } from "../../../store/SurveyStore";
import { SurveyType } from "../../MyPage/MyPage";

const UpdateSurvey: FC = () => {
  const surveyType = useSurveyStore((state) => state.surveyType);
  const surveyResponse = useSurveyStore((state) => state.surveyResponse);

  const { data } = useQueryGet("/survey", "getSurvey");
  const { mutate: updateResponse } = useQueryMutate("/survey", "patch");

  const onSubmit = async () => {
    const [result] = data.filter(
      (item: SurveyType) => item.category === surveyType
    );
    updateResponse(
      {
        body: {
          id: result.id,
          response: surveyResponse,
        },
      },
      {
        onSuccess: () => {
          location.href = "/my-page";
        },
      }
    );
  };

  return (
    <>
      <h4 className="text-center text-2xl">
        이미 해당 유형 검사 결과가 존재합니다.
      </h4>
      <p className="text-center text-lg mt-5">
        현재 검사결과로 덮어쓰시겠습니까?
      </p>
      <div className="flex flex-row justify-center my-3">
        <button
          className="rounded-xl mx-1 bg-blue-400 text-white rounded-xl px-4 py-2 hover:bg-blue-500 transition-all duration-500"
          onClick={onSubmit}
        >
          확인
        </button>
        <button
          className="rounded-xl mx-1 bg-blue-400 text-white rounded-xl px-4 py-2 hover:bg-blue-500 transition-all duration-500"
          onClick={() => {
            location.href = "/my-page";
          }}
        >
          취소
        </button>
      </div>
    </>
  );
};

export default UpdateSurvey;
