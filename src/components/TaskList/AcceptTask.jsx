import React from "react";

const AcceptTask = () => {
  return (
    <div className="flex-shrink-0 h-full w-[20%] bg-emerald-400 rounded-xl p-5">
      <div className="flex items-center justify-between">
        <h2 className="px-3 py-1 bg-red-600 capitalize text-xl rounded-xl font-semibold">
          high
        </h2>
        <h3 className="text-xl font-medium">7 may 2025</h3>
      </div>
      <h4 className="mt-4 text-3xl font-bold">make a youtube video</h4>
      <p className="mt-4 font-semibold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quo
        repudiandae, mollitia id dolor alias laborum deserunt commodi. Et,
        corrupti.
      </p>
      <div className="flex flex-wrap justify-between mt-4 gap-2">
        <button className="capitalize bg-green-700 px-3 py-1 rounded-sm font-semibold cursor-pointer">
          mark as completed
        </button>
        <button className="capitalize bg-red-700 px-3 py-1 rounded-sm font-semibold cursor-pointer">
          mark as failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
