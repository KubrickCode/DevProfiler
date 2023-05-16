import { FC, useState } from "react";
import { useSettingModalStore } from "../../../store/ModalStore";

const Setting: FC = () => {
  const settingModalState = useSettingModalStore(
    (state) => state.settingModalState
  );
  const setSettingModalState = useSettingModalStore(
    (state) => state.setSettingModalState
  );

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
          <h4 className="text-center mb-7 flex flex-row justify-center text-2xl">
            회원 정보 설정
          </h4>
          <div>
            <button
              className="border border-neutral-500 text-neutral-500 block w-full rounded-lg px-4 py-2 my-2 transition-all duration-500 hover:bg-neutral-300"
              onClick={() => {
                setChangeMode(!changeMode);
                setDropMode(false);
              }}
            >
              비밀번호 변경
            </button>
            <form className={changeMode ? "block" : "hidden"}>
              <label className="text-sm">현재 비밀번호</label>
              <input type="password" className="block border my-1 rounded" />
              <label className="text-sm">새 비밀번호</label>
              <input type="password" className="block border my-1 rounded" />
              <div className="text-center text-red-500">
                현재 비밀번호를 확인해주세요
              </div>
              <div className="flex flex-row justify-center my-3">
                <button className="border rounded-lg px-2 py-1 mx-1 transition-all duration-500 hover:bg-neutral-100">
                  확인
                </button>
                <button
                  className="border rounded-lg px-2 py-1 mx-1 transition-all duration-500 hover:bg-neutral-100"
                  onClick={(e) => {
                    e.preventDefault();
                    setChangeMode(!changeMode);
                  }}
                >
                  취소
                </button>
              </div>
            </form>
          </div>
          <div>
            <button
              className="border border-red-300 text-red-500 block w-full rounded-lg px-4 py-2 my-2 transition-all duration-500 hover:bg-red-100"
              onClick={() => {
                setDropMode(!dropMode);
                setChangeMode(false);
              }}
            >
              회원탈퇴
            </button>
            <form className={dropMode ? "block" : "hidden"}>
              <label className="text-sm">비밀번호 확인</label>
              <input type="password" className="block border my-1 rounded" />
              <div className="text-center text-red-500">
                현재 비밀번호를 확인해주세요
              </div>
              <div className="flex flex-row justify-center my-3">
                <button className="border rounded-lg px-2 py-1 mx-1 transition-all duration-500 hover:bg-neutral-100">
                  확인
                </button>
                <button
                  className="border rounded-lg px-2 py-1 mx-1 transition-all duration-500 hover:bg-neutral-100"
                  onClick={(e) => {
                    e.preventDefault();
                    setDropMode(!dropMode);
                  }}
                >
                  취소
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Setting;
