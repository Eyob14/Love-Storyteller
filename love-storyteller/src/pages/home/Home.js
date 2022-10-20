import React from "react";
import "./Home.css";
import * as routes from "../../constants/routes";
import { NavLink, Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="portfolio-menu mt-2 mb-4">
        <ul className="list-group list-group-horizontal gap-3">
          <li className="p-2 btn btn-outline-secondary">
            <NavLink className="home-links" to={routes.FILEMANAGER}> File manager </NavLink>
          </li>
          <li className="p-2 btn btn-outline-secondary">
            <NavLink className="home-links" to={routes.GALLERY}> Gallery </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}

export default Home;
