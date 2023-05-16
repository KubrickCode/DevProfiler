import { FC, useState } from "react";
import { useQueryGet } from "../../hooks/useQueryFetch";
import Evaluation from "../Survey/Evaluation";
import { useConfirmModalStore } from "../../store/ModalStore";

export interface SurveyType {
  id: number;
  user_id: number;
  category: string;
  response: number[];
}

const MyPage: FC = () => {
  const { data } = useQueryGet("/survey", "getSurvey");
  const [open, setOpen] = useState([false, false]);

  const setConfirmModalState = useConfirmModalStore(
    (state) => state.setConfirmModalState
  );

  return (
    <div className="px-5 sm:px-20 md:px-40 lg:px-60 xl:px-80">
      {data?.length > 0 ? (
        data?.map((item: SurveyType, index: number) => (
          <div key={item.id} className="mt-10 relative">
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
            <button
              className={`${
                open[index] ? "" : "hidden"
              } absolute right-4 top-28`}
              onClick={() =>
                setConfirmModalState(true, "deleteSurvey", item.id)
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </div>
        ))
      ) : (
        <h4 className="text-center dark:text-neutral-300">
          아직 검사기록이 없습니다
        </h4>
      )}
    </div>
  );
};

export default MyPage;
