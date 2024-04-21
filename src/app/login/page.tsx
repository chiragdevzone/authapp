export default function Login() {
  return (
    <>
      <div className="w-[50%] py-10 mx-auto rounded-lg text-xl text-white mt-[100px] bg-slate-700 flex flex-col items-center gap-10 overflow-hidden">
        <h1>Log In Form</h1>

        <form className="flex flex-col items-center w-[60%] gap-10 ">
          <input
            className="bg-slate-600 rounded-md p-1 text-sm w-[70%] h-10"
            placeholder="USERNAME"
            id="email"
            type="email"
          />

          <input
            className="bg-slate-600 rounded-md p-1 text-sm w-[70%] h-10"
            placeholder="PASSWORD"
            id="password"
            type="password"
          />

          <button className="bg-slate-300 p-2 text-black text-md flex justify-center items-center rounded-md cursor-pointer">
            Log In
          </button>
        </form>
      </div>
    </>
  );
}
