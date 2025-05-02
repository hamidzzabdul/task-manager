import React from "react";

const CreateTasksForm = () => {
  return (
    <form className="mt-4 flex flex-col gap-4 w-full ">
      <label htmlFor="title" className="flex flex-col gap-2 mt-2">
        <span className="text-xs text-gray-500 font-semibold">Task Title </span>
        <input
          type="text"
          className="w-full border-gray-300 border text-sm p-2 rounded-md outline-none"
        />
      </label>
      <label htmlFor="descriptions" className="flex flex-col gap-2 mt-2">
        <span className="text-xs text-gray-500 font-semibold">Description</span>
        <textarea
          type="text"
          className="w-full text-sm p-2border-gray-300 border h-[100px] p-2 rounded-md outline-none"
        />
      </label>
      <div className="grid grid-cols-3 gap-4">
        <label htmlFor="priority" className="flex flex-col gap-2 mt-2">
          <span className="text-xs text-gray-500 font-semibold">Priority</span>
          <select className="w-full text-sm p-2 border-gray-300 border rounded-md outline-none">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>

        <label htmlFor="priority" className="flex flex-col gap-2 mt-2">
          <span className="text-xs text-gray-500 font-semibold">Priority</span>
          <input
            type="date"
            className="w-full text-sm p-2 border-gray-300 border rounded-md outline-none"
          />
        </label>
      </div>
    </form>
  );
};

export default CreateTasksForm;
