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

  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(signupSchema) as any, // Explicitly specify the type here
  });

  const submitData = (data: FormData) => {
    console.log(data);
  };

  return (
    <>
      <div className="w-[50%] py-10 mx-auto rounded-lg text-xl text-white mt-[100px] bg-slate-700 flex flex-col items-center gap-10 overflow-hidden">
        <h1>Sign Up Form</h1>

        <form
          onSubmit={handleSubmit(submitData)}
          className="flex flex-col items-center w-[60%] gap-10 "
        >
          <input
            className="bg-slate-600 rounded-md p-1 text-sm w-[70%] h-10"
            placeholder="FIRST NAME"
            type="text"
            {...register("firstName")}
          />
          <input
            className="bg-slate-600 rounded-md p-1 text-sm w-[70%] h-10"
            placeholder="LAST NAME"
            type="text"
            {...register("lastName")}
          />
          <input
            className="bg-slate-600 rounded-md p-1 text-sm w-[70%] h-10"
            placeholder="USERNAME"
            {...register("email")}
            type="email"
          />

          <input
            className="bg-slate-600 rounded-md p-1 text-sm w-[70%] h-10"
            placeholder="PASSWORD"
            {...register("password")}
            type="password"
          />

          <input
            className="bg-slate-600 rounded-md p-1 text-sm w-[70%] h-10"
            placeholder="CONFORM PASSWORD"
            {...register("conformPassword")}
            type="password"
          />

          <input
            className="bg-slate-300 p-2 text-black text-md flex justify-center items-center rounded-md cursor-pointer"
            type="submit"
          />
        </form>
      </div>
    </>
  );
}
