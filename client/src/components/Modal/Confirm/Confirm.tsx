import { FC } from "react";
import { useConfirmModalStore } from "../../../store/ModalStore";
import UpdateSurvey from "./UpdateSurvey";
import DeleteSurvey from "./DeleteSurvey";

const Confirm: FC = () => {
  const confirmModalState = useConfirmModalStore(
    (state) => state.confirmModalState
  );
  const confirmType = useConfirmModalStore((state) => state.confirmType);
  const setConfirmModalState = useConfirmModalStore(
    (state) => state.setConfirmModalState
  );

  if (!confirmModalState) return null;
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
        <div
          className="fixed inset-0 bg-black opacity-70"
          onClick={() => setConfirmModalState(false, "updateSurvey")}
        ></div>
        <div className="relative bg-white p-10 pb-5 overflow-hidden z-60 rounded-3xl dark:bg-neutral-700">
          {confirmType === "updateSurvey" && <UpdateSurvey />}
          {confirmType === "deleteSurvey" && <DeleteSurvey />}
        </div>
      </div>
    </>
  );
};

export default Confirm;
