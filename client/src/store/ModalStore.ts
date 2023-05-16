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
  setConfirmModalState: (confirmModalState: boolean) =>
    set((state) => ({ ...state, confirmModalState })),
});

export const useAuthModalStore = create<AuthModalStoreType>(
  devtools(authModalStore) as unknown as StateCreator<AuthModalStoreType>
);

export const useConfirmModalStore = create<ConfirmModalStoreType>(
  devtools(confirmModalStore) as unknown as StateCreator<ConfirmModalStoreType>
);
