import { ArrowBigRight, ArrowRight } from "lucide-react";
import React from "react";

const dummyTasks = [
  {
    name: "Develop the Ui frontend using React + vite and bun",
    status: "Pending",
    priority: "low",
    date: "05th May 2025",
  },
  {
    name: "Develop the Ui frontend using React + vite and bun",
    status: "Pending",
    priority: "low",
    date: "05th May 2025",
  },
  {
    name: "Develop the Ui frontend using React + vite and bun",
    status: "Pending",
    priority: "low",
    date: "05th May 2025",
  },
  {
    name: "Develop the Ui frontend using React + vite and bun",
    status: "Pending",
    priority: "low",
    date: "05th May 2025",
  },
  {
    name: "Develop the Ui frontend using React + vite and bun",
    status: "Pending",
    priority: "low",
    date: "05th May 2025",
  },
];

const RecentTasks = () => {
  return (
    <div className="w-full p-3 rounded-md bg-white h-full">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold capitalize">Recent Tasks</h2>
        <span className="text-xs font-semibold py-1 px-3 flex items-center gap-1 border rounded-md cursor-pointer group hover:bg-blue-500 hover:text-white transition-all duration-300">
          See all{" "}
          <ArrowRight
            className="text-black group-hover:text-white "
            size={10}
          />
        </span>
      </div>
      <div className="w-full py-2 px-2 grid grid-cols-5 border-b border-gray-200">
        <p className=" col-span-2 text-sm font-semibold">Name</p>
        <p className="text-sm font-semibold">Status</p>
        <p className="text-sm font-semibold">Priority</p>
        <p className="text-sm font-semibold">Created On</p>
      </div>
      {dummyTasks.map((task, index) => (
        <div
          className="w-full py-3 px-2 grid grid-cols-5 border-b border-gray-200  "
          key={index}
        >
          <p className=" col-span-2 text-xs font-semibold text-gray-500 capitalize">
            {task.name}
          </p>
          <p className="text-xs font-semibold py-1 px-2 rounded-md bg-purple-200 w-fit text-purple-600">
            {task.status}
          </p>
          <p className="text-xs font-semibold py-1 px-2 rounded-md bg-purple-200 w-fit text-purple-600 ">
            {task.priority}
          </p>
          <p className="text-xs text-gray-500 font-semibold">{task.date}</p>
        </div>
      ))}
    </div>
  );
};

export default RecentTasks;
