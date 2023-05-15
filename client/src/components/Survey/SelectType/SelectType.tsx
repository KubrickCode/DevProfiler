import { FC } from "react";
import SelectTypeButton from "./SelectTypeButton";

const SelectType: FC = () => {
  return (
    <div className="grid justify-items-center h-[80%]">
      <h3 className="text-3xl dark:text-neutral-300 font-bold">
        검사 유형을 선택하세요
      </h3>
      <div className="grid justify-items-center">
        <SelectTypeButton type={"FrontEnd"} />
        <SelectTypeButton type={"BackEnd"} />
      </div>
    </div>
  );
};

export default SelectType;
