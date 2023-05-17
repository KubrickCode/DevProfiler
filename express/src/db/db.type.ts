export interface User {
  id: number;
  email: string;
  password?: string;
  token?: string;
  refreshToken?: string;
}

export interface Survey {
  id?: number;
  user_id: number;
  category: string;
  response: number[];
}
