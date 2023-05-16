export interface PersistStoreType {
  theme: "dark" | "light";
  toggleTheme: () => void;
}

export interface SurveyStoreType {
  surveyState: boolean | "complete";
  surveyType: "FrontEnd" | "BackEnd";
  surveyResponse: number[];
  setSurveyState(surveyState: boolean | "complete"): void;
  setSurveyType(surveyType: "FrontEnd" | "BackEnd"): void;
  setSurveyResponse(surveyResponse: number[]): void;
}

export interface AuthModalStoreType {
  authModalState: boolean;
  setAuthModalState(authModalState: boolean): void;
}

export interface SettingModalStoreType {
  settingModalState: boolean;
  setSettingModalState(settingModalState: boolean): void;
}

export interface ConfirmModalStoreType {
  confirmModalState: boolean;
  confirmType: string;
  selectedSurvey: number;
  setConfirmModalState(
    confirmModalState: boolean,
    confirmType: string,
    selectedSurvey?: number
  ): void;
}
