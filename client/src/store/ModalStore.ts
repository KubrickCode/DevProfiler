import { create, StateCreator } from "zustand";
import { devtools } from "zustand/middleware";
import { AuthModalStoreType, ConfirmModalStoreType } from "./StoreType";

const authModalStore: StateCreator<AuthModalStoreType> = (set) => ({
  authModalState: false,
  setAuthModalState: (authModalState: boolean) =>
    set((state) => ({ ...state, authModalState })),
});

const confirmModalStore: StateCreator<ConfirmModalStoreType> = (set) => ({
  confirmModalState: false,
  confirmType: "",
  selectedSurvey: 0,
  setConfirmModalState: (
    confirmModalState: boolean,
    confirmType: string,
    selectedSurvey?: number
  ) =>
    set((state) => ({
      ...state,
      confirmModalState,
      confirmType,
      selectedSurvey,
    })),
});

export const useAuthModalStore = create<AuthModalStoreType>(
  devtools(authModalStore) as unknown as StateCreator<AuthModalStoreType>
);

export const useConfirmModalStore = create<ConfirmModalStoreType>(
  devtools(confirmModalStore) as unknown as StateCreator<ConfirmModalStoreType>
);
