import { create, StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { PersistStoreType } from "./StoreType";

const persistStore: StateCreator<PersistStoreType> = (set) => ({
  theme: "light",
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === "dark" ? "light" : "dark" })),
});

export const usePersistStore = create<PersistStoreType>(
  devtools(
    persist(persistStore, {
      name: "persistStore",
    })
  ) as unknown as StateCreator<PersistStoreType>
);
