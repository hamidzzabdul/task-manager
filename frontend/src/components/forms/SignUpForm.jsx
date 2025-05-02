import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Link } from "react-router-dom";

import { useRegister } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useState } from "react";

const SignUpSchema = z
  .object({
    name: z.string().min(1, "name is required"),
    email: z.string().email("please enter a valid email"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters long")
      .regex(/[A-Z]/, "Must contain at least one uppercase letter")
      .regex(/[0-9]/, "Must contain at least one number"),
    passwordConfirm: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords don't match",
    path: ["passwordConfirm"],
  });

const SignUpForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SignUpSchema),
  });
  const signupMutation = useRegister();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await signupMutation.mutateAsync(data);
      toast.success("Registration successful!");
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      toast.error("Registration failed. Please try again.");
      console.error("Registration failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full lg:w-3/4  flex flex-col gap-4 mt-3">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">Hi, Welcome </h2>
        <span className="text-gray-600 text-base">
          Please enter your details to SignUp
        </span>
      </div>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name" className="flex flex-col gap-2">
          <span className="text-sm font-semibold">Username</span>
          <input
            type="name"
            {...register("name")}
            className="w-3/4 border-gray-500 border text-xs p-2 rounded-md outline-none"
            placeholder="username"
          />
          {errors.name && (
            <span className="text-red-500 text-sm font-semibold">
              {errors.name.message}
            </span>
          )}
        </label>
        <label htmlFor="email" className="flex flex-col gap-2">
          <span className="text-sm font-semibold">Email Address</span>
          <input
            type="email"
            {...register("email")}
            className="w-3/4 border-gray-500 border text-xs p-2 rounded-md outline-none"
            placeholder="john@example.com"
          />
          {errors.email && (
            <span className="text-red-500 text-sm font-semibold">
              {errors.email.message}
            </span>
          )}
        </label>
        <label htmlFor="password" className="flex flex-col gap-2">
          <span className="text-sm font-semibold">Password</span>
          <input
            type="password"
            className="w-3/4 border-gray-500 border text-xs p-2 rounded-md outline-none"
            placeholder="Min 8 characters"
            {...register("password")}
          />
          {errors.password && (
            <span className="text-red-500 text-sm font-semibold">
              {errors.password.message}
            </span>
          )}
        </label>
        <label htmlFor="passwordConfirm" className="flex flex-col gap-2">
          <span className="text-sm font-semibold">Retype Password</span>
          <input
            type="password"
            className="w-3/4 border-gray-500 border text-xs p-2 rounded-md outline-none"
            placeholder="**********"
            {...register("passwordConfirm")}
          />
          {errors.passwordConfirm && (
            <span className="text-red-500 text-sm font-semibold">
              {errors.passwordConfirm.message}
            </span>
          )}
        </label>

        <button
          type="submit"
          disabled={loading}
          className={`w-3/4 text-white rounded-md p-3 text-base cursor-pointer transition duration-200 ease-in-out ${
            loading
              ? "bg-blue-300 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-400"
          }`}
        >
          {loading ? "Signing up..." : "SIGNUP"}
        </button>
      </form>
      <p className="font-semibold text-base">
        already have an account?{" "}
        <Link
          to={"/login"}
          className="border-b-2 border-blue-600 text-blue-600 hover:text-blue-400 transition duration-200 ease-in-out"
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default SignUpForm;
