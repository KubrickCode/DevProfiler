import { FC, useState } from "react";
import {
  useAuthModalStore,
  useConfirmModalStore,
} from "../../../store/ModalStore";
import { useSign } from "../../../hooks/useSign";
import { AxiosError } from "axios";
import { useSurveyStore } from "../../../store/SurveyStore";
import { useQueryGet, useQueryMutate } from "../../../hooks/useQueryFetch";
import { SurveyType } from "../../MyPage/MyPage";
import { useQueryClient } from "react-query";

const Login: FC = () => {
  const setAuthModalState = useAuthModalStore(
    (state) => state.setAuthModalState
  );
  const surveyState = useSurveyStore((state) => state.surveyState);
  const surveyResponse = useSurveyStore((state) => state.surveyResponse);
  const surveyType = useSurveyStore((state) => state.surveyType);
  const setConfirmModalState = useConfirmModalStore(
    (state) => state.setConfirmModalState
  );

  const { mutate: login } = useSign("/auth/login");
  const { mutate: setResponse } = useQueryMutate("/survey", "post");

  const isLogin = localStorage.getItem("token") ? true : false;

  useQueryGet("/survey", "getSurvey", {
    enabled: !!isLogin,
    onSuccess: (data: SurveyType[]) => {
      if (surveyState === "complete") {
        if (
          data?.map((item: SurveyType) => item.category).indexOf(surveyType) ===
          0
        ) {
          setConfirmModalState(true, "updateSurvey");
        } else {
          setResponse({
            body: {
              category: surveyType,
              response: surveyResponse,
            },
          });
          location.href = "/my-page";
        }
      } else {
        location.href = "/";
      }
    },
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState(null);

  const queryClient = useQueryClient();

  const onSubmit = async () => {
    login(
      { body: { email, password } },
      {
        onSuccess: async (data) => {
          localStorage.setItem("token", data.token);
          localStorage.setItem("refreshToken", data.refreshToken);
          await queryClient.invalidateQueries("getSurvey");
        },
        onError: (err) => {
          if (err instanceof AxiosError) setErrMsg(err.response?.data.message);
        },
      }
    );
  };

  const onSocialLogin = async (link: string) => {
    const host = import.meta.env.VITE_SERVER_HOST;
    if (surveyState === "complete") {
      sessionStorage.setItem("surveyType", JSON.stringify(surveyType));
      sessionStorage.setItem("surveyResponse", JSON.stringify(surveyResponse));
    }
    location.href = `${host}/auth/${link}`;
  };

  return (
    <form>
      <h1 className="text-center text-xl font-bold mb-5 dark:text-neutral-300">
        로그인
      </h1>
      <div>
        <label className="block text-sm mb-1 dark:text-neutral-300">
          이메일
        </label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border w-full mb-5 py-2 px-4 rounded-full outline-blue-300"
        />
      </div>
      <div>
        <label className="block text-sm mb-1 dark:text-neutral-300">
          비밀번호
        </label>
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
      <div className="flex justify-center mb-4">
        <button
          className="mx-1 bg-blue-400 text-white rounded-xl px-4 py-2 hover:bg-blue-500 transition-all duration-500"
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
      <button
        className="border w-full my-2 rounded-lg py-2 shadow-lg bg-white hover:bg-neutral-200 transition-all duration-500"
        onClick={(e) => {
          e.preventDefault();
          onSocialLogin("google");
        }}
      >
        <img src="/social_logo/google.png" className="w-6 mr-2 inline" />
        <span>Google 계정으로 로그인</span>
      </button>
      <button
        className="w-full my-2 rounded-lg py-2 shadow-lg bg-[#FEE500] hover:brightness-90 transition-all duration-500"
        onClick={(e) => {
          e.preventDefault();
          onSocialLogin("kakao");
        }}
      >
        <img src="/social_logo/kakao.png" className="w-5 mr-2 mb-1 inline" />
        <span>카카오 로그인</span>
      </button>
    </form>
  );
};

export default Login;
