import React from "react";
import Navbar from "./Navbar";
<Navbar />;
const Task = () => {
  return (
    <div  className="flex justify-evenly antialiased bg-lime-900   rounded-xl">
      <div className="font-sans text-2xl antialiased text-lime-300 text-center ">
        <h3>tasks</h3>
      </div>
      <div>
      <div>
        <button className=" hover:bg-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center  dark:hover:bg-lime-200 dark:focus:ring-lime-400 ">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        </button>
      </div>
      </div>
    </div>
  );
};

export default Task;
