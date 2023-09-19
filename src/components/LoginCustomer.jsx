import React from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginCustomer = () => {
  const navigate = useNavigate();
  const login = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const registerData = Object.fromEntries(data);

    try {
      const response = await axios.post(
        "http://localhost:8080/customer/login",
        registerData
      );
      let d = new Date();
      d.setTime(d.getTime() + 59 * 60 * 1000);
      Cookies.set("Customerlogin", response.data, { expires: d });
      toast.success("Successfully signed in!");
      console.log(Cookies.get("Customerlogin"));

      navigate("/");
      location.reload();
    } catch (e) {
      // console.log(response.data);
      console.log(e);
      console.log("we are in customer login");
    }
  };

  return (
    <>
      <div>
        <h2 id="form-padding">Please Login</h2>
        <form onSubmit={login} className="registerForm">
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="customer_username"
              required
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="customer_password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary mt-5">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginCustomer;
