import React from "react";
import { Navigate } from "react-router-dom";
import * as routes from "../constants/routes";

const PublicRoute = ({ user, component: Component }) =>
  !user ? <Component /> : <Navigate to={routes.HOME} replace />;

export default PublicRoute;
