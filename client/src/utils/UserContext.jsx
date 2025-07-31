import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const storedToken = localStorage.getItem("token");
  const storedUser = localStorage.getItem("user");
  const INITIAL_STATE = {
    userInfo: storedUser ? JSON.parse(storedUser) : null,
    isLoggedIn: !!storedToken,
    loading: false,
    error: null,
  };

  const [state, setState] = useState(INITIAL_STATE);

  useEffect(() => {
    // Check if there is a token to determine if the user is logged in
    const token = localStorage.getItem("token");
    if (token) {
      setState((prevState) => ({ ...prevState, isLoggedIn: true }));
    } else {
      setState((prevState) => ({ ...prevState, isLoggedIn: false }));
    }
  }, []);

  const setUserInfo = (userInfo) => {
    setState((prevState) => ({ ...prevState, userInfo }));
    localStorage.setItem("user", JSON.stringify(userInfo));
  };

  const logout = () => {
    setState((prevState) => ({
      ...prevState,
      userInfo: null,
      isLoggedIn: false,
    }));
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  const isAdmin = () => {
    return state.userInfo && state.userInfo.isAdmin; // Assuming isAdmin is a boolean property in your user info
  };

  return (
    <UserContext.Provider value={{ ...state, setUserInfo, logout, isAdmin }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
