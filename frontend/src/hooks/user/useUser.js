import { useQuery } from "@tanstack/react-query";
import { api } from "../../lib/api";

export const fetchuser = async () => {
  const response = await api.get("/user");
};
