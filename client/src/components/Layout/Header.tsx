import { FC } from "react";
import DarkModeBtn from "./DarkModeBtn";
import { usePersistStore } from "../../store/GlobalStore";
import { useModalStore } from "../../store/ModalStore";

const Header: FC = () => {
  const theme = usePersistStore((state) => state.theme);
  const isLogin = false;
  const setModalState = useModalStore((state) => state.setModalState);

  return (
    <header className="flex flex-row justify-between p-3 h-[10%]">
      <div className="flex flex-row items-center">
        <button onClick={() => (location.href = "/")}>
          <h1>
            <span className="hidden sm:block text-2xl mx-5 font-bold dark:text-neutral-300">
              DevProfiler
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke={theme === "dark" ? "lightgray" : "darkgray"}
              className="ml-5 w-8 h-8 sm:hidden inline"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </h1>
        </button>
        <h2 className={`hidden sm:block text-neutral-400`}>
          웹 개발 역량 검사
        </h2>
      </div>
      <div className="flex flex-row items-center">
        <button className={!isLogin && "hidden"}>마이페이지</button>
        <DarkModeBtn />
        <button
          type="button"
          className={`${
            isLogin ? "hidden" : "inline"
          } py-2.5 px-5 mr-2 text-sm font-medium text-neutral-900 focus:outline-none bg-white rounded-full border border-neutral-200 hover:bg-neutral-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-neutral-200 dark:focus:ring-neutral-700 dark:bg-neutral-800 dark:text-neutral-400 dark:border-neutral-600 dark:hover:text-white dark:hover:bg-neutral-700`}
          onClick={() => setModalState(true)}
        >
          로그인
        </button>
        <button className={!isLogin && "hidden"}>로그인됨</button>
      </div>
    </header>
  );
};

export default Header;
