import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full h-[70px] bg-white p-3 flex items-center">
        <h1 className="text-xl font-bold">Task Manager</h1>
      </div>
      <div className="flex items-center">
        <Sidebar />
        <div className="w-[80%] h-screen bg-gray-100 p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
