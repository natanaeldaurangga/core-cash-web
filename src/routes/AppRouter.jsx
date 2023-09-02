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

const userProtect = (component, authServices) => {
  if (!authServices.getAuthorization()) {
    return <Navigate to={"/login"} />;
  }

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
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        {/* END: Auth Pages */}

        {/* START: Information Page */}
        <Route path="/confirm-email" element={<ConfirmEmail />} />
        <Route path="/email-confirmed" element={<ConfirmedEmail />} />
        {/* END: Information Page */}

        {/* START: Need Authorization Pages */}
        <Route
          path="/app"
          element={userProtect(<DashboardPage />, AuthServices)}
        />
        <Route
          path="/app/cash"
          element={userProtect(<CashPage />, AuthServices)}
        />
        {/* END: Need Authorization Pages */}
      </Routes>
    </>
  );
};

export default AppRouter;
