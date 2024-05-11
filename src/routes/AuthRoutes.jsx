import React, { useEffect } from "react";
import { Routes } from "react-router-dom";
import { useAuthContext } from "../context/services/AuthProvider";

const AuthRoutes = ({ children }) => {
  return <Routes>{children}</Routes>;
};

export default AuthRoutes;
