import { FC } from "react";
import SelectType from "./SelectType/SelectType";
import Survey from "./Survey";
import { useSurveyStore } from "../../store/SurveyStore";

const Main: FC = () => {
  const surveyState = useSurveyStore((state) => state.surveyState);
  return (
    <main className="p-10 h-[80%]">
      <div className={`h-full ${surveyState && "hidden"}`}>
        <SelectType />
      </div>
      <div className={`${!surveyState && "hidden"}`}>
        <Survey />
      </div>
    </main>
  );
};

export default Main;
