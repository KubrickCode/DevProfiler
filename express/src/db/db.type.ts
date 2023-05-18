export interface User {
  id: number;
  email: string;
  provider: Provider;
  password?: string;
  token?: string;
  refreshToken?: string;
}

export interface Survey {
  id?: number;
  user_id: number;
  category: Category;
  response: number[];
}

export type Provider = "Local" | "Google" | "Kakao";
export type Category = "FrontEnd" | "BackEnd";
