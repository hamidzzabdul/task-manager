import LoginForm from "../forms/LoginForm";

const login = () => {
  return (
    <div className="w-full flex ">
      <div className="w-full lg:w-2/3 h-screen   py-10 px-14 ">
        <div className=" flex flex-col justify-between h-[80%]">
          <h1 className="text-3xl font-bold uppercase">Task manager</h1>
          <LoginForm />
        </div>
      </div>
      <div className="w-1/3 hidden lg:flex bg-blue-500 h-screen"></div>
    </div>
  );
};

export default login;
