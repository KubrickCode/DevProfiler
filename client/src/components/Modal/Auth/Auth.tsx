import { FC, useState } from "react";
import Login from "./Login";
import Join from "./Join";
import { useAuthModalStore } from "../../../store/ModalStore";

const Auth: FC = () => {
  const [tab, setTab] = useState("Login");
  const authModalState = useAuthModalStore((state) => state.authModalState);
  const setAuthModalState = useAuthModalStore(
    (state) => state.setAuthModalState
  );

  if (!authModalState) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
        <div
          className="fixed inset-0 bg-black opacity-70"
          onClick={() => setAuthModalState(false)}
        ></div>
        <div className="relative bg-white p-10 overflow-hidden z-60 rounded-3xl dark:bg-neutral-700">
          <div
            className={`${
              tab === "Login" ? "opacity-100" : "h-0 opacity-0"
            } transition-opacity duration-500`}
            style={{
              pointerEvents: tab === "Login" ? "auto" : "none",
            }}
          >
            <Login />
          </div>
          <div
            className={`${
              tab === "Join" ? "opacity-100" : "h-0 opacity-0"
            } transition-opacity duration-500`}
            style={{
              pointerEvents: tab === "Join" ? "auto" : "none",
            }}
          >
            <Join />
          </div>
          <div className="text-center">
            <button
              className={`${
                tab === "Join" && "hidden"
              } mt-7 text-blue-500 hover:text-blue-800`}
              onClick={() => setTab("Join")}
            >
              아직 계정이 없으신가요? 가입 하러가기
            </button>
            <button
              className={`${
                tab === "Login" && "hidden"
              } mt-7 text-blue-500 hover:text-blue-800`}
              onClick={() => setTab("Login")}
            >
              이미 계정이 있으신가요? 로그인 하러가기
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
