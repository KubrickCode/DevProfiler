import { FC, useState, useEffect } from "react";
import { FrontEndSurveyTitle } from "./SurveyData/FrontEnd";
import { BackEndSurveyData, BackEndSurveyTitle } from "./SurveyData/BackEnd";
import { FrontEndSurveyData } from "./SurveyData/FrontEnd";
import CustomRadio from "./CustomRadio";

interface OwnProps {
  type: string;
}

const Survey: FC<OwnProps> = ({ type }) => {
  const [page, setPage] = useState(0);
  const titleList =
    type === "FrontEnd" ? FrontEndSurveyTitle : BackEndSurveyTitle;
  const surveyData =
    type === "FrontEnd" ? FrontEndSurveyData : BackEndSurveyData;

  const [values, setValues] = useState(Array(25).fill(null));
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setIsComplete(values.every((value) => value !== null) ? true : false);
  }, [values]);

  const setValue = (id: number, value: number) => {
    setValues((values) =>
      values.map((item, index) => {
        if (index === id - 1) {
          return value;
        }
        return item;
      })
    );
  };

  return (
    <div className="w-full h-full flex justify-center">
      {titleList.map((title, index) => (
        <div key={index} className={`${index === page ? "block" : "hidden"}`}>
          <div className="flex flex-row justify-center text-3xl mb-2">
            <button
              className={`${
                index === 0 ? "hidden" : "block"
              } border rounded-full pl-2`}
              onClick={() => setPage(index - 1)}
            >
              <PrevButton />
            </button>
            <h4 className="mx-4 dark:text-neutral-300">{title}</h4>
            <button
              className={`${
                index === 4 ? "hidden" : "block"
              } border rounded-full pr-2`}
              onClick={() => setPage(index + 1)}
            >
              <NextButton />
            </button>
          </div>
          <div className="grid content-evenly my-2">
            {surveyData.map((data, index) => (
              <div
                key={index}
                className={`${index === page ? "block" : "hidden"} text-center`}
              >
                {data.map((item) => (
                  <div className="text-center" key={item.id}>
                    <p className="text-xl my-5 dark:text-neutral-300">
                      {item.content}
                    </p>
                    <CustomRadio
                      id={item.id}
                      value={values[item.id - 1]}
                      setValue={setValue}
                    />
                  </div>
                ))}
              </div>
            ))}
            <button
              className={`${
                index === 4 ? "hidden" : "block"
              } border rounded-full pr-2 p-2 my-5 text-white bg-blue-400 hover:bg-blue-500`}
              onClick={() => setPage(index + 1)}
            >
              다음
            </button>
            <button
              className={`${
                index === 4 ? "block" : "hidden"
              } border rounded-full p-2 my-5 text-white ${
                isComplete ? "bg-blue-400" : "bg-neutral-200"
              }`}
              disabled={!isComplete}
            >
              완료
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const PrevButton = () => {
  return (
    <svg
      aria-hidden="true"
      className="w-7 h-7 mr-2 dark:text-neutral-300"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

const NextButton = () => {
  return (
    <svg
      aria-hidden="true"
      className="w-7 h-7 ml-2 dark:text-neutral-300"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default Survey;
