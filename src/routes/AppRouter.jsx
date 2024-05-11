import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthContext } from "../context/services/AuthProvider";
import LandingPage from "../pages/LandingPage";
import DashboardPage from "../pages/app/DashboardPage";
import LoginPage from "../pages/auth/LoginPage";
import RegistrationPage from "../pages/auth/RegistrationPage";
import ResetPasswordPage from "../pages/auth/ResetPasswordPage";
import RequestResetPasswordPage from "../pages/auth/RequestResetPasswordPage";
import ConfirmEmail from "../pages/info/ConfirmEmail";
import ConfirmedEmail from "../pages/info/ConfirmedEmail";
import CashPage from "../pages/app/cash/CashPage";
import { useEffect } from "react";

export const UserProtect = (component, authServices) => {
  if (!authServices.getAuthorization()) {
    return <Navigate to={"/login"} />;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    authServices.checkSession();
  }, [authServices]);

  return <>{component}</>;
};

const AppRouter = () => {
  const { AuthServices } = useAuthContext();

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        {/* START: Auth Pages */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/forgot-password" element={<RequestResetPasswordPage />} />
        <Route
          path="/reset-password/:resetToken"
          element={<ResetPasswordPage />}
        />
        {/* END: Auth Pages */}

        {/* START: Information Page */}
        <Route path="/confirm-email" element={<ConfirmEmail />} />
        <Route path="/email-confirmed" element={<ConfirmedEmail />} />
        {/* END: Information Page */}

        {/* START: Need Authorization Pages */}
        <Route
          path="/app"
          element={UserProtect(<DashboardPage />, AuthServices)}
        />
        <Route
          path="/app/cash"
          element={UserProtect(<CashPage />, AuthServices)}
        />
        {/* END: Need Authorization Pages */}
      </Routes>
    </>
  );
};

export default AppRouter;
