import React, { createContext, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "nika",
    email: "nika@example.com",
  });

  const updateUser = (name, email) => {
    setUser({ name, email });
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};