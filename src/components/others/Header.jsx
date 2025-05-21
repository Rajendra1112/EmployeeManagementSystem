import React from "react";

const Header = ({ data }) => {
  return (
    <div className="flex items-end justify-between">
      <h1 className="capitalize text-2xl font-semibold">
        hello <br />
        <span className="text-3xl font-bold">{data.firstName}</span>
        👋
      </h1>
      <button className="capitalize bg-red-600 px-3 py-1 rounded-sm font-semibold cursor-pointer">
        log out
      </button>
    </div>
  );
};

export default Header;
