import React, { useState } from "react";

const Login = ({ loginHandler }) => {
  // useState for two way binding of email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   to prevent default behaviour of form which is refres of page on submit form
  const submitHandler = (e) => {
    e.preventDefault();
    // to empty the fields on submission of form
    setEmail("");
    setPassword("");
    // to call loginHandler function when we submit the form of login page
    // and we also passed the value of email and password as paramters
    loginHandler(email, password);
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="border-2 border-emerald-600 p-10 rounded-md">
        <h1 className="text-center capitalize text-white text-2xl mb-5 font-semibold">
          log in
        </h1>

        <form
          onSubmit={(e) => submitHandler(e)}
          className="flex flex-col items-center justify-center gap-y-5"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="text-xl text-white bg-transparent rounded-md outline-none border-2 border-emerald-600 placeholder:text-gray-400 px-5 py-4"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="text-xl text-white bg-transparent rounded-md outline-none border-2 border-emerald-600 placeholder:text-gray-400 px-5 py-4"
            type="password"
            placeholder="Enter password"
          />

          <button className="w-full text-xl cursor-pointer text-white capitalize bg-emerald-600 hover:bg-emerald-700 ease-in-out duration-300 rounded-md px-5 py-4 mt-4">
            log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
