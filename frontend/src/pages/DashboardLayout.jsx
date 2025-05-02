import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="w-full h-[70px] bg-white p-3 flex items-center shrink-0">
        <h1 className="text-xl font-bold">Task Manager</h1>
      </div>
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="w-[80%] flex-1 overflow-y-auto bg-gray-100 p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
