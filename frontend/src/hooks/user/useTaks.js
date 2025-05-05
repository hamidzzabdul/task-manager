import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../../lib/api";

const createTask = async (taskData) => {
  const response = await api.post("/tasks/create", taskData); // Adjust the endpoint as needed
  return response.data;
};

export const useCreateTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]); // Optional: refetch tasks
      console.log("Task created successfully");
    },
    onError: (error) => {
      console.error("Task creation failed", error);
      throw error;
    },
  });
};
