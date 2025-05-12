import { useGetTasks } from "../../hooks/user/useTaks";
import Overview from "./components/Overview";
import PriorityLevel from "./components/PriorityLevel";
import RecentTasks from "./components/RecentTasks";
import TaskDistribution from "./components/TaskDistribution";

const DashBoard = () => {
  const { data: tasks, isLoading, error } = useGetTasks();

  return (
    <div className="w-full flex flex-col gap-4 ">
      <Overview tasks={tasks} />
      <div className="grid grid-cols-2 gap-4">
        <TaskDistribution />
        <PriorityLevel />
      </div>
      <RecentTasks tasks={tasks} />
    </div>
  );
};

export default DashBoard;
