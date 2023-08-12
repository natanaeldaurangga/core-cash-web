import React, { createContext, useContext } from "react";
import { useGlobalContext } from "./GlobalProvider";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const { ApiAttribute } = useGlobalContext();

  const login = async () => {
    console.log("base_url: ", ApiAttribute.BASE_URL);
  };

  const register = async (params) => {
    const payloads = new FormData();
    if (params?.name) payloads.append("Name", params?.name);
    if (params?.email) payloads.append("Email", params?.email);
    if (params?.password) payloads.append("Password", params?.Password);
    if (params?.confirmPassword)
      payloads.append("ConfirmPassword", params?.confirmPassword);
    if (params?.profilePicture)
      payloads.append("ProfilePicture", params?.profilePicture);

    return await axios.post(
      ApiAttribute.API_URL + "/Auth/Registration",
      payloads,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  };

  const AuthServices = {
    login,
    register,
  };

  return (
    <AuthContext.Provider value={{ AuthServices }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context)
    throw new Error("useAuthContext must be used with in the AuthProvider");

  return context;
};
