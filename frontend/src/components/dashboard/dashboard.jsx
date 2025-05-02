import Overview from "./components/Overview";
import PriorityLevel from "./components/PriorityLevel";
import RecentTasks from "./components/RecentTasks";
import TaskDistribution from "./components/TaskDistribution";

const DashBoard = () => {
  return (
    <div className="w-full flex flex-col gap-4 ">
      <Overview />
      <div className="grid grid-cols-2 gap-4">
        <TaskDistribution />
        <PriorityLevel />
      </div>
      <RecentTasks />
    </div>
  );
};

export default DashBoard;
