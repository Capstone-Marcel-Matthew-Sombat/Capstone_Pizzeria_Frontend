import React, { useState } from "react";
// import { toast } from "react-toastify";
import axios from "axios";

 const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {

    e.preventDefault();
    const data = new FormData(e.target);
    const signinData = Object.fromEntries(data);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/login",
        signinData
      );
      console.log(response);
    } catch (e) {
      const error = e.response.data;
      console.log(error);
    }
  };
  return (
    <div>
      {" "}
      <form onSubmit={login}>
        <div className="signin-container">
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            name="admin_name"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            name="admin_password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {/* <button onClick={handleSignIn}>Sign In</button> */}
        </div>
        <button type="submit" className="btn btn primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
