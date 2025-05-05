import { HeartOff, Home } from "lucide-react";
import { ClipboardList } from "lucide-react";
import { Edit } from "lucide-react";
import { Users } from "lucide-react";
import { LogOut } from "lucide-react";

import { NavLink } from "react-router-dom"; // Import NavLink

const menuitems = [
  {
    href: "/dashboard",
    name: "Dashboard",
    icon: (
      <Home size={20} className="text-xs group-hover:text-white text-black" />
    ),
  },
  {
    href: "/dashboard/manage-tasks",
    name: "Manage Tasks",
    icon: (
      <ClipboardList
        size={20}
        className="text-xs group-hover:text-white text-black"
      />
    ),
    role: "admin",
  },
  {
    href: "/dashboard/create-tasks",
    name: "Create Task",
    icon: (
      <Edit size={20} className="text-xs group-hover:text-white text-black" />
    ),
    role: "admin",
  },
  {
    href: "/dashboard/team-members",
    name: "Team Members",
    icon: <Users size={20} className=" group-hover:text-white text-black" />,
    role: "admin",
  },
  {
    href: "/dashbaord/my-tasks",
    name: "My Tasks",
    icon: (
      <ClipboardList
        size={20}
        className="text-xs group-hover:text-white text-black"
      />
    ),
    role: "user",
  },
  {
    href: "/logout",
    name: "Logout",
    icon: (
      <LogOut size={20} className="text-xs group-hover:text-white text-black" />
    ),
  },
];

const Sidebar = () => {
  return (
    <div className="w-[20%] h-screen border-r border-t border-gray-300 flex flex-col gap-4 p-3">
      <div className="flex flex-col items-center justify-center gap-2 w-full">
        <div className="w-[100px] h-[100px] rounded-full bg-gray-200"></div>
        <span className="bg-blue-500 text-white px-4 py-1 text-xs rounded-md">
          Admin
        </span>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-xs font-semibold">Mike</h3>
          <p className="text-gray-400 text-xs font-semibold">mike@gmail.com</p>
        </div>

        <ul className="w-full flex flex-col mt-4 gap-2">
          {menuitems.map((item) => (
            <NavLink to={item.href} key={item.name}>
              <li className="p-2 flex items-center gap-4  group hover:bg-blue-500 transition duration-300 rounded-md ">
                {item.icon}
                <p className="text-sm font-semibold group-hover:text-white">
                  {item.name}
                </p>
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
