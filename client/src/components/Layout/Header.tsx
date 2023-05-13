import { FC } from "react";
import DarkModeBtn from "./DarkModeBtn";

const Header: FC = () => {
  const isLogin = false;
  return (
    <header className="flex flex-row justify-between p-3 h-[10%]">
      <div className="flex flex-row items-center">
        <button onClick={() => (location.href = "/")}>
          <h1 className="text-2xl mx-5 font-bold dark:text-neutral-300">
            DevProfiler
          </h1>
        </button>
        <h2 className="text-neutral-400">웹 개발 역량 검사</h2>
      </div>
      <div className="flex flex-row items-center">
        <button className={!isLogin && "hidden"}>마이페이지</button>
        <DarkModeBtn />
        <button
          className={`${
            isLogin ? "hidden" : "inline"
          } mx-5 dark:text-neutral-300`}
        >
          로그인
        </button>
        <button className={!isLogin && "hidden"}>로그인됨</button>
      </div>
    </header>
  );
};

export default Header;
