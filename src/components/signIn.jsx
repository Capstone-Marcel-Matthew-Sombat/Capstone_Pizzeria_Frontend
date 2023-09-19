import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
// import login from "./login";

const SignIn = () => {
  //  e.preventDefault();
  // console.log("SignIn works");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const signinData = Object.fromEntries(data);
    try {
      await axios.post("http://localhost:3000/api/admin", signinData);
      toast.success("You have added a admin, please log in");
    } catch (e) {
      const error = e.response.data
      if (error.includes("already")) {
        toast.error("This email is already used");
      } else {
        toast.error(error);
      }
    }
    // Here you can add logic to authenticate the user
    // console.log("Email:", email);
    // console.log("Password:", password);
  };

  return (
    <form onSubmit={submit}>
      <div className="signin-container">
        <h2>Sign In</h2>
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
        <input
          type="first name"
          placeholder="FirstName"
          value={firstname}
          name="first_name"
          onChange={(e) => setFirstName(e.target.value)}
        required
        />
        <input
          type="last name"
          placeholder="LastName"
          value={lastname}
          name="last_name"
          onChange={(e) => setLastName(e.target.value)}
        required
        />
        <button type="submit" className="btn btn primary">
          Submit
        </button>
        {/* <button onClick={handleSignIn}>Sign In</button> */}
      </div>
    </form>
  );
};

export default SignIn;
