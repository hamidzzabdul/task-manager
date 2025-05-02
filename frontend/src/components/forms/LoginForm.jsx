import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { TextField, Button, Box, Typography, Container } from "@mui/material";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../../lib/context/authContext";
import { UseLogin } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useState } from "react";

const LoginSchema = z.object({
  email: z.string().email("please enter a valid email"),
  password: z.string().min(6, "password must be at least 6 characters"),
});

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });

  const loginMutation = UseLogin();
  const navigate = useNavigate();
  const { login } = useAuth();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const result = await loginMutation.mutateAsync(data);
      login(result.token);

      toast.success("Login successful!");
      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
    } catch (error) {
      toast.error("Login failed. Please try again.");
      console.error("Login failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full lg:w-3/4 h-[300px] flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">Welcome Back</h2>
        <span className="text-gray-600 text-base">
          Please enter your details to log in
        </span>
      </div>
      <form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email" className="flex flex-col gap-2">
          <span className="text-base font-semibold">Email Address</span>
          <input
            type="email"
            {...register("email")}
            className="w-3/4 border-gray-500 border text-sm p-2 rounded-md outline-none"
            placeholder="john@example.com"
          />
          {errors.email && (
            <span className="text-red-500 text-sm font-semibold">
              {errors.email.message}
            </span>
          )}
        </label>
        <label htmlFor="email" className="flex flex-col gap-2">
          <span className="text-base font-semibold">Password</span>
          <input
            type="password"
            className="w-3/4 border-gray-500 border text-sm p-2 rounded-md outline-none"
            placeholder="Min 8 characters"
            {...register("password")}
          />
          {errors.password && (
            <span className="text-red-500 text-sm font-semibold">
              {errors.password.message}
            </span>
          )}
        </label>

        <button
          type="submit"
          disabled={loading}
          className="w-3/4 bg-blue-600 text-white font-semibold rounded-md p-3 text-base cursor-pointer hover:bg-blue-400 transition duration-200 ease-in-out"
        >
          {loading ? "Loading..." : "LOGIN"}
        </button>
      </form>
      <p className="font-semibold text-sm">
        Dont have an account?{" "}
        <Link
          to={"/sign-up"}
          className="border-b-2 border-blue-600 text-blue-600 hover:text-blue-400 transition duration-200 ease-in-out"
        >
          signUp
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
