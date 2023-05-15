import { FC, useState, useEffect } from "react";
import { FrontEndSurveyTitle } from "./SurveyData/FrontEnd";
import { BackEndSurveyData, BackEndSurveyTitle } from "./SurveyData/BackEnd";
import { FrontEndSurveyData } from "./SurveyData/FrontEnd";
import CustomRadio from "./CustomRadio";
import Evaluation from "./Evaluation";
import { useSurveyStore } from "../../store/SurveyStore";
import { useQueryMutate } from "../../hooks/useQueryFetch";

const Survey: FC = () => {
  const surveyType = useSurveyStore((state) => state.surveyType);
  const surveyResponse = useSurveyStore((state) => state.surveyResponse);
  const setSurveyResponse = useSurveyStore((state) => state.setSurveyResponse);
  const setSurveyState = useSurveyStore((state) => state.setSurveyState);

  const isLogin = localStorage.getItem("token") ? true : false;

  const { mutate } = useQueryMutate("/survey", "post");

  const [page, setPage] = useState(0);
  const [surveyCompleted, setSurveyCompleted] = useState(false);
  const titleList =
    surveyType === "FrontEnd" ? FrontEndSurveyTitle : BackEndSurveyTitle;
  const surveyData =
    surveyType === "FrontEnd" ? FrontEndSurveyData : BackEndSurveyData;

  const [isComplete, setIsComplete] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    setIsComplete(surveyResponse.every((value) => value !== -1) ? true : false);
  }, [surveyResponse]);

  const setValue = (id: number, value: number) => {
    setSurveyResponse(
      surveyResponse.map((item, index) => {
        if (index === id - 1) {
          return value;
        }
        return item;
      })
    );
  };

  const onComplete = async () => {
    setSurveyState("complete");
    if (isLogin) {
      mutate({
        body: {
          category: surveyType,
          response: surveyResponse,
        },
      });
    }

    isComplete && setSurveyCompleted(true);
  };

  return (
    <div className="w-full h-full flex justify-center">
      {!surveyCompleted ? (
        titleList.map((title, index) => (
          <div key={index} className={`${index === page ? "block" : "hidden"}`}>
            <div className="flex flex-row justify-center text-3xl mb-2">
              <button
                className={`${
                  index === 0 ? "hidden" : "block"
                } border rounded-full px-1 transition-all hover:scale-125 hover:bg-neutral-100 dark:bg-neutral-300`}
                onClick={() => setPage(index - 1)}
              >
                <PrevButton />
              </button>
              <h4 className="mx-4 dark:text-neutral-300">{title}</h4>
              <button
                className={`${
                  index === 4 ? "hidden" : "block"
                } border rounded-full px-1 transition-all hover:scale-125 hover:bg-neutral-100 dark:bg-neutral-300`}
                onClick={() => setPage(index + 1)}
              >
                <NextButton />
              </button>
            </div>
            <div className="grid content-evenly my-2">
              {surveyData.map((data, index) => (
                <div
                  key={index}
                  className={`${
                    index === page ? "block" : "hidden"
                  } text-center`}
                >
                  {data.map((item) => (
                    <div className="text-center" key={item.id}>
                      <p className="text-xl my-10 dark:text-neutral-300">
                        {item.content}
                      </p>
                      <CustomRadio
                        id={item.id}
                        value={surveyResponse[item.id - 1]}
                        setValue={setValue}
                      />
                    </div>
                  ))}
                </div>
              ))}
              <button
                className={`${
                  index === 4 ? "hidden" : "block"
                } border-blue-400 rounded-full pr-2 p-2 my-5 text-white bg-blue-400 hover:bg-blue-500 transition-all hover:scale-105`}
                onClick={() => {
                  setPage(index + 1);
                  window.scrollTo(0, 0);
                }}
              >
                다음
              </button>
              <button
                className={`${
                  index === 4 ? "block" : "hidden"
                } relative border-blue-400 rounded-full p-2 my-5 text-white transition-all hover:scale-105 ${
                  isComplete
                    ? "bg-blue-400 hover:bg-blue-500"
                    : "bg-neutral-200 cursor-not-allowed"
                }`}
                onClick={onComplete}
                onMouseOver={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                완료
                <Tooltip show={!isComplete && showTooltip} />
              </button>
            </div>
          </div>
        ))
      ) : (
        <Evaluation values={surveyResponse} type={surveyType} />
      )}
    </div>
  );
};

const PrevButton = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-7 h-7"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
      />
    </svg>
  );
};

const NextButton = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-7 h-7"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
      />
    </svg>
  );
};

interface TooltipProps {
  show: boolean;
}

const Tooltip: FC<TooltipProps> = ({ show }) => {
  return (
    <div
      className={`${
        !show && "hidden"
      } absolute top-[-100%] right-0 bg-blue-400 text-white py-1 px-2 rounded `}
    >
      아직 체크하지 않은 항목이 있습니다
    </div>
  );
};

export default Survey;
