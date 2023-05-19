import { FC, useEffect, useState } from "react";
import { useQueryMutate } from "../../../hooks/useQueryFetch";

interface OwnProps {
  data: { id: number; email: string; provider: string };
  dropMode: boolean;
  setDropMode(boolean: boolean): void;
  setChangeMode(boolean: boolean): void;
}

const DropUser: FC<OwnProps> = ({
  data,
  dropMode,
  setDropMode,
  setChangeMode,
}) => {
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);

  const [confirm, setConfirm] = useState("");
  const [isConfirm, setIsConfirm] = useState(false);

  const { mutate: checkPassword } = useQueryMutate(
    "/user/check-password",
    "post"
  );

  const { mutate: dropUser } = useQueryMutate("/user", "delete");

  useEffect(() => {
    setIsConfirm(confirm === "계정 삭제" ? true : false);
  }, [confirm]);

  const onDropUser = () => {
    checkPassword(
      {
        body: { password },
      },
      {
        onSuccess: () => {
          dropUser(
            {},
            {
              onSuccess: () => {
                localStorage.removeItem("token");
                localStorage.removeItem("refreshToken");
                localStorage.removeItem("persistStore");
                location.href = "/";
              },
            }
          );
        },
        onError: () => {
          setIsError(true);
        },
      }
    );
  };

  const onDropSocialUser = () => {
    dropUser(
      {},
      {
        onSuccess: () => {
          localStorage.removeItem("token");
          localStorage.removeItem("refreshToken");
          localStorage.removeItem("persistStore");
          location.href = "/";
        },
      }
    );
  };

  return (
    <>
      <div>
        <button
          className="border border-red-300 text-red-500 block w-full rounded-lg px-4 py-2 my-2 transition-all duration-500 hover:bg-red-100 dark:bg-red-500 dark:border-red-600 dark:text-red-200 dark:hover:bg-red-600"
          onClick={() => {
            setDropMode(!dropMode);
            setChangeMode(false);
          }}
        >
          회원탈퇴
        </button>
        <form className={dropMode ? "block" : "hidden"}>
          <div className="text-lg my-3 font-bold text-red-500 text-center">
            정말 회원에서 탈퇴하시겠습니까?
          </div>
          {data?.provider === "Local" && (
            <div>
              <label className="text-sm dark:text-neutral-300">
                비밀번호 확인
              </label>
              <input
                type="password"
                className="block w-full border my-1 rounded outline-neutral-300 p-1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                className={`${!isError && "hidden"} text-center text-red-500`}
              >
                기존 비밀번호를 확인해주세요
              </div>
            </div>
          )}
          {data?.provider !== "Local" && (
            <div>
              <label className="text-sm dark:text-neutral-300">
                아래에 "계정 삭제"를 입력하고 확인을 눌러주세요
              </label>
              <input
                type="text"
                className="block w-full border my-1 rounded outline-neutral-300 p-1"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
              />
            </div>
          )}
          <div className="flex flex-row justify-center my-3">
            {data?.provider === "Local" && (
              <button
                className="border rounded-lg px-2 py-1 mx-1 transition-all duration-500 hover:bg-neutral-100 dark:text-neutral-300 dark:bg-neutral-800 dark:border-neutral-900 dark:hover:bg-neutral-900"
                onClick={(e) => {
                  e.preventDefault();
                  onDropUser();
                }}
              >
                확인
              </button>
            )}
            {data?.provider !== "Local" && (
              <button
                className={`${
                  !isConfirm &&
                  "cursor-not-allowed bg-neutral-100 dark:bg-neutral-500 dark:hover:bg-neutral-500 border-0"
                } border rounded-lg px-2 py-1 mx-1 transition-all duration-500 hover:bg-neutral-100 dark:text-neutral-300 dark:bg-neutral-800 dark:border-neutral-900 dark:hover:bg-neutral-900`}
                onClick={(e) => {
                  e.preventDefault();
                  onDropSocialUser();
                }}
                disabled={!isConfirm}
              >
                확인
              </button>
            )}
            <button
              className="border rounded-lg px-2 py-1 mx-1 transition-all duration-500 hover:bg-neutral-100 dark:text-neutral-300 dark:bg-neutral-800 dark:border-neutral-900 dark:hover:bg-neutral-900"
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
    </>
  );
};

export default DropUser;
