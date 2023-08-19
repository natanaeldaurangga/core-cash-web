import React, { useEffect } from "react";
import { Navigate, redirect } from "react-router-dom";

const TestRedirect = () => {
  if (localStorage.getItem("loggedIn") === 1) {
    return (
      <>
        <h1>Hello there</h1>
      </>
    );
  } else {
    return (
      <>
        <Navigate to={"/login"} />
      </>
    );
  }
};

export default TestRedirect;
