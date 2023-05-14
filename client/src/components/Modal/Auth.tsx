import { FC, useState } from "react";
import { useDialog } from "react-st-modal";

const Auth: FC = () => {
  const dialog = useDialog();

  const [value, setValue] = useState("");

  return (
    <div>
      <div>
        <button>로그인</button>
        <button>회원가입</button>
      </div>
      <div>
        <input type="text" className="border" />
        <input type="text" className="border" />
        <button
          onClick={() => {
            dialog.close(value);
          }}
        >
          닫기
        </button>
      </div>
    </div>
  );
};

export default Auth;
