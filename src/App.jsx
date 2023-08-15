import React from "react";

import PageContent from "./components/PageContainer";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";
import "./components/styles/Header.css"

function App() {
  return (
    <>
      <NavBar />
      <PageContent />
      <Footer />
    </>
  );
}

export default App;
