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
import EditProfile from "../pages/profile/EditProfile";
import FileManager from "../pages/home/FileManager";
import Gallery from "../pages/home/Gallery";

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
      >
        <Route
          index
          element={
            <PrivateRoute>
              <FileManager />
            </PrivateRoute>
          }
        />
        <Route
          path={routes.FILEMANAGER}
          element={
            <PrivateRoute>
              <FileManager />
            </PrivateRoute>
          }
        />
        <Route
          path={routes.GALLERY}
          element={
            <PrivateRoute>
              <Gallery />
            </PrivateRoute>
          }
        />
      </Route>
      <Route
        path={routes.PROFILE}
        element={
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        }
      />
      <Route
        path={routes.EDITPROFILE}
        element={
          <PrivateRoute>
            <EditProfile />
          </PrivateRoute>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
