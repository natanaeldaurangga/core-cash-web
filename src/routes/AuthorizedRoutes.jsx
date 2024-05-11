import React, { useEffect } from "react";
import { Routes } from "react-router-dom";
import { useAuthContext } from "../context/services/AuthProvider";

const AuthorizedRoutes = ({ children }) => {
  const { AuthServices } = useAuthContext();

  

  return (
    <>
      <Routes>{children}</Routes>
    </>
  );
};

export default AuthorizedRoutes;
