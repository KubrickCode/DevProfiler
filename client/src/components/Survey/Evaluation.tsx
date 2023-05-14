import { FC, useState } from "react";
import { BackEndSurveyData, BackEndSurveyTitle } from "./SurveyData/BackEnd";
import { FrontEndSurveyData, FrontEndSurveyTitle } from "./SurveyData/FrontEnd";
import { frontEndfeedback } from "./SurveyData/FronEndFeedbacks";
import { backEndfeedback } from "./SurveyData/BackEndFeedbacks";

interface ownProps {
  values: number[];
  type: string;
}

const Evaluation: FC<ownProps> = ({ values, type }) => {
  const [open, setOpen] = useState(Array(5).fill(false));

  const titleList =
    type === "FrontEnd" ? FrontEndSurveyTitle : BackEndSurveyTitle;
  const surveyData =
    type === "FrontEnd" ? FrontEndSurveyData : BackEndSurveyData;
  const feedbacks = type === "FrontEnd" ? frontEndfeedback : backEndfeedback;

  const calculateCompetency = (values: number[]) => {
    const totalScore = values.reduce((acc, curr) => acc + curr, 0);

    let competency;
    if (totalScore === 100) {
      competency = "개발의 신";
    } else if (totalScore >= 80) {
      competency = "개발 고수";
    } else if (totalScore >= 60) {
      competency = "멋진 개발자";
    } else if (totalScore >= 40) {
      competency = "공부가 필요한 개발자";
    } else if (totalScore >= 20) {
      competency = "코린이";
    } else if (totalScore === 0) {
      competency = "개발자가 맞나요?";
    }

    return { totalScore, competency };
  };

  return (
    <div className="max-w-[70%]">
      <div className="text-2xl dark:text-neutral-300 text-center">
        <span className="mr-2">
          {calculateCompetency(values).totalScore}점!
        </span>
        <span>당신은 {calculateCompetency(values).competency}</span>
      </div>
      <p className="text-center dark:text-neutral-200 mb-5 mt-2">
        아래 각 항목을 클릭해서 피드백을 읽어보세요
      </p>
      <div>
        {titleList.map((item, index) => (
          <div className="border px-4 py-3 my-3 rounded-xl" key={index}>
            <button
              className="flex justify-between w-full"
              onClick={() => {
                const newOpen = [...open];
                newOpen[index] = !newOpen[index];
                setOpen(newOpen);
              }}
            >
              <span className="dark:text-neutral-300 text-2xl">
                {item.substring(0, item.length - 5)}
              </span>
              <span
                className={`transition-transform ${
                  open[index] && "rotate-180"
                }`}
              >
                👇
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                open[index] ? "max-h-96" : "max-h-0"
              }`}
            >
              {surveyData[index].map((question, i) => (
                <div
                  key={question.id}
                  className="my-5 dark:text-neutral-100 text-lg"
                >
                  {`${question.id}) `}
                  {
                    feedbacks[question.id][
                      values[index * surveyData[index].length + i]
                    ]
                  }
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Evaluation;
