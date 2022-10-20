import React from "react";
import "./Home.css";
import Data from "./Data";
import Sidebar from "./Sidebar";

function Home() {
  return (
    <div className="home">
      <Sidebar />
      <Data />
    </div>
  );
}

export default Home;
