import { FC } from "react";
import { useDialog } from "react-st-modal";

const Join: FC = () => {
  const dialog = useDialog();

  return (
    <div>
      <h1 className="text-center text-xl font-bold mb-5">회원가입</h1>
      <div>
        <label className="block text-sm mb-1">이메일</label>
        <input
          type="text"
          className="border w-full mb-5 py-2 px-4 rounded-full outline-blue-300"
        />
      </div>
      <div>
        <label className="block text-sm mb-1">비밀번호</label>
        <input
          type="password"
          className="border w-full mb-5 py-2 px-4 rounded-full outline-blue-300"
        />
      </div>
      <div>
        <label className="block text-sm mb-1">비밀번호 확인</label>
        <input
          type="password"
          className="border w-full mb-5 py-2 px-4 rounded-full outline-blue-300"
        />
      </div>
      <div className="flex justify-center">
        <button className="mx-1 bg-blue-400 text-white rounded-xl px-4 py-2 hover:bg-blue-500">
          확인
        </button>
        <button
          className="mx-1 bg-blue-400 text-white rounded-xl px-4 py-2 hover:bg-blue-500"
          onClick={() => {
            dialog.close();
          }}
        >
          닫기
        </button>
      </div>
    </div>
  );
};

export default Join;
