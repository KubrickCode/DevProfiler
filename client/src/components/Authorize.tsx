import qs from "qs";
import { useEffect, useState } from "react";
import LoadingOverlay from "./Layout/Loading";
import { useQueryGet, useQueryMutate } from "../hooks/useQueryFetch";
import { SurveyType } from "./MyPage/MyPage";
import { useConfirmModalStore } from "../store/ModalStore";

const Authorize = () => {
  const { token, refreshToken } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const { mutate: setResponse } = useQueryMutate("/survey", "post");
  const [isLogin, setIsLogin] = useState(false);
  const setConfirmModalState = useConfirmModalStore(
    (state) => state.setConfirmModalState
  );

  useQueryGet("/survey", "getSurvey", {
    enabled: !!isLogin,
    onSuccess: (data: SurveyType[]) => {
      let storedSurveyType = sessionStorage.getItem("surveyType");
      let storedSurveyResponse = sessionStorage.getItem("surveyResponse");
      if (storedSurveyType && storedSurveyResponse) {
        storedSurveyType = JSON.parse(storedSurveyType);
        storedSurveyResponse = JSON.parse(storedSurveyResponse);
        if (
          data
            ?.map((item: SurveyType) => item.category)
            .indexOf(storedSurveyType!) === 0
        ) {
          setConfirmModalState(true, "updateSurvey");
        } else {
          setResponse({
            body: {
              category: storedSurveyType,
              response: storedSurveyResponse,
            },
          });
          sessionStorage.removeItem("surveyType");
          sessionStorage.removeItem("surveyResponse");
          location.href = "/my-page";
        }
      }
    },
  });

  useEffect(() => {
    localStorage.setItem("token", token as string);
    localStorage.setItem("refreshToken", refreshToken as string);
    setIsLogin(true);
  }, [token, refreshToken]);

  return <LoadingOverlay />;
};

export default Authorize;
