import { useQuery } from "@tanstack/react-query";
import { api } from "../../lib/api";

export const fetchuser = async () => {
  const response = await api.get("/users");
  return response.data;
};
export const getCurrentUser = async () => {
  const response = await api.get("/users/me");
  return response.data;
};
export const UseUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: fetchuser,
    onError: (error) => {
      console.error("User fetch failed", error);
      throw error;
    },
  });
};
export const UseCurrentUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
    onError: (error) => {
      console.error("User fetch failed", error);
      throw error;
    },
  });
};
