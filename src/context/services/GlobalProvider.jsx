import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const BASE_URL = "https://localhost:7116/";

  const API_URL = BASE_URL + "api/";

  const ApiAttribute = {
    BASE_URL,
    API_URL,
  };

  const [sessionDialog, setSessionDialog] = useState(false);

  const ToggleDialog = {
    session: {
      sessionDialog,
      setSessionDialog,
    },
  };

  return (
    <GlobalContext.Provider value={{ ApiAttribute, ToggleDialog }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  if (!context)
    throw new Error("useGlobalContext must be used within the GlobalProvider");

  return context;
};
