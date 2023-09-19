import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "../src/components/styles/index.css";
import "bootstrap/dist/css/bootstrap.css";
// import Login from "./components/login.jsx";
// import logout from "./components/logout.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <ToastContainer/>
    </React.StrictMode>
  
);

export default App;
