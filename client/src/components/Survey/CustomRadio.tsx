import { FC } from "react";

interface OwnProps {
  id: number;
  value: number | null;
  setValue: (id: number, value: number) => void;
}

const CustomRadio: FC<OwnProps> = ({ id, value, setValue }) => {
  return (
    <div className="relative w-fit mx-auto pt-2">
      <span className="absolute top-0 left-1 dark:text-neutral-300">
        매우 아니다
      </span>
      <div className="flex justify-center items-center mt-5 w-full">
        <button
          className={`flex justify-center items-center w-8 h-8 lg:w-14 lg:h-14 border rounded-full border-rose-400 mx-4 hover:bg-rose-400 transition-all hover:scale-110 ${
            value === 0 && "bg-rose-500"
          }`}
          onClick={() => setValue(id, 0)}
        >
          <span className={`${value === 0 ? "inline" : "hidden"}`}>
            <Check />
          </span>
        </button>
        <button
          className={`flex justify-center items-center w-6 h-6 lg:w-12 lg:h-12 border rounded-full border-rose-300 mx-4 hover:bg-rose-300 transition-all hover:scale-110 ${
            value === 1 && "bg-rose-400"
          }`}
          onClick={() => setValue(id, 1)}
        >
          <span className={`${value === 1 ? "inline" : "hidden"}`}>
            <Check />
          </span>
        </button>
        <button
          className={`flex justify-center items-center w-5 h-5 lg:w-10 lg:h-10 border rounded-full border-stone-300 mx-4 hover:bg-stone-300 transition-all hover:scale-110 ${
            value === 2 && "bg-stone-400"
          }`}
          onClick={() => setValue(id, 2)}
        >
          <span className={`${value === 2 ? "inline" : "hidden"}`}>
            <Check />
          </span>
        </button>
        <button
          className={`flex justify-center items-center w-6 h-6 lg:w-12 lg:h-12 border rounded-full border-indigo-300 mx-4 hover:bg-indigo-300 transition-all hover:scale-110 ${
            value === 3 && "bg-indigo-400"
          }`}
          onClick={() => setValue(id, 3)}
        >
          <span className={`${value === 3 ? "inline" : "hidden"}`}>
            <Check />
          </span>
        </button>
        <button
          className={`flex justify-center items-center w-8 h-8 lg:w-14 lg:h-14 border rounded-full border-indigo-400 mx-4 hover:bg-indigo-400 transition-all hover:scale-110 ${
            value === 4 && "bg-indigo-500"
          }`}
          onClick={() => setValue(id, 4)}
        >
          <span className={`${value === 4 ? "inline" : "hidden"}`}>
            <Check />
          </span>
        </button>
      </div>
      <span className="absolute top-0 right-1 dark:text-neutral-300">
        매우 그렇다
      </span>
    </div>
  );
};

const Check = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="white"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
};

export default CustomRadio;
