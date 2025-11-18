import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("isAuthenticated");
    if (saved === "true") setIsAuthenticated(true);
  }, []);

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.setItem("isAuthenticated", "false");
  };

  const value = { isAuthenticated, login, logout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
