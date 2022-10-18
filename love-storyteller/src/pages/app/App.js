import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { BrowserRouter as Router } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Routes from "../../routes/router_index";
import { AuthProvider } from "../../context/AuthContext";

function App() {
  return (
    <Router>
      <div className="App">
        <AuthProvider>
          <Header />
          <Routes />
          <Footer />
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
