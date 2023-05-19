import { create, StateCreator } from "zustand";
import { devtools } from "zustand/middleware";
import {
  AuthModalStoreType,
  ConfirmModalStoreType,
  SettingModalStoreType,
} from "./StoreType";

const authModalStore: StateCreator<AuthModalStoreType> = (set) => ({
  authModalState: false,
  setAuthModalState: (authModalState: boolean) =>
    set((state) => ({ ...state, authModalState })),
});

const settingModalStore: StateCreator<SettingModalStoreType> = (set) => ({
  settingModalState: false,
  setSettingModalState: (settingModalState: boolean) =>
    set((state) => ({ ...state, settingModalState })),
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

const useAuthModalStore = create<AuthModalStoreType>(
  devtools(authModalStore) as unknown as StateCreator<AuthModalStoreType>
);

const useSettingModalStore = create<SettingModalStoreType>(
  devtools(settingModalStore) as unknown as StateCreator<SettingModalStoreType>
);

const useConfirmModalStore = create<ConfirmModalStoreType>(
  devtools(confirmModalStore) as unknown as StateCreator<ConfirmModalStoreType>
);

export { useAuthModalStore, useSettingModalStore, useConfirmModalStore };
