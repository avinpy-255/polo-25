import React from "react";
import Task from "../Components/Task"
import Widgets from "./Widgets";

const Home = () => {
  return (
    <div className="flex h-[98vh] gap-1">
      <div className="w-1/2 bg-slate-200 border  rounded-lg">
        <Task/>
      </div>
      <div className="w-1/2 bg-slate-200 border rounded-lg  ">
        <Widgets/>
      </div>
    </div>
  );
};

export default Home;
