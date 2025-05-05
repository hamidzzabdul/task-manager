import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Users } from "lucide-react";
import { useState } from "react";
import TaskInputList from "../dashboard/components/TaskInputList";
import { UseUser } from "../../hooks/user/useUser";
import { useCreateTask } from "../../hooks/user/useTaks";
import { useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { useAuth } from "../../lib/context/authContext";

const taskSchema = z.object({
  title: z.string().min(1, "Task title is required"),
  description: z.string().min(1, "Description is required"),
  priority: z.enum(["low", "medium", "high"]),
  dueDate: z.string().min(1, "Due date is required"), // optionally validate format
  tasks: z.array(z.string().min(1)).optional(),
});

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white rounded-md shadow-lg w-[50%] flex flex-col">
        <div className="w-full h-fit px-4 py-4  flex items-center justify-between border-b border-gray-300">
          <h2 className="text-lg font-bold">Select Users</h2>
          <button
            onClick={onClose}
            className="text-sm text-gray-500 font-semibold hover:text-black"
          >
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

const CreateTasksForm = () => {
  const { user: currentUser } = useAuth();
  const { data: users, isLoading, error } = UseUser();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState([]); // << Added
  const [selectedUsers, setSelectedUsers] = useState([]);

  const queryClient = useQueryClient();
  const { mutateAsync: createTask } = useCreateTask();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(taskSchema) });
  // tasks
  const handleUserToggle = (userId) => {
    setSelectedUsers((prev) =>
      prev.includes(userId)
        ? prev.filter((id) => id !== userId)
        : [...prev, userId]
    );
  };

  const userId = currentUser._id;
  const onSubmit = async (data) => {
    const fullData = {
      ...data,
      todos: tasks,
      members: selectedUsers,
      userId,
    };
    console.log("Full data", fullData);

    try {
      const result = await createTask(fullData);

      toast.success("Task created successfully!");
      console.log("Task created successfully", result);

      await queryClient.invalidateQueries(["tasks"]);

      reset();
      setTasks([]);
      setSelectedUsers([]);
    } catch (error) {
      toast.error("Task creation failed. Please try again.");
      console.error("Task creation failed", error);
    }
  };

  return (
    <form
      className="mt-4 flex flex-col gap-4 w-full "
      onSubmit={handleSubmit(onSubmit)}
    >
      <label htmlFor="title" className="flex flex-col gap-2 mt-2">
        <span className="text-sm text-gray-500 font-semibold">Task Title </span>
        <input
          type="text"
          {...register("title")}
          className="w-full border-gray-300 border text-sm p-2 rounded-md outline-none"
        />
      </label>
      <label htmlFor="descriptions" className="flex flex-col gap-2 mt-2">
        <span className="text-sm text-gray-500 font-semibold">Description</span>
        <textarea
          type="text"
          {...register("description")}
          className="w-full text-sm p-2border-gray-300 border h-[100px] p-2 rounded-md outline-none"
        />
      </label>
      <div className="grid grid-cols-3 gap-4">
        <label htmlFor="priority" className="flex flex-col gap-2 mt-2">
          <span className="text-sm text-gray-500 font-semibold">Priority</span>
          <select
            className="w-full text-sm p-2 border-gray-300 border rounded-md outline-none"
            {...register("priority")}
          >
            <option value="low" selected>
              Low
            </option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>

        <label htmlFor="priority" className="flex flex-col gap-2 mt-2">
          <span className="text-sm text-gray-500 font-semibold">Priority</span>
          <input
            type="date"
            className="w-full text-sm p-2 border-gray-300 border rounded-md outline-none"
            {...register("dueDate")}
          />
        </label>

        <label htmlFor="members" className="flex flex-col gap-2 mt-2">
          <span className="text-sm text-gray-500 font-semibold">Assign to</span>
          <div
            className=" text-sm p-[0.65rem] group cursor-pointer transition-all duration-300 border-gray-300 border rounded-md outline-none flex items-center gap-2"
            onClick={() => setIsModalOpen(true)}
          >
            <Users
              className="text-black group-hover:text-blue-500 transition-all duration-300"
              size={16}
            />
            <p className="text-sm font-semibold group-hover:text-blue-500 transition-all duration-300">
              Add Members
            </p>
          </div>
        </label>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <ul className="flex flex-col gap-3 mt-3">
            {users?.data.docs.map((user) => (
              <li
                className="border-b border-gray-300 flex items-center justify-between py-3 px-6"
                key={user._id}
              >
                <div className="flex gap-2">
                  <div className="w-[50px] h-[50px] rounded-full bg-gray-300 "></div>
                  <div className="flex flex-col">
                    <p className="text-base font-semibold">{user.name}</p>
                    <span className="text-sm font-semibold text-gray-500">
                      {user.email}
                    </span>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={selectedUsers.includes(user._id)}
                  onChange={() => handleUserToggle(user._id)}
                  className="rounded-lg border border-gray-300 w-[20px] h-[20px] cursor-pointer "
                />
              </li>
            ))}
          </ul>
          <div className="w-full flex items-center justify-end gap-3 p-3">
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 bg-gray-200 cursor-pointer  text-gray-500 hover:text-black transition duration-300 px-4 py-2 text-sm font-semibold rounded-md"
            >
              Cancel
            </button>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 bg-blue-500 hover:bg-blue-400 transition duration-300 text-white px-4 py-2 text-sm rounded-md"
            >
              Done
            </button>
          </div>
        </Modal>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-sm text-gray-500 font-semibold">
          Todo Checklist
        </span>
        <TaskInputList tasks={tasks} setTasks={setTasks} />
      </div>
      <button
        type="submit"
        className="bg-blue-50 text-blue-500 hover:text-blue-700 transition duration-300 rounded-md border cursor pointer p-2"
      >
        Create Task
      </button>
    </form>
  );
};

export default CreateTasksForm;
