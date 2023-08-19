import React, { createContext, useContext } from "react";
import { useGlobalContext } from "./GlobalProvider";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const { ApiAttribute } = useGlobalContext();

  // TODO: bikin dialog untuk info jika session user sudah berakhir
  const checkSession = () => {
    axios.defaults.headers.common = getAuthorization();
    let result = false;
    axios
      .get(ApiAttribute.API_URL + "Auth/CheckSession")
      .then((res) => {
        if (res.status == 200) result = true;
      })
      .catch((err) => {
        result = false;
      });

    return result;
  };

  const authData = () => {
    return JSON.parse(localStorage.getItem("authorized"));
  };

  const getAuthorization = () => {
    let user = authData();
    let token = user?.authorized?.jwtToken || false;
    return token && "Bearer " + token;
  };

  const logout = () => {
    localStorage.removeItem("authorized");
    window.location.href = "/login";
  };

  const login = async (params) => {
    let payloads = {
      email: params?.email || null,
      password: params?.password || null,
    };

    const response = await axios.post(
      ApiAttribute.API_URL + "Auth/Login",
      payloads
    );

    try {
      if (response.status === 200) {
        const result = response.data;
        const authPayload = JSON.stringify(result);
        localStorage.setItem("authorized", authPayload);
      }
      return response;
    } catch (err) {
      return err;
    }
  };

  const register = async (params) => {
    const payloads = new FormData();
    if (params?.fullName) payloads.append("FullName", params?.fullName);
    if (params?.email) payloads.append("Email", params?.email);
    if (params?.password) payloads.append("Password", params?.password);
    if (params?.confirmPassword)
      payloads.append("ConfirmPassword", params?.confirmPassword);
    if (params?.profilePicture)
      payloads.append("ProfilePicture", params?.profilePicture);

    return await axios.post(
      ApiAttribute.API_URL + "Auth/Registration",
      payloads,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  };

  const AuthServices = {
    checkSession,
    getAuthorization,
    authData,
    logout,
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
