import React from "react";
import SignUpForm from "../forms/SignupForm";

const SignUp = () => {
  return (
    <div className="w-full flex ">
      <div className="w-full lg:w-2/3 h-screen py-10 px-14 ">
        <div className=" flex flex-col justify-between h-full  ">
          <h1 className="text-3xl font-bold uppercase">Task manager</h1>
          <SignUpForm />
        </div>
      </div>
      <div className="w-1/3 hidden lg:block bg-blue-500 h-screen"></div>
    </div>
  );
};

export default SignUp;
