export interface PersistStoreType {
  theme: "dark" | "light";
  toggleTheme: () => void;
}

export interface SurveyStoreType {
  surveyState: boolean;
  surveyType: "FrontEnd" | "BackEnd";
  surveyResponse: number[];
  setSurveyState(surveyState: boolean): void;
  setSurveyType(surveyType: "FrontEnd" | "BackEnd"): void;
  setSurveyResponse(surveyResponse: number[]): void;
}
