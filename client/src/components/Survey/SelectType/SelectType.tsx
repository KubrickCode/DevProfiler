import { FC, Dispatch, SetStateAction } from "react";
import SelectTypeButton from "./SelectTypeButton";

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
      <h3 className="text-3xl dark:text-neutral-300 font-bold">
        검사 유형을 선택하세요
      </h3>
      <div className="grid justify-items-center">
        <SelectTypeButton type={"FrontEnd"} startSurvey={startSurvey} />
        <SelectTypeButton type={"BackEnd"} startSurvey={startSurvey} />
      </div>
    </div>
  );
};

export default SelectType;
