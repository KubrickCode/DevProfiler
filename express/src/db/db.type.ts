interface User {
  id: number;
  email: string;
  provider: Provider;
  password?: string;
  token?: string;
  refreshToken?: string;
}

interface Survey {
  id?: number;
  user_id: number;
  category: Category;
  response: number[];
}

type Provider = "Local" | "Google" | "Kakao";
type Category = "FrontEnd" | "BackEnd";

export { User, Survey, Provider, Category };
