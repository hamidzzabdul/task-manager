import { formatDate } from "../../../utils";

const TasksItems = ({
  title,
  description,
  total,
  status,
  priority,
  startDate,
  dueDate,
  team,
  key,
}) => {
  const completedTasks = total?.filter((todo) => todo.completed).length || 0;
  const totalTasks = total || 0;
  const progressPercentage =
    totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  const statusColors = {
    pending: {
      bg: "bg-purple-300",
      text: "text-purple-700",
      border: "border-purple-500",
    },
    "in-progress": {
      bg: "bg-green-300",
      text: "text-green-700",
      border: "border-orange-500",
    },
    completed: {
      bg: "bg-green-500",
      text: "text-green-900",
      border: "border-green-500",
    },
  };

  // Priority color mapping
  const priorityColors = {
    high: {
      bg: "bg-red-300",
      text: "text-red-700",
    },
    medium: {
      bg: "bg-orange-200",
      text: "text-orange-700",
    },
    low: {
      bg: "bg-green-300",
      text: "text-green-700",
    },
  };
  const statusColor = statusColors[status] || {
    bg: "bg-blue-200",
    text: "text-blue-500",
  };
  const priorityColor = priorityColors[priority.toLowerCase()] || {
    bg: "bg-red-200",
    text: "text-red-500",
  };
  return (
    <div
      className="w-full h-full bg-white rounded-md cursor-pointer  flex flex-col gap-2"
      key={key}
    >
      <div className="flex items-center gap-3 px-2 py-4">
        <span
          className={`${statusColor.bg} ${statusColor.text} p-2 capitalize text-xs rounded-md font-semibold`}
        >
          {status}
        </span>
        <span
          className={`${priorityColor.bg} ${priorityColor.text} font-semibold capitalize text-xs p-2 rounded-md`}
        >
          {priority} priority
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <div className={`border-l-4 ${statusColor.border} pl-2`}>
          <p className="text-base font-semibold">{title}</p>
          <p className="text-sm text-gray-400 w-[90%]">{description}</p>
          <div className="flex flex-col gap-2 mt-2">
            <p className="flex gap-1 items-center text-sm text-gray-400">
              Tasks Done:
              <span className="text-gray-800 font-semibold">
                {completedTasks}/{total?.length || 0}
              </span>
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-2 p-2">
          <p className="text-xs flex flex-col text-gray-400">
            Start Date
            <span className="text-sm font-semibold text-black">
              {formatDate(startDate)}
            </span>
          </p>
          <p className="text-xs flex flex-col text-gray-400">
            Due Date
            <span className="text-sm font-semibold text-black">
              {formatDate(dueDate)}
            </span>
          </p>
        </div>

        <div className="flex items-center  p-2">
          {team?.map((member, index) => (
            <div
              className="w-8 h-8 rounded-full border-2 -ml-3 first:ml-0 flex items-center justify-center bg-white"
              key={index}
            >
              {member}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TasksItems;
