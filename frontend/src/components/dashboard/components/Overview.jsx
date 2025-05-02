import React from "react";

const Overview = () => {
  return (
    <div className="w-full p-4 bg-white rounded-md flex flex-col gap-3">
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-semibold capitalize">Good morning! Mike</h2>
        <p className="text-xs font-semibold text-gray-400">Friday march 2025</p>
      </div>
      <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="flex items-center gap-2">
          <span className="w-3 h-5 bg-blue-500 rounded-lg"></span>
          <p className="text-sm font-sembold text-gray-400 capitalize">
            <span className="text-black">18</span> total tasks
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-5 bg-purple-500 rounded-lg"></span>
          <p className="text-sm font-sembold text-gray-400 capitalize">
            <span className="text-black">11</span> Pending tasks
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-5 bg-teal-500 rounded-lg"></span>
          <p className="text-sm font-sembold text-gray-400 capitalize">
            <span className="text-black">5</span> In Progress
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-5 bg-green-500 rounded-lg"></span>
          <p className="text-sm font-sembold text-gray-400 capitalize">
            <span className="text-black">18</span> Completed tasks
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
