import { FC, useState } from "react";
import { useSettingModalStore } from "../../../store/ModalStore";
import ChangePassword from "./ChangePassword";
import DropUser from "./DropUser";
import { useQueryGet } from "../../../hooks/useQueryFetch";

const Setting: FC = () => {
  const settingModalState = useSettingModalStore(
    (state) => state.settingModalState
  );
  const setSettingModalState = useSettingModalStore(
    (state) => state.setSettingModalState
  );
  const isLogin = localStorage.getItem("token") ? true : false;
  const { data } = useQueryGet("/user", "getUser", { enabled: !!isLogin });

  const [changeMode, setChangeMode] = useState(false);
  const [dropMode, setDropMode] = useState(false);

  if (!settingModalState) return null;
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
        <div
          className="fixed inset-0 bg-black opacity-70"
          onClick={() => setSettingModalState(false)}
        ></div>
        <div className="relative bg-white p-10 pb-5 overflow-hidden z-60 rounded-3xl dark:bg-neutral-700 min-w-[300px]">
          <h4 className="text-center mb-7 flex flex-row justify-center text-2xl dark:text-neutral-300 relative">
            회원 정보 설정
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 absolute top-[-30px] right-[-30px] cursor-pointer"
              onClick={() => setSettingModalState(false)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </h4>
          {data?.provider === "Local" && (
            <ChangePassword
              changeMode={changeMode}
              setChangeMode={setChangeMode}
              setDropMode={setDropMode}
            />
          )}
          <DropUser
            data={data}
            dropMode={dropMode}
            setDropMode={setDropMode}
            setChangeMode={setChangeMode}
          />
        </div>
      </div>
    </>
  );
};

export default Setting;
