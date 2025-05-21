import React from "react";

const CreateTask = () => {
  return (
    <div className="p-10 mt-10 bg-[#1c1c1c] rounded-md ">
      <form className="flex flex-wrap justify-between">
        <div className="w-1/2">
          <div className="flex flex-col gap-y-1 mb-4">
            <label htmlFor="title" className="capitalize text-xl font-semibold">
              task title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Make a UI Design"
              className="text-xl border-2 border-gray-500 px-2 py-1 rounded-md outline-none"
            />
          </div>

          <div className="flex flex-col gap-y-1 mb-4">
            <label htmlFor="date" className="capitalize text-xl font-semibold">
              date
            </label>
            <input
              type="date"
              id="date"
              placeholder="DD/MM/YYYY"
              className="text-xl border-2 border-gray-500 px-2 py-1 rounded-md outline-none"
            />
          </div>

          <div className="flex flex-col gap-y-1 mb-4">
            <label
              htmlFor="assign_to"
              className="capitalize text-xl font-semibold"
            >
              asign to
            </label>
            <input
              type="text"
              id="assign_to"
              placeholder="Employee Name"
              className="text-xl border-2 border-gray-500 px-2 py-1 rounded-md outline-none"
            />
          </div>

          <div className="flex flex-col gap-y-1 mb-4">
            <label
              htmlFor="category"
              className="capitalize text-xl font-semibold"
            >
              category
            </label>
            <input
              type="text"
              id="category"
              placeholder="Make a UI Design"
              className="text-xl border-2 border-gray-500 px-2 py-1 rounded-md outline-none"
            />
          </div>
        </div>

        <div className="w-2/5">
          <div className="flex flex-col gap-y-1 mb-4">
            <label
              htmlFor="description"
              className="capitalize text-xl font-semibold"
            >
              description
            </label>

            <textarea
              rows="7"
              id="description"
              className="text-xl border-2 border-gray-500 px-2 py-1 rounded-md outline-none"
            ></textarea>
          </div>

          <button className="capitalize px-5 py-3 bg-emerald-600 hover:bg-emerald-700 cursor-pointer ease-in-out duration-300 text-xl font-semibold rounded-md w-full mt-4">
            create task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
