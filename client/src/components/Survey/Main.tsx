import { FC, useState } from "react";
import SelectType from "./SelectType";
import Survey from "./Survey";

const Main: FC = () => {
  const [surveyMode, setSurveyMode] = useState({
    state: false,
    type: "",
  });

  return (
    <main className="p-10 h-[80%]">
      <div className={`h-full ${surveyMode.state && "hidden"}`}>
        <SelectType setSurveyMode={setSurveyMode} />
      </div>
      <div className={`${!surveyMode.state && "hidden"}`}>
        <Survey type={surveyMode.type} />
      </div>
    </main>
  );
};

export default Main;
