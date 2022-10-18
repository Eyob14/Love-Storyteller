import React, { useState } from "react";
import "./style-components/Header.css";

import { Link } from "react-router-dom";
import * as routes from "../constants/routes";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

function Header() {
  const [show, setShow] = useState(true);
  const { currentUser } = useAuth();
  // const navigate = useNavigate();

  // console.log("from header", currentUser);
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <div className="container">
        {/* style={{color: '#ff2d55', fontSize: '26px'}} */}
        <Link className="navbar-brand" to={routes.LANDING}>
          <span
            className="text-danger"
            style={{ color: "#ff2d55", fontSize: "28px" }}
          >
            Love{" "}
          </span>
          Storyteller
        </Link>
        <button
          className="navbar-toggler border border-info text-info"
          onClick={() => setShow(!show)}
        >
          {show ? <MenuIcon /> : <CloseIcon />}
        </button>
        <div
          className={
            show
              ? "collapse navbar-collapse"
              : "collapse navbar-collapse active"
          }
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {currentUser ? (
              <>
                <li className="nav-item px-2" style={{ fontSize: "1.2rem" }}>
                  <Link className="nav-link text-black" to={routes.PROFILE}>
                    Profile
                  </Link>
                </li>
                <li className="nav-item px-2" style={{ fontSize: "1.2rem" }}>
                  <Link className="nav-link text-black" to={routes.HOME}>
                    Home
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item px-2" style={{ fontSize: "1.2rem" }}>
                  <Link className="nav-link text-black" to={routes.SIGN_UP}>
                    Sign Up
                  </Link>
                </li>
                <li className="nav-item px-2">
                  <Link
                    className="btn btn-danger btn-lg"
                    tabIndex="-1"
                    role="button"
                    to={routes.SIGN_IN}
                  >
                    Sign In
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
