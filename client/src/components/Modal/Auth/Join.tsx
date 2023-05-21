import { FC, useEffect, useState } from "react";
import { useSign } from "../../../hooks/useSign";
import { useAuthModalStore } from "../../../store/ModalStore";
import { AxiosError } from "axios";
import { useSurveyStore } from "../../../store/SurveyStore";
import { useQueryMutate } from "../../../hooks/useQueryFetch";

const Join: FC = () => {
  const setAuthModalState = useAuthModalStore(
    (state) => state.setAuthModalState
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);

  const [isValid, setIsValid] = useState(false);
  const [errMsg, setErrMsg] = useState(null);

  const surveyState = useSurveyStore((state) => state.surveyState);
  const surveyResponse = useSurveyStore((state) => state.surveyResponse);
  const surveyType = useSurveyStore((state) => state.surveyType);

  const { mutate: join } = useSign("/auth");
  const { mutate: setResponse } = useQueryMutate("/survey", "post");

  useEffect(() => {
    const regEmail = RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    const regPassword = RegExp(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,20}$/
    );
    setEmailValid(regEmail.test(email));
    setPasswordValid(regPassword.test(password));
    setConfirmPasswordValid(password === confirmPassword);
  }, [email, password, confirmPassword]);

  useEffect(() => {
    if (emailValid && passwordValid && confirmPasswordValid) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [emailValid, passwordValid, confirmPasswordValid]);

  const inValidStyle = "outline-red-500 border-red-500";

  const onSubmit = async () => {
    join(
      {
        body: { email, password },
      },
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
          if (err instanceof AxiosError) setErrMsg(err.response?.data.message);
        },
      }
    );
  };

  return (
    <form>
      <h1 className="text-center text-xl font-bold mb-5 dark:text-neutral-300">
        회원가입
      </h1>
      <div className="mb-5">
        <label className="block text-sm mb-1 dark:text-neutral-300">
          이메일
        </label>
        <input
          type="text"
          value={email}
          placeholder="example@email.com"
          onChange={(e) => setEmail(e.target.value)}
          className={`border w-full py-2 px-4 rounded-full outline-blue-300 ${
            email && !emailValid && inValidStyle
          }`}
        />
        <span
          className={`ml-2 text-red-500 block ${
            (!email || emailValid) && "hidden"
          }`}
        >
          이메일 형식을 확인하세요
        </span>
      </div>
      <div className="mb-5">
        <label className="block text-sm mb-1 dark:text-neutral-300">
          비밀번호
        </label>
        <input
          type="password"
          value={password}
          placeholder="6~20자 영문,숫자,특수문자 혼합"
          onChange={(e) => setPassword(e.target.value)}
          className={`border w-full py-2 px-4 rounded-full outline-blue-300 ${
            password && !passwordValid && inValidStyle
          }`}
        />
        <span
          className={`ml-2 text-red-500 block ${
            (!password || passwordValid) && "hidden"
          }`}
        >
          비밀번호 형식을 확인하세요
        </span>
      </div>
      <div className="mb-5">
        <label className="block text-sm mb-1 dark:text-neutral-300">
          비밀번호 확인
        </label>
        <input
          type="password"
          value={confirmPassword}
          placeholder="6~20자 영문,숫자,특수문자 혼합"
          onChange={(e) => setConfirmPassword(e.target.value)}
          className={`border w-full py-2 px-4 rounded-full outline-blue-300 ${
            confirmPassword && !confirmPasswordValid && inValidStyle
          }`}
        />
        <span
          className={`ml-2 text-red-500 block ${
            (!confirmPassword || confirmPasswordValid) && "hidden"
          }`}
        >
          비밀번호가 일치하지 않습니다
        </span>
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
          className={`mx-1 bg-blue-400 text-white rounded-xl px-4 py-2 hover:bg-blue-500 transition-all duration-500 ${
            !isValid && "bg-neutral-300 hover:bg-neutral-300 cursor-not-allowed"
          }`}
          disabled={!isValid}
          onClick={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          확인
        </button>
        <button
          className="mx-1 bg-blue-400 text-white rounded-xl px-4 py-2 hover:bg-blue-500 transition-all duration-500"
          onClick={(e) => {
            e.preventDefault();
            setAuthModalState(false);
          }}
        >
          닫기
        </button>
      </div>
    </form>
  );
};

export default Join;
