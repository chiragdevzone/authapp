"use client";

export default function Home() {
  return (
    <>
      <div className="mx-auto mt-[100px] py-5 bg-slate-700 text-white rounded-lg w-[40%] h-[30%] ">
        <div>
          <h1 className="text-center text-2xl mb-2">HOME</h1>
        </div>
        <div className="flex justify-around pb-2">
          <div className="bg-slate-300 text-black w-[80px] text-xl flex justify-center items-center rounded-md cursor-pointer">
            <button onClick={() => (window.location.href = "/login")}>
              Log In
            </button>
          </div>
          <div className="bg-slate-300 text-black w-[80px] text-xl flex justify-center items-center rounded-md cursor-pointer">
            <button onClick={() => (window.location.href = "/signup")}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
