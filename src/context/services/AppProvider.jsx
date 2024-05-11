import React, { createContext, useContext } from "react";
import AuthProvider, { useAuthContext } from "./AuthProvider";
import { useGlobalContext } from "./GlobalProvider";
import axios from "axios";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const { ApiAttribute } = useGlobalContext();
  const { AuthServices } = useAuthContext();

  const paginationParamsChecker = (params) => {
    const finalParam = {};
    if (params?.PageSize) finalParam["PageSize"] = params?.PageSize || 5;
    if (params?.CurrentPage)
      finalParam["CurrentPage"] = params?.CurrentPage || 1;
    if (params?.Direction) finalParam["Direction"] = params?.Direction || "ASC";
    if (params?.SortBy) finalParam["SortBy"] = params?.SortBy || "";
    if (params?.Keyword) finalParam["Keyword"] = params?.Keyword || "";
    if (params?.StartDate) finalParam["StartParam"] = params?.StartDate || "";
    if (params?.EndDate) finalParam["EndDate"] = params?.EndDate || "";

    return finalParam;
  };

  const getCashPaged = (params) => {
    const urlParam = paginationParamsChecker(params);
    axios.defaults.headers.common["Authorization"] =
      AuthServices.getAuthorization();
    return axios.get(ApiAttribute.API_URL + "Cash", {
      params: urlParam,
    });
  };

  const doSomething = () => {
    console.log("url: ", ApiAttribute.API_URL);
  };

  // TODO: Bikin api service untuk retrieve data cash dari server
  const AppServices = {
    doSomething,
    getCashPaged,
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
