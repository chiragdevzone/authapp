"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Signup() {
  interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    conformPassword: string;
  }

  const signupSchema = z
    .object({
      firstName: z
        .string()
        .min(3, "min 3 char required")
        .max(30, "max 30 char possible "),
      lastName: z
        .string()
        .min(3, "min 3 char required")
        .max(30, "max 30 char possible "),
      email: z.string().email({ message: "input should be email type" }),
      password: z
        .string()
        .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, {
          message:
            "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number",
        }),
      conformPassword: z
        .string()
        .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, {
          message:
            "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number",
        }),
    })
    .refine((data) => data.password === data.conformPassword, {
      message: "Passwords do not match",
      path: ["conformPassword"],
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(signupSchema),
  });

  const submitData = (data: FormData) => {
    console.log(data);
    if (data) {
      window.location.href = "/login";
    }
  };

  return (
    <>
      <div className="w-[45%] py-3 mx-auto rounded-lg text-xl text-white mt-5 bg-slate-700 flex flex-col items-center gap-1 ">
        <h1>Sign Up Form</h1>

        <form
          onSubmit={handleSubmit(submitData)}
          className="flex flex-col items-center  w-[60%] gap-3 "
        >
          <input
            className="bg-slate-600 rounded-md p-1 text-sm w-[70%] h-10"
            placeholder="FIRST NAME"
            type="text"
            {...register("firstName")}
          />
          {errors.firstName && (
            <span className="text-sm text-red-500">
              {errors.firstName.message}
            </span>
          )}
          <input
            className="bg-slate-600 rounded-md p-1 text-sm w-[70%] h-10"
            placeholder="LAST NAME"
            type="text"
            {...register("lastName")}
          />
          {errors.lastName && (
            <span className="text-sm text-red-500">
              {errors.lastName.message}
            </span>
          )}
          <input
            className="bg-slate-600 rounded-md p-1 text-sm w-[70%] h-10"
            placeholder="EMAIL ID"
            {...register("email")}
            type="email"
          />
          {errors.email && (
            <span className="text-sm text-red-500">{errors.email.message}</span>
          )}
          <input
            className="bg-slate-600 rounded-md p-1 text-sm w-[70%] h-10"
            placeholder="PASSWORD"
            {...register("password")}
            type="password"
          />
          {errors.password && (
            <span className="text-sm text-red-500">
              {errors.password.message}
            </span>
          )}
          <input
            className="bg-slate-600 rounded-md p-1 text-sm w-[70%] h-10"
            placeholder="CONFORM PASSWORD"
            {...register("conformPassword")}
            type="password"
          />
          {errors.conformPassword && (
            <span className="text-sm text-red-500">
              {errors.conformPassword.message}
            </span>
          )}
          <input
            className="bg-slate-300 p-2 text-black text-md flex justify-center items-center rounded-md cursor-pointer"
            type="submit"
          />
        </form>
      </div>
    </>
  );
}
