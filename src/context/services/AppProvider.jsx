import React, { createContext, useContext } from "react";
import AuthProvider from "./AuthProvider";
import { useGlobalContext } from "./GlobalProvider";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const { ApiAttribute } = useGlobalContext();

  const doSomething = () => {
    console.log("url: ", ApiAttribute.API_URL);
  };

  const AppServices = {
    doSomething,
  };

  return (
    <AppContext.Provider value={{ AppServices }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within the AppProvider");
  }

  return context;
};
