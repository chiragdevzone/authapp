"use client";

import { logoutAuth } from "@/redux/features/authSlice";
import { RootState } from "@/redux/store";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  let authstatus = useSelector((state: RootState) => state.auth.authStatus);
  const [showLogout, setShowLogout] = useState("hidden");
  const dispatch = useDispatch();

  useEffect(() => {
    if (authstatus) {
      setShowLogout("");
      console.log("login successfully");
    } else {
      setShowLogout("hidden");
    }
  }, [authstatus]);

  const logoutNow = () => {
    authstatus = false;
    dispatch(logoutAuth());
    console.log("logout successfully");
  };
  return (
    <>
      <div className="mx-auto mt-[100px] py-5  bg-slate-700 text-white rounded-lg w-[40%] h-[30%] ">
        <div>
          <h1 className="text-center text-2xl mb-2">HOME</h1>
        </div>
        <div className="flex justify-around pb-2">
          <div className="bg-slate-300 text-black w-[80px] text-xl flex justify-center items-center rounded-md cursor-pointer">
            <Link href={"/login"}> Log In</Link>
          </div>
          <div className="bg-slate-300 text-black w-[80px] text-xl flex justify-center items-center rounded-md cursor-pointer">
            <Link href={"/signup"}> Sign Up</Link>
          </div>
        </div>

        <div className={`flex flex-col items-center gap-4 pt-3 ${showLogout}`}>
          <h2> Login Successfully</h2>
          <div>
            <div
              className={`bg-slate-300  text-black w-[80px] text-xl flex justify-center items-center rounded-md cursor-pointer`}
            >
              <button onClick={logoutNow}>Logout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
