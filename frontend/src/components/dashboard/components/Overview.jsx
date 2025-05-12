import React from "react";
import { formatDate, getUser } from "../../../utils";
import TasksItems from "./TasksItems";

const Overview = ({ tasks }) => {
  const user = getUser();
  const pendingTasksCount = tasks?.filter(
    (task) => task.status === "pending"
  ).length;
  const inprogressCount = tasks?.filter(
    (task) => task.status === "in-progress"
  ).length;
  const completeTaskCount = tasks?.filter(
    (task) => task.status === "completed"
  ).length;
  console.log(pendingTasksCount, inprogressCount);
  return (
    <div className="w-full p-4 bg-white rounded-md flex flex-col gap-3">
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-semibold capitalize">
          Good morning! {user?.name || "user"}
        </h2>
        <p className="text-xs font-semibold text-gray-400">
          {formatDate(Date.now())}
        </p>
      </div>
      <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="flex items-center gap-2">
          <span className="w-3 h-5 bg-blue-500 rounded-lg"></span>
          <p className="text-sm font-semibold text-gray-400 capitalize">
            <span className="text-black">{tasks?.length}</span> total tasks
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-5 bg-purple-500 rounded-lg"></span>
          <p className="text-sm font-semibold text-gray-400 capitalize">
            <span className="text-black">{pendingTasksCount}</span> Pending
            tasks
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-5 bg-teal-500 rounded-lg"></span>
          <p className="text-sm font-semibold text-gray-400 capitalize">
            <span className="text-black">{inprogressCount}</span> In Progress
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-5 bg-green-500 rounded-lg"></span>
          <p className="text-sm font-semibold text-gray-400 capitalize">
            <span className="text-black">{completeTaskCount}</span> Completed
            tasks
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
