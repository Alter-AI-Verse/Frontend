import React, { createContext, useState, useEffect } from "react";

export const UserDataContext = createContext();

const Usercontext = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Retrieve user data from localStorage if available
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    // Save user data to localStorage whenever it changes
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  return (
    <UserDataContext.Provider value={{ user, setUser }}>
      {children}
    </UserDataContext.Provider>
  );
};

export default Usercontext;
