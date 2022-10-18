import React from "react";

import { Navigate, useLocation } from "react-router-dom";
import * as routes from "../constants/routes";
// const loggedIn = window.localStorage.getItem("isLoggedIn");
// window.localStorage.removeItem("isLoggedIn");
// window.localStorage.setItem("isLoggedIn", true);
import { useAuth } from "../context/AuthContext";

// const PrivateRoute = ({ children }) => {
//   //   let location = useLocation();
//   const { currentUser } = useAuth();
//   console.log("got to home screen, inside private route");
//   return currentUser ? children : <Navigate to={routes.SIGN_IN} replace />;
// };

function PrivateRoute({ children }) {
  const { currentUser } = useAuth();
  let location = useLocation();

  if (!currentUser) {
    return <Navigate to={routes.SIGN_IN} state={{ from: location }} replace />;
  }

  return children;
}

export default PrivateRoute;
