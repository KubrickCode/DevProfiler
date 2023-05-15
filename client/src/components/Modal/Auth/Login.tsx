import { FC, useState } from "react";
import { useModalStore } from "../../../store/ModalStore";
import { useSign } from "../../../hooks/useSign";
import { AxiosError } from "axios";
import { useSurveyStore } from "../../../store/SurveyStore";
import { useQueryMutate } from "../../../hooks/useQueryFetch";

const Login: FC = () => {
  const setModalState = useModalStore((state) => state.setModalState);
  const surveyState = useSurveyStore((state) => state.surveyState);
  const surveyResponse = useSurveyStore((state) => state.surveyResponse);
  const surveyType = useSurveyStore((state) => state.surveyType);
  const { mutate: login } = useSign("/user/login");
  const { mutate: setResponse } = useQueryMutate("/survey", "post");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState(null);

  const onSubmit = async () => {
    login(
      { body: { email, password } },
      {
        onSuccess: (data) => {
          localStorage.setItem("token", data.token);
          localStorage.setItem("refreshToken", data.refreshToken);
          if (surveyState === "complete") {
            setResponse({
              body: {
                category: surveyType,
                response: surveyResponse,
              },
            });
            location.href = "/my-page";
          } else {
            location.href = "/";
          }
        },
        onError: (err) => {
          if (err instanceof AxiosError) setErrMsg(err.response?.data);
        },
      }
    );
  };

  return (
    <form>
      <h1 className="text-center text-xl font-bold mb-5">로그인</h1>
      <div>
        <label className="block text-sm mb-1">이메일</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border w-full mb-5 py-2 px-4 rounded-full outline-blue-300"
        />
      </div>
      <div>
        <label className="block text-sm mb-1">비밀번호</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border w-full mb-5 py-2 px-4 rounded-full outline-blue-300"
        />
      </div>
      <div
        className={`${
          !errMsg && "hidden"
        } text-center bg-orange-100 py-2 mb-3 rounded-full text-orange-700`}
      >
        {errMsg}
      </div>
      <div className="flex justify-center">
        <button
          className="mx-1 bg-blue-400 text-white rounded-xl px-4 py-2 hover:bg-blue-500"
          onClick={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          확인
        </button>
        <button
          className="mx-1 bg-blue-400 text-white rounded-xl px-4 py-2 hover:bg-blue-500"
          onClick={(e) => {
            e.preventDefault();
            setModalState(false);
          }}
        >
          닫기
        </button>
      </div>
    </form>
  );
};

export default Login;
