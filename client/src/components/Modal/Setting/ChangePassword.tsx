import { FC, useState } from "react";
import { useQueryMutate } from "../../../hooks/useQueryFetch";

interface OwnProps {
  changeMode: boolean;
  setChangeMode(boolean: boolean): void;
  setDropMode(boolean: boolean): void;
}

const ChangePassword: FC<OwnProps> = ({
  changeMode,
  setChangeMode,
  setDropMode,
}) => {
  const { mutate: checkPassword } = useQueryMutate(
    "/user/check-password",
    "post"
  );

  const { mutate: changePassword } = useQueryMutate("/user", "patch");

  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const onChangePassword = () => {
    checkPassword(
      {
        body: { password },
      },
      {
        onSuccess: () => {
          changePassword(
            { body: { password: newPassword } },
            {
              onSuccess: () => {
                setIsError(false);
                setIsComplete(true);
              },
            }
          );
        },
        onError: () => {
          setIsComplete(false);
          setIsError(true);
        },
      }
    );
  };

  return (
    <>
      <div>
        <button
          className="border border-neutral-500 text-neutral-500 block w-full rounded-lg px-4 py-2 my-2 transition-all duration-500 hover:bg-neutral-300 dark:bg-neutral-800 dark:border-neutral-800 dark:hover:bg-neutral-900"
          onClick={() => {
            setChangeMode(!changeMode);
            setDropMode(false);
          }}
        >
          비밀번호 변경
        </button>
        <form className={changeMode ? "block" : "hidden"}>
          <label className="text-sm dark:text-neutral-300">현재 비밀번호</label>
          <input
            type="password"
            className="block border my-1 rounded outline-neutral-300 p-1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="text-sm dark:text-neutral-300">새 비밀번호</label>
          <input
            type="password"
            className="block border my-1 rounded outline-neutral-300 p-1"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <div className={`${!isError && "hidden"} text-center text-red-500`}>
            기존 비밀번호를 확인해주세요
          </div>
          <div
            className={`${!isComplete && "hidden"} text-center text-green-500`}
          >
            비밀번호가 변경되었습니다
          </div>
          <div className="flex flex-row justify-center my-3">
            <button
              className="border rounded-lg px-2 py-1 mx-1 transition-all duration-500 hover:bg-neutral-100 dark:text-neutral-300 dark:bg-neutral-800 dark:border-neutral-900 dark:hover:bg-neutral-900"
              onClick={(e) => {
                e.preventDefault();
                onChangePassword();
              }}
            >
              확인
            </button>
            <button
              className="border rounded-lg px-2 py-1 mx-1 transition-all duration-500 hover:bg-neutral-100 dark:text-neutral-300 dark:bg-neutral-800 dark:border-neutral-900 dark:hover:bg-neutral-900"
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
    </>
  );
};

export default ChangePassword;
