import { useMutation } from "@tanstack/react-query";
import { api } from "../lib/api";
import Cookies from "js-cookie";

export const loginUser = async (credentials) => {
  const response = await api.post("/users/login", credentials);
  return response.data;
};

export const UseLogin = () => {
  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      const user = data.data.user;
      localStorage.setItem("user", JSON.stringify(user));
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
