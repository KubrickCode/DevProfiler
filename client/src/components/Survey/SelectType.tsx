import { FC, Dispatch, SetStateAction } from "react";

interface SurveyMode {
  state: boolean;
  type: string;
}

interface OwnProps {
  setSurveyMode: Dispatch<SetStateAction<SurveyMode>>;
}

const SelectType: FC<OwnProps> = ({ setSurveyMode }) => {
  const startSurvey = (type: string) => {
    setSurveyMode({ state: true, type });
  };

  return (
    <div className="grid justify-items-center h-[80%]">
      <h3 className="text-3xl">검사 유형을 선택하세요</h3>
      <div className="grid justify-items-center">
        <button
          className="block text-2xl border my-2 rounded-2xl px-5 min-w-full hover:bg-neutral-100"
          onClick={() => startSurvey("FrontEnd")}
        >
          프론트엔드 역량 검사
        </button>
        <button
          className="block text-2xl border my-2 rounded-2xl px-5 min-w-full hover:bg-neutral-100"
          onClick={() => startSurvey("BackEnd")}
        >
          백엔드 역량 검사
        </button>
      </div>
    </div>
  );
};

export default SelectType;
