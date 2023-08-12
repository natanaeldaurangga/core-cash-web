import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  // TODO: Bikin global variable buat nyimpan url api dan lain-lain

  const BASE_URL = "https://localhost:7116/";

  const API_URL = BASE_URL + "api/";

  const ApiAttribute = {
    BASE_URL,
    API_URL,
  };

  //   TODO: Lanjut bikin registration cek apakah context registration ini tetep bisa diakses di page upload profile picture
  //   ============= REGISTRATION PAYLOAD ======================
  const [registrationPayload, setRegistrationPaylod] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePicture: null,
  });

  const setRegistrationFieldPayload = (params) => {
    setRegistrationPaylod({ ...registrationPayload, ...params });
  };

  const RegistrationPool = {
    registrationPayload,
    setRegistrationFieldPayload,
  };

  return (
    <GlobalContext.Provider value={{ ApiAttribute, RegistrationPool }}>
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
