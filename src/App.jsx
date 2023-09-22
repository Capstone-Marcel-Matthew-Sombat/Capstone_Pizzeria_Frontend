import React from "react";
import PageContainer from "./components/PageContainer";
import Header from "./assets/header";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";

import "../src/components/styles/App.css";
import "../src/components/styles/Header.css";
import "../src/components/styles/Footer.css";
import "../src/components/styles/homepage.css";
import "../src/components/styles/media-query.css";
import "../src/components/styles/MenuStyles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <>
      <div id="fixed-header">
        <Link to="/">
          <img
            src="src/assets/logo.png"
            id="logo-image"
            alt="logo"
            width="120px"
          />
        </Link>
        <Header />
      </div>

      <div className="content-wrapper">
        <PageContainer />
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
