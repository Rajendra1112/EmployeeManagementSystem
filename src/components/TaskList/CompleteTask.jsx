import React from "react";

const CompleteTask = () => {
  return (
    <div className="flex-shrink-0 h-full w-[20%] bg-blue-400 rounded-xl p-5">
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
      <div className="mt-4">
        <button className="w-full capitalize bg-green-700 px-3 py-1 rounded-sm font-semibold cursor-pointer">
          completed
        </button>
      </div>
    </div>
  );
};

export default CompleteTask;
