import React, { createContext, useContext } from "react";
import AppProvider from "./services/AppProvider";
import GlobalProvider from "./services/GlobalProvider";
import AuthProvider from "./services/AuthProvider";

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const test = async () => {
    console.log("ApiProvider(ln: 11, col: 9)");
  };

  const ApiServices = {
    test,
  };

  return (
    <GlobalProvider>
      <AuthProvider>
        <AppProvider>
          <ApiContext.Provider value={{ ApiServices }}>
            {children}
          </ApiContext.Provider>
        </AppProvider>
      </AuthProvider>
    </GlobalProvider>
  );
};

export default ApiProvider;

export const useApiContext = () => {
  const context = useContext(ApiContext);

  if (!context)
    throw new Error("useApiContext must be used within the ApiProvider");

  return context;
};
