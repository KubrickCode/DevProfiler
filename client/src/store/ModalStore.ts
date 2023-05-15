import { create, StateCreator } from "zustand";
import { devtools } from "zustand/middleware";
import { ModalStoreType } from "./StoreType";

const modalStore: StateCreator<ModalStoreType> = (set) => ({
  modalState: false,
  setModalState: (modalState: boolean) =>
    set((state) => ({ ...state, modalState })),
});

export const useModalStore = create<ModalStoreType>(
  devtools(modalStore) as unknown as StateCreator<ModalStoreType>
);
