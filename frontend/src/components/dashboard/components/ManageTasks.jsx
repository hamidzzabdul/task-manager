import { Download } from "lucide-react";
import TasksItems from "./TasksItems";
const tasks = [
  {
    id: 1,
    title: "Design Homepage",
    description:
      "Create a clean and modern homepage layout using Tailwind CSS. Ensure the design is responsive.",
    completed: 2,
    total: 5,
    status: "In Progress",
    priority: "High",
    startDate: "16th March",
    dueDate: "31st March",
    team: ["👩‍💻", "👨‍🎨", "🧑‍💼"], // Can replace with user image URLs later
  },
  {
    id: 2,
    title: "Develop Login System",
    description:
      "Implement user authentication with JWT and secure login using bcrypt.",
    completed: 5,
    total: 5,
    status: "Completed",
    priority: "Medium",
    startDate: "1st March",
    dueDate: "15th March",
    team: ["🧑‍💻", "👨‍💻"],
  },
  {
    id: 3,
    title: "Setup Database",
    description:
      "Design the database schema and set up PostgreSQL on the production server.",
    completed: 1,
    total: 3,
    status: "Pending",
    priority: "High",
    startDate: "10th March",
    dueDate: "20th March",
    team: ["👨‍🔧", "👩‍💼"],
  },
  {
    id: 4,
    title: "Write Documentation",
    description: "Document API endpoints and usage instructions in the README.",
    completed: 0,
    total: 2,
    status: "Pending",
    priority: "Low",
    startDate: "5th March",
    dueDate: "10th March",
    team: ["✍️"],
  },
];
const ManageTasks = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full p-3 flex items-center justify-between">
        <h2 className="text-base font-bold">My Tasks</h2>
        <ul className="flex item-center gap-4">
          <li className="flex items-center justify-center text-center gap-1 cursor-pointer group border-b-2 border-transparent hover:border-blue-500  ease-in-out">
            <p className="text-sm font-semibold text-gray-500 group-hover:text-blue-500 ">
              All
            </p>
            <span className="w-7 h-5 rounded-full flex justify-center items-center bg-blue-500 text-white text-xs font-semibold">
              18
            </span>
          </li>
          <li className="flex items-center justify-center text-center gap-1 cursor-pointer group border-b-2 border-transparent hover:border-blue-500  ease-in-out">
            <p className="text-sm font-semibold text-gray-500 group-hover:text-blue-500 ">
              Pending
            </p>
            <span className="w-7 h-5 rounded-full flex justify-center items-center bg-blue-500 text-white text-xs font-semibold">
              11
            </span>
          </li>
          <li className="flex items-center justify-center text-center gap-1 cursor-pointer group border-b-2 border-transparent hover:border-blue-500  ease-in-out">
            <p className="text-sm font-semibold text-gray-500 group-hover:text-blue-500">
              In Progress
            </p>
            <span className="w-7 h-5 rounded-full flex justify-center items-center bg-blue-500 text-white text-xs font-semibold">
              5
            </span>
          </li>
          <li className="flex items-center justify-center text-center gap-1 cursor-pointer group border-b-2 border-transparent hover:border-blue-500  ease-in-out">
            <p className="text-sm font-semibold text-gray-500 group-hover:text-blue-500">
              Completed
            </p>
            <span className="w-7 h-5 rounded-full flex justify-center items-center bg-blue-500 text-white text-xs font-semibold">
              2
            </span>
          </li>
          <button className="bg-green-200 px-3 py-2 flex items-center gap-3 font-semibold cursor-pointer">
            <Download size={16} />
            Download Report
          </button>
        </ul>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.map((task) => (
          <TasksItems
            key={task.id}
            title={task.title}
            description={task.description}
            completed={task.completed}
            total={task.total}
            status={task.status}
            priority={task.priority}
            startDate={task.startDate}
            dueDate={task.dueDate}
            team={task.team}
          />
        ))}
      </div>
    </div>
  );
};

export default ManageTasks;
