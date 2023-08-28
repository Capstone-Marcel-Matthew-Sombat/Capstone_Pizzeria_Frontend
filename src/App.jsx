import React from "react";
import PageContent from "./components/PageContainer";
import NavBar from "./components/Navbar";
import "../src/components/styles/App.css";
import "../src/components/styles/navbar.css";
import "../src/components/styles/media-query.css"

function App() {
  return (
    <>
      <div id="fixed-header">
        <img src="src/components/photos/logo.png" alt="logo" width="120px" />
        <NavBar />
      </div>

      <div id="main-content">
        
        <PageContent />
      </div>
    </>
  );
}

export default App;
