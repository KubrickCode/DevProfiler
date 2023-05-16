import { FC } from "react";
import { useQueryMutate } from "../../../hooks/useQueryFetch";
import { useConfirmModalStore } from "../../../store/ModalStore";
import { useQueryClient } from "react-query";

const DeleteSurvey: FC = () => {
  const setConfirmModalState = useConfirmModalStore(
    (state) => state.setConfirmModalState
  );
  const selectedSurvey = useConfirmModalStore((state) => state.selectedSurvey);
  const queryClient = useQueryClient();

  const { mutate: deleteSurvey } = useQueryMutate(
    `/survey/${selectedSurvey}`,
    "delete"
  );

  const onSubmit = async () => {
    deleteSurvey(
      {},
      {
        onSuccess: () => {
          queryClient.invalidateQueries("getSurvey");
          setConfirmModalState(false, "");
        },
      }
    );
  };

  return (
    <>
      <h4 className="text-center text-2xl">
        정말 해당 검사 결과를 삭제하시겠습니까?
      </h4>
      <div className="flex flex-row justify-center mt-5">
        <button
          className="rounded-xl mx-1 bg-blue-400 text-white rounded-xl px-4 py-2 hover:bg-blue-500 transition-all duration-500"
          onClick={onSubmit}
        >
          확인
        </button>
        <button
          className="rounded-xl mx-1 bg-blue-400 text-white rounded-xl px-4 py-2 hover:bg-blue-500 transition-all duration-500"
          onClick={() => {
            setConfirmModalState(false, "");
          }}
        >
          취소
        </button>
      </div>
    </>
  );
};

export default DeleteSurvey;
