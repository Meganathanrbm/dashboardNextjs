"use client";
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
  const login = () => {
    setUserIsLoggedIn(true);
  };

  const logout = () => {
    setUserIsLoggedIn(false);
  };
  return (
    <AuthContext.Provider value={{ userIsLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
