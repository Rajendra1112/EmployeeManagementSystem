import React, { createContext, useEffect, useState } from "react";
import { getLocalStorege, setLocalStorege } from "../utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const { employeesData, adminData } = getLocalStorege();
    setUserData({ employeesData, adminData });
    setLocalStorege();
  }, []);

  return (
    <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
