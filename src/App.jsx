import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./contexts/AuthProvider";

const App = () => {
  // user state which will be either admin or employee
  const [user, setUser] = useState(null);

  // use of context which we created to use the data shared by this context
  const authData = useContext(AuthContext);

  // to check who is loggedIn in the application like user or admin by comparing the data store in local storage

  const [loggedInUserData, setLoggedInUserData] = useState(null);

  // to set value of user as admin or employee based on email and password
  const loginHandler = (email, password) => {
    if (email == "admin@gmail.com" && password == "123") {
      setUser("admin");
      setLoggedInUserData("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employee = authData.employeesData.find(
        (e) => email == e.email && password == e.password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee" })
        );
      }
    } else {
      alert("invalid credintial given !");
    }
  };

  return (
    <>
      {!user ? <Login loginHandler={loginHandler} /> : ""}
      {user == "admin" ? (
        <AdminDashboard data={loggedInUserData} />
      ) : user == "employee" ? (
        <EmployeeDashboard data={loggedInUserData} />
      ) : null}
    </>
  );
};

export default App;
