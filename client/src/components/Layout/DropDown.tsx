import { FC, useRef, useEffect } from "react";
import { useQueryGet } from "../../hooks/useQueryFetch";
import { Link } from "react-router-dom";
import { useSettingModalStore } from "../../store/ModalStore";

interface OwnProps {
  open: boolean;
  setOpen(open: boolean): void;
  buttonRef: React.RefObject<HTMLButtonElement>;
}

const DropDown: FC<OwnProps> = ({ open, setOpen, buttonRef }) => {
  const isLogin = localStorage.getItem("token") ? true : false;
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { data } = useQueryGet("/user", "getUser", { enabled: !!isLogin });

  const setSettingModalState = useSettingModalStore(
    (state) => state.setSettingModalState
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setOpen, buttonRef]);

  return (
    <div
      ref={dropdownRef}
      className={`${!open && "hidden"} absolute right-0 z-10`}
    >
      <div className="bg-white divide-y divide-neutral-100 rounded-lg shadow w-44 dark:bg-neutral-700 dark:divide-neutral-600">
        <div className="px-4 py-3 text-sm text-neutral-900 dark:text-neutral-300 text-center">
          {data?.email}
        </div>
        <ul
          className="py-2 text-sm text-neutral-700 dark:text-neutral-200"
          aria-labelledby="dropdownUserAvatarButton"
        >
          <li>
            <Link
              to="/my-page"
              className="block text-center px-4 py-2 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-600"
            >
              마이페이지
            </Link>
          </li>
          <li>
            <button
              className="w-full px-4 py-2 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-600"
              onClick={() => setSettingModalState(true)}
            >
              설정
            </button>
          </li>
        </ul>
        <div className="py-2">
          <button
            className="w-full px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-600 dark:text-neutral-300"
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("refreshToken");
              localStorage.removeItem("persistStore");
              location.href = "/";
            }}
          >
            로그아웃
          </button>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
