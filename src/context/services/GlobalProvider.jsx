import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const BASE_URL = "https://localhost:7116/";

  const API_URL = BASE_URL + "api/";

  const IMAGE_URL = API_URL + "Image/";

  const getImage = (fileName) => {
    return IMAGE_URL + fileName;
  };

  const ApiAttribute = {
    BASE_URL,
    API_URL,
    IMAGE_URL,
    getImage,
  };

  const [sessionDialog, setSessionDialog] = useState(false);
  const [logoutDialog, setLogoutDialog] = useState(false);
  const [errorDialog, setErrorDialog] = useState(false);
  const [unauthorizedDialog, setUnauthorizedDialog] = useState(false);

  const ToggleDialog = {
    session: {
      sessionDialog,
      setSessionDialog,
    },
    logout: {
      logoutDialog,
      setLogoutDialog,
    },
    error: {
      errorDialog,
      setErrorDialog,
    },
    unauthorized: {
      unauthorizedDialog,
      setUnauthorizedDialog,
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
