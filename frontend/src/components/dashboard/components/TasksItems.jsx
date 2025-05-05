const TasksItems = ({
  title,
  description,
  completed,
  total,
  status,
  priority,
  startDate,
  dueDate,
  team,
}) => {
  const completedTasks = completed;
  const totalTasks = total;
  const progressPercentage = (completedTasks / totalTasks) * 100;
  return (
    <div className="w-full h-full bg-white rounded-md  flex flex-col gap-2">
      <div className="flex items-center gap-3 p-2">
        <span className="bg-blue-200 p-2 text-xs rounded-md text-blue-500 font-semibold">
          {status}
        </span>
        <span className="bg-red-200 text-red-500 text-xs p-2 rounded-md">
          {priority}
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <div className="border-l-4 border-blue-500 pl-2">
          <p className="text-base font-semibold">{title}</p>
          <p className="text-sm text-gray-400 width-3/4">{description}</p>
          <div className="flex flex-col gap-2 mt-2">
            <p className="flex gap-1 items-center text-sm text-gray-400">
              Tasks Done:
              <span className="text-gray-500 font-semibold">
                {completed}/{total}
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
            {startDate}
            <span className="text-sm font-semibold text-black">16th march</span>
          </p>
          <p className="text-xs flex flex-col text-gray-400">
            {dueDate}
            <span className="text-sm font-semibold text-black">31st march</span>
          </p>
        </div>

        <div className="flex items-center  p-2">
          {team.map((member, index) => (
            <div
              className="w-8 h-8 rounded-full border-2 -ml-3 first:ml-0 flex items-center justify-center"
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
