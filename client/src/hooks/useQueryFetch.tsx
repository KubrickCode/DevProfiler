import { useMutation, useQuery } from "react-query";
import axios, { AxiosRequestConfig } from "axios";

const host = import.meta.env.VITE_SERVER_HOST;

type MethodType = "post" | "patch" | "put" | "delete";

const api = axios.create({
  baseURL: host,
  headers: {
    Authorization: localStorage.getItem("token"),
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers["Authorization"] = token ? `Bearer ${token}` : "";
  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (!error.response || error.response.status !== 401) {
      throw error;
    }

    if (error.config.url === "/auth/refresh") {
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("persistStore");
      window.location.href = "/";
      return Promise.reject(error);
    }

    const refreshToken = localStorage.getItem("refreshToken");
    if (!refreshToken) {
      throw error;
    }

    try {
      const response = await api.post("/auth/refresh", null, {
        headers: { "x-refresh-token": refreshToken },
      });

      localStorage.setItem("token", response.data.token);
      error.config.headers["Authorization"] = response.data.token;
      return api.request(error.config);
    } catch (refreshError) {
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("persistStore");
      window.location.href = "/";
      throw refreshError;
    }
  }
);

const useQueryGet = (link: string, key: string, queryOptions = {}) => {
  const queryFunc = async () => {
    const response = await api.get(link);
    return response.data;
  };

  return useQuery([key, host + link], queryFunc, {
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    ...queryOptions,
  });
};

const useQueryMutate = (link: string, method: MethodType) => {
  const mutation = useMutation(
    async (req: { body?: object; config?: AxiosRequestConfig }) => {
      const response = await api[method](link, req?.body, req?.config);
      return response.data;
    }
  );

  return {
    data: mutation,
    isLoading: mutation.isLoading,
    error: mutation.error,
    mutate: mutation.mutate,
  };
};

export type { MethodType };
export { useQueryGet, useQueryMutate };
