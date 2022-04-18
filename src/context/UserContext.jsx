import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const value = { isAuth, activateAuth: () => setIsAuth(true) };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
