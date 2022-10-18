import React from "react";
import { Routes, Route } from "react-router-dom";
import * as routes from "../constants/routes";

import NotFound from "../components/NotFound";
import LogInPage from "../pages/authentication/LogInPage";
import SignUpPage from "../pages/authentication/SignUpPage";
import LandingPage from "../pages/landing_page/LandingPage";
import Home from "../pages/home/Home";
import PrivateRoute from "./PrivateRoute";
import ProfilePage from "../pages/profile/ProfilePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={routes.LANDING} element={<LandingPage />} />
      <Route path={routes.SIGN_UP} element={<SignUpPage />} />
      <Route path={routes.SIGN_IN} element={<LogInPage />} />

      <Route
        path={routes.HOME}
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path={routes.PROFILE}
        element={
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
