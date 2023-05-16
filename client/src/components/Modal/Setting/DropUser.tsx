import { FC, useState } from "react";
import { useQueryMutate } from "../../../hooks/useQueryFetch";

interface OwnProps {
  dropMode: boolean;
  setDropMode(boolean: boolean): void;
  setChangeMode(boolean: boolean): void;
}

const DropUser: FC<OwnProps> = ({ dropMode, setDropMode, setChangeMode }) => {
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);

  const { mutate: checkPassword } = useQueryMutate(
    "/user/check-password",
    "post"
  );

  const { mutate: dropUser } = useQueryMutate("/user", "delete");

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
          <div className="text-lg my-3 font-bold text-red-500">
            정말 회원에서 탈퇴하시겠습니까?
          </div>
          <label className="text-sm dark:text-neutral-300">비밀번호 확인</label>
          <input
            type="password"
            className="block w-full border my-1 rounded outline-neutral-300 p-1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className={`${!isError && "hidden"} text-center text-red-500`}>
            기존 비밀번호를 확인해주세요
          </div>
          <div className="flex flex-row justify-center my-3">
            <button
              className="border rounded-lg px-2 py-1 mx-1 transition-all duration-500 hover:bg-neutral-100 dark:text-neutral-300 dark:bg-neutral-800 dark:border-neutral-900 dark:hover:bg-neutral-900"
              onClick={(e) => {
                e.preventDefault();
                onDropUser();
              }}
            >
              확인
            </button>
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
