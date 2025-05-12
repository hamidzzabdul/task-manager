import { Download } from "lucide-react";
import TasksItems from "./TasksItems";
import { useGetTasks } from "../../../hooks/user/useTaks";
import { useState } from "react";
const ManageTasks = () => {
  const { data: tasks, isLoading, error } = useGetTasks();
  const [activeTab, setActiveTab] = useState("all");

  const filteredTasks = tasks?.filter((task) => {
    if (activeTab === "all") return true;
    return task.status === activeTab;
  });

  const tabs = [
    { label: "all", count: tasks?.length || 0 },
    {
      label: "pending",
      count: tasks?.filter((task) => task.status === "pending").length || 0,
    },
    {
      label: "in-progress",
      count: tasks?.filter((task) => task.status === "in-progress").length || 0,
    },
    {
      label: "completed",
      count: tasks?.filter((task) => task.status === "completed").length || 0,
    },
  ];

  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full p-3 flex lg:flex-row flex-col lg:items-center lg:justify-between gap-y-4">
        <h2 className="text-xl font-bold">My Tasks</h2>
        <ul className="flex item-center gap-4 justify-end">
          {tabs.map((tab, index) => (
            <li
              key={index}
              onClick={() => setActiveTab(tab.label)}
              className={`flex items-center justify-center text-center gap-1 cursor-pointer group border-b-2 ${
                activeTab === tab.label
                  ? "border-blue-500"
                  : "border-transparent hover:border-blue-500"
              } ease-in-out`}
            >
              <p className="text-sm font-semibold text-gray-500 group-hover:text-blue-500 capitalize">
                {tab.label}
              </p>
              <span
                className={`w-7 h-5 rounded-full flex justify-center items-center ${
                  activeTab === tab.label
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-black"
                }  text-xs font-semibold`}
              >
                {tab.count}
              </span>
            </li>
          ))}

          <button className="bg-green-200 hidden lg:flex px-3 py-2 items-center gap-3 font-semibold cursor-pointer">
            <Download size={16} />
            Download Report
          </button>
          <div className="p-2 bg-green-200 cursor-pointer rounded-md flex lg:hidden items-center justify-center">
            <Download size={16} className=" " />
          </div>
        </ul>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {filteredTasks?.map((task) => (
          <div key={task._id}>
            <TasksItems
              key={task.id}
              title={task.title}
              description={task.description}
              total={task.todos}
              status={task.status}
              priority={task.priority}
              startDate={task.updatedAt}
              dueDate={task.dueDate}
              team={task?.team}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageTasks;
