import { FC } from "react";

interface CustomRadioProps {
  id: number;
  value: number | null;
  setValue: (id: number, value: number) => void;
}

const CustomRadio: FC<CustomRadioProps> = ({ id, value, setValue }) => {
  return (
    <div className="relative w-fit mx-auto pt-2">
      <span className="absolute top-0 left-1 dark:text-neutral-300">
        매우 아니다
      </span>
      <div className="mt-5 w-full">
        <button
          className={`w-8 h-8 lg:w-14 lg:h-14 border rounded-full mx-4 hover:bg-rose-300 ${
            value === 0 && "bg-rose-400"
          }`}
          onClick={() => setValue(id, 0)}
        ></button>
        <button
          className={`w-6 h-6 lg:w-12 lg:h-12 border rounded-full mx-4 hover:bg-rose-100 ${
            value === 1 && "bg-rose-200"
          }`}
          onClick={() => setValue(id, 1)}
        ></button>
        <button
          className={`w-5 h-5 lg:w-10 lg:h-10 border rounded-full mx-4 hover:bg-stone-100 ${
            value === 2 && "bg-stone-300"
          }`}
          onClick={() => setValue(id, 2)}
        ></button>
        <button
          className={`w-6 h-6 lg:w-12 lg:h-12 border rounded-full mx-4 hover:bg-indigo-100 ${
            value === 3 && "bg-indigo-200"
          }`}
          onClick={() => setValue(id, 3)}
        ></button>
        <button
          className={`w-8 h-8 lg:w-14 lg:h-14 border rounded-full mx-4 hover:bg-indigo-300 ${
            value === 4 && "bg-indigo-400"
          }`}
          onClick={() => setValue(id, 4)}
        ></button>
      </div>
      <span className="absolute top-0 right-1 dark:text-neutral-300">
        매우 그렇다
      </span>
    </div>
  );
};

export default CustomRadio;
