import React from "react";

const TaskListNumber = ({ data }) => {
  return (
    <div className="flex flex-wrap items-center justify-between mt-15">
      <div className="w-[20%] bg-red-400 px-5 py-3 rounded-xl">
        <h2 className="text-3xl font-bold mb-2">{data.taskStats.newTask}</h2>
        <h3 className="text-2xl capitalize font-semibold">new task</h3>
      </div>

      <div className="w-[20%] bg-emerald-400 px-5 py-3 rounded-xl">
        <h2 className="text-3xl font-bold mb-2">{data.taskStats.accept}</h2>
        <h3 className="text-2xl capitalize font-semibold">accepted</h3>
      </div>

      <div className="w-[20%] bg-blue-400 px-5 py-3 rounded-xl">
        <h2 className="text-3xl font-bold mb-2">{data.taskStats.complete}</h2>
        <h3 className="text-2xl capitalize font-semibold">completed</h3>
      </div>

      <div className="w-[20%] bg-purple-400 px-5 py-3 rounded-xl">
        <h2 className="text-3xl font-bold mb-2">{data.taskStats.fail}</h2>
        <h3 className="text-2xl capitalize font-semibold">failed</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;
