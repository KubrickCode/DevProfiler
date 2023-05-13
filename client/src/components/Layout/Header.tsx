import { FC } from "react";

const Header: FC = () => {
  const isLogin = false;
  return (
    <header className="flex flex-row justify-between p-3 h-[10%]">
      <div className="flex flex-row items-center">
        <h1 className="text-2xl mr-5">DevProfiler</h1>
        <h2>웹 개발 역량 검사</h2>
      </div>
      <div className="flex flex-row items-center">
        <button className={!isLogin && "hidden"}>마이페이지</button>
        <button className="mx-5">다크모드</button>
        <button className={isLogin ? "hidden" : "inline"}>로그인</button>
        <button className={!isLogin && "hidden"}>로그인됨</button>
      </div>
    </header>
  );
};

export default Header;
