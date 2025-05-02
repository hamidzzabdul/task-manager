import { useMutation } from "@tanstack/react-query";
import { api } from "../lib/api";

export const loginUser = async (credentials) => {
  const response = await api.post("/login", credentials);
  return response.data;
};

export const UseLogin = () => {
  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
    },
    onError: (error) => {
      console.error("Login failed", error);
      throw error;
    },
  });
};

export const registerUser = async (userData) => {
  const response = await api.post("/signup", userData);
  return response.data;
};

export const useRegister = () => {
  return useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
    },
    onError: (error) => {
      console.error("Registration failed", error);
      throw error;
    },
  });
};
