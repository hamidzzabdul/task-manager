import { Trash2 } from "lucide-react";
import { useState } from "react";

const TaskInputList = ({ tasks, setTasks }) => {
  const [taskInput, setTaskInput] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskInput.trim() === "") return;
    setTasks([taskInput, ...tasks]);
    setTaskInput("");
  };
  const handleRemoveTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      {tasks.length > 0 && (
        <div className="flex flex-col gap-2">
          {tasks.map((task, index) => (
            <div
              key={index}
              className="bg-gray-50 p-2 rounded-md border text-sm flex items-center justify-between"
            >
              <div className="flex items-center gap-1">
                <span className="text-sm text-gray-400">0{index + 1}.</span>
                <p className="text-sm font-semibold">{task}</p>
              </div>
              <Trash2
                size={16}
                className="text-red-500 cursor-pointer"
                onClick={handleRemoveTask.bind(null, index)}
              />
            </div>
          ))}
        </div>
      )}

      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Add a task..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          className="flex-grow p-2 border border-gray-300 rounded-md text-xs outline-none"
        />
        <button
          onClick={handleAddTask}
          className="bg-gray-100 border font-semibold text-black text-xs  flex items-center gap-2 transition px-4 py-2 rounded-md "
        >
          + Add
        </button>
      </div>
    </div>
  );
};

export default TaskInputList;
