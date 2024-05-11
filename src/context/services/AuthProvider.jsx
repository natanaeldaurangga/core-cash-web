import React, { createContext, useContext } from "react";
import { useGlobalContext } from "./GlobalProvider";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const { ApiAttribute, ToggleDialog } = useGlobalContext();

  const checkSession = () => {
    axios.defaults.headers.common["Authorization"] = getAuthorization();
    // console.log(getAuthorization());
    let result = false;
    axios
      .get(ApiAttribute.API_URL + "Auth/CheckSession")
      .then((res) => {
        if (res.status == 200) result = true;
      })
      .catch((err) => {
        result = false;
        if (err.response.status == 401)
          ToggleDialog.session.setSessionDialog(true);
      });

    return result;
  };

  const authData = () => {
    return JSON.parse(localStorage.getItem("authorized"));
  };

  const getAuthorization = () => {
    let user = authData();
    let token = user?.jwtToken;
    return token && "Bearer " + token;
  };

  const logout = () => {
    localStorage.removeItem("authorized");
    window.location.href = "/login";
  };

  // START: Reset Password Services
  const resetPassword = async (token, params) => {
    const payload = {
      password: "",
      repeatPassword: "",
    };

    if (params?.password) payload.password = params?.password;
    if (params?.confirmPassword)
      payload.confirmPassword = params?.confirmPassword;
    console.log(params);
    return await axios.put(
      ApiAttribute.API_URL + "Auth/ResetPassword/" + token,
      params
    );
  };

  const requestResetPassword = async (params) => {
    const payload = {
      email: "",
    };

    if (params?.email) payload.email = params?.email;

    return await axios.post(
      ApiAttribute.API_URL + "Auth/RequestResetPassword",
      payload
    );
  };
  // END: Reset Password Services

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
    resetPassword,
    requestResetPassword,
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
