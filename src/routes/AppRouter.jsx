import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/auth/LoginPage";
import RegistrationPage from "../pages/auth/RegistrationPage";
import RequestResetPasswordPage from "../pages/auth/RequestResetPasswordPage";
import ResetPasswordPage from "../pages/auth/RequestPasswordPage";
import ConfirmEmail from "../pages/info/ConfirmEmail";
import ConfirmedEmail from "../pages/info/ConfirmedEmail";
import TestRedirect from "../pages/TestRedirect";
import UserRoutes from "./UserRoutes";
import DashboardPage from "../pages/app/DashboardPage";

const AppRouter = () => {
  return (
    <>
      

      {/* START: No Need Authorization Pages */}
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

        <Route path="/test-redirect" element={<TestRedirect />} />
      </Routes>
      {/* END: No Need Authorization Pages */}

      {/* START: Need Authorization Pages */}
      <UserRoutes>
        <Route path="/app" element={<DashboardPage />} />
      </UserRoutes>
      {/* END: Need Authorization Pages */}
    </>
  );
};

export default AppRouter;
