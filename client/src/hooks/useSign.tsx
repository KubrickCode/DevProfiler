import { useMutation } from "react-query";
import axios from "axios";

interface SignBody {
  email: string;
  password: string;
}

const host = import.meta.env.VITE_SERVER_HOST;

const api = axios.create({
  baseURL: host,
});

export const useSign = (link: string) => {
  const mutation = useMutation(async (req: { body: SignBody }) => {
    const response = await api["post"](link, req.body);
    return response.data;
  });

  return {
    data: mutation,
    isLoading: mutation.isLoading,
    error: mutation.error,
    mutate: mutation.mutate,
  };
};
