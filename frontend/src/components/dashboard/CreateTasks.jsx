import CreateTasksForm from "../forms/CreateTasksForm";

const CreateTasks = () => {
  return (
    <div className="p-4 rounded-md w-3/4 bg-white">
      <h3 className="text-xl font-semibold">Create Task</h3>
      <CreateTasksForm />
    </div>
  );
};

export default CreateTasks;
