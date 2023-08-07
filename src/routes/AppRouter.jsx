import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/auth/LoginPage";
import RegistrationPage from "../pages/auth/RegistrationPage";
import RequestResetPasswordPage from "../pages/auth/RequestResetPasswordPage";
import ResetPasswordPage from "../pages/auth/RequestPasswordPage";
import DashboardPage from "../pages/app/DashboardPage";
import ProfilePicturePage from "../pages/auth/ProfilePicturePage";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/register-picture" element={<ProfilePicturePage />} />
        <Route path="/forgot-password" element={<RequestResetPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        {/* TODO: Lanjut bikin dashboard page */}
        <Route path="/app" element={<DashboardPage />} />
      </Routes>
    </>
  );
};

export default AppRouter;
