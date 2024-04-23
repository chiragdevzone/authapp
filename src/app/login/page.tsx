"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { AuthType } from "@/redux/features/authSlice";
import { log } from "console";

export default function Login() {
  interface FormData {
    email: string;
    password: string;
  }

  const signinSchema = z.object({
    email: z.string().email({ message: "enter a valid email" }),
    password: z
      .string()
      .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(signinSchema) });

  const stateEmail = useSelector((state: AuthType) => state.email);
  const statePassword = useSelector((state: AuthType) => state.password);

  const submitData = (data: FormData) => {
    if (data) {
      if (stateEmail && statePassword) {
        // console.log({ stateEmail, statePassword });
        console.log("data hai");
      } else {
        console.log("please enter a valid email and password");
      }
    }
  };

  return (
    <>
      <div className="w-[45%] py-3 mx-auto rounded-lg text-xl text-white mt-5 bg-slate-700 flex flex-col items-center gap-1 ">
        <h1>Log In Form</h1>

        <form
          onSubmit={handleSubmit(submitData)}
          className="flex flex-col items-center  w-[60%] gap-3 "
        >
          <input
            className="bg-slate-600 rounded-md p-1 text-sm w-[70%] h-10"
            placeholder="USERNAME"
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
            className="bg-slate-300 p-2 text-black text-md flex justify-center items-center rounded-md cursor-pointer"
            type="submit"
          />
        </form>
      </div>
    </>
  );
}
