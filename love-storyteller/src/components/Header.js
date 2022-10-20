import React, { useState, useEffect } from "react";
import "./style-components/Header.css";

import { Link } from "react-router-dom";
import * as routes from "../constants/routes";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { useAuth } from "../context/AuthContext";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebase/config";

function Header() {
  const [show, setShow] = useState(true);
  const { currentUser } = useAuth();
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(collection(firestore, "users"));
      const users = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      for (const user of users) {
        if (user.uid === currentUser.uid) {
          setUser(user);
        }
      }
    };
    getUsers();
  }, []);
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link
          className="navbar-brand"
          to={currentUser ? routes.HOME : routes.LANDING}
        >
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
                    <img
                      src="./images/avatar.png"
                      alt="Profile"
                      width="45"
                      className="rounded-circle"
                    />
                    <span className="profile-name"> {user.firstName}</span>
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
