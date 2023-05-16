import { FC, useState, useMemo } from "react";
import { BackEndSurveyData, BackEndSurveyTitle } from "./SurveyData/BackEnd";
import { FrontEndSurveyData, FrontEndSurveyTitle } from "./SurveyData/FrontEnd";
import { frontEndfeedback } from "./SurveyData/FronEndFeedbacks";
import { backEndfeedback } from "./SurveyData/BackEndFeedbacks";
import { useAuthModalStore } from "../../store/ModalStore";
import { Chart as ChartJS, CategoryScale } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale);

interface ownProps {
  values: number[];
  type: string;
}

const Evaluation: FC<ownProps> = ({ values, type }) => {
  const setAuthModalState = useAuthModalStore(
    (state) => state.setAuthModalState
  );
  const [open, setOpen] = useState(Array(5).fill(false));
  const isLogin = localStorage.getItem("token") ? true : false;

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
      <div className="text-2xl text-center">
        <span className="mr-2 font-extrabold dark:text-neutral-100">
          {calculateCompetency(values).totalScore}점!
        </span>
        <span className="dark:text-neutral-200">
          당신은 {calculateCompetency(values).competency}
        </span>
      </div>
      <p className="text-center dark:text-neutral-200 mb-5 mt-2">
        아래 각 항목을 클릭해서 평가 및 피드백을 읽어보세요
      </p>
      <div>
        {titleList.map((item, index) => (
          <div
            className="border px-4 py-3 my-3 rounded-xl dark:bg-neutral-600 transition-all hover:scale-[1.03] dark:border-neutral-600 hover:bg-neutral-100 "
            key={index}
          >
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
                open[index] ? "max-h-[2000px]" : "max-h-0"
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
        <UserChart values={values} titleList={titleList} />
        <button
          className={`${
            isLogin && "hidden"
          } w-full text-center border px-4 py-3 my-3 rounded-xl bg-blue-500 hover:bg-blue-400 text-white dark:bg-neutral-600 transition-all hover:scale-[1.03] dark:border-neutral-600`}
          onClick={() => setAuthModalState(true)}
        >
          💥 로그인하고 저장하기 💥
        </button>
      </div>
    </div>
  );
};

interface ChartProps {
  values: number[];
  titleList: string[];
}

const UserChart = ({ values, titleList }: ChartProps) => {
  const chartConfig = useMemo(() => {
    const labels = titleList.map((title) =>
      title.substring(0, title.length - 5)
    );
    const barData = Array(5)
      .fill(0)
      .map(
        (_, i) =>
          (values.slice(i * 5, i * 5 + 5).reduce((acc, curr) => acc + curr, 0) /
            20) *
          100
      );

    const colors = [
      "rgb(54, 162, 235)",
      "rgb(255, 99, 132)",
      "rgb(75, 192, 192)",
      "rgb(153, 102, 255)",
      "rgb(255, 159, 64)",
    ];

    const datasets = [
      {
        label: "data",
        data: barData,
        backgroundColor: colors,
      },
    ];

    return {
      labels,
      datasets,
    };
  }, [values, titleList]);

  const options = {
    responsive: true,
    scales: {
      y: {
        min: 0,
        max: 100,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "개발 역량 평가 그래프",
      },
    },
  };

  return (
    <>
      <Bar data={chartConfig} options={options} />
    </>
  );
};

export default Evaluation;
