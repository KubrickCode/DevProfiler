import { FC, useState } from "react";
import { useQueryGet } from "../../hooks/useQueryFetch";
import Evaluation from "../Survey/Evaluation";

interface Survey {
  id: number;
  user_id: number;
  category: string;
  response: number[];
}

const MyPage: FC = () => {
  const { data } = useQueryGet("/survey", "getSurvey");
  const [open, setOpen] = useState([false, false]);

  return (
    <div className="px-5 sm:px-20 md:px-40 lg:px-60 xl:px-80">
      {data?.map((item: Survey, index: number) => (
        <div key={item.id} className="mt-10">
          <button
            className="relative w-full text-center bg-blue-400 my-5 p-5 rounded-2xl hover:bg-blue-500"
            onClick={() => {
              const newOpen = [...open];
              newOpen[index] = !newOpen[index];
              setOpen(newOpen);
            }}
          >
            <span className="text-white">
              {item.category === "FrontEnd"
                ? "프론트엔드 검사 결과"
                : "백엔드 검사 결과"}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-6 h-6 absolute right-5 top-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
          <div
            className={`overflow-hidden transform transition-transform duration-500 flex justify-center ${
              open[index] ? "h=full scale-y-100" : "h-0 scale-y-0"
            }`}
          >
            <Evaluation values={item.response} type={item.category} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyPage;
