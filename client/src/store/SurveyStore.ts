import { create, StateCreator } from "zustand";
import { devtools } from "zustand/middleware";
import { SurveyStoreType } from "./StoreType";

const surveyStore: StateCreator<SurveyStoreType> = (set) => ({
  surveyState: false,
  surveyType: "FrontEnd",
  surveyResponse: [
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1,
  ],
  setSurveyState: (surveyState: boolean | "complete") =>
    set((state) => ({ ...state, surveyState })),
  setSurveyType: (surveyType: "FrontEnd" | "BackEnd") =>
    set((state) => ({ ...state, surveyType })),
  setSurveyResponse: (surveyResponse: number[]) =>
    set((state) => ({ ...state, surveyResponse })),
});

export const useSurveyStore = create<SurveyStoreType>(
  devtools(surveyStore) as unknown as StateCreator<SurveyStoreType>
);
