import React from "react";
import { Navigate, Outlet, Routes } from "react-router-dom";
import { useAuthContext } from "../context/services/AuthProvider";

const UserRoutes = () => {
  const { AuthServices } = useAuthContext();

  if (!AuthServices.getAuthorization()) {
    return <Navigate to={"/login"} />;
  }

  return <Outlet />;
};

export default UserRoutes;
