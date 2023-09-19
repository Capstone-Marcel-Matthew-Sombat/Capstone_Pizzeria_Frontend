//for customer sign up
import React from "react";
import axios from "axios";
import { toast } from "react-toastify";

const RegisterCustomer = () => {
  const submit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const registerData = Object.fromEntries(data);
    // console.log(registerData);

    try {
      const returnData = await axios.post(
        "http://localhost:8080/customer/customer",
        registerData
      );
      toast.success("Sign Up Successfully, please log in");
      console.log(returnData);
    } catch (e) {
      const error = e.response.data;
      if (error.includes("already")) {
        toast.error("This email is already been used.");
      } else {
        toast.error(error);
      }
    }
  };

  return (
    <div>
      <h1 id="form-padding">Sign Up</h1>
      <form onSubmit={submit} className="registerForm">
        <div className="form-group">
          <label>Your Username</label>
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
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            name="customer_password"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">First Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
            name="first_name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Last Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
            name="last_name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Phone</label>
          <input
            type="text"
            className="form-control"
            placeholder="Phone number"
            name="phone"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="inputAddress">Address</label>
          <input
            type="text"
            className="form-control"
            placeholder="1234 Main St"
            name="address_line1"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress2">Address 2</label>
          <input
            type="text"
            className="form-control"
            placeholder="Apartment, studio, or floor"
            name="address_line2"
          />
        </div>

        <div className="form-row">
          <div className="form-group col-md-2">
            <label htmlFor="inputCity">City</label>
            <input type="text" className="form-control" name="city" required />
          </div>

          <div className="form-group col-md-2">
            <label htmlFor="state">State</label>
            <select
              name="state"
              className="form-control"
              required
              defaultValue=""
            >
              <option value="" disabled>
                Choose...
              </option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
          </div>

          <div className="form-group col-md-2">
            <label htmlFor="inputZip">Zip</label>
            <input
              type="text"
              className="form-control"
              name="postal_code"
              required
            />
          </div>

          <div className="form-group col-md-2">
            <label htmlFor="inputZip">Country</label>
            <input
              type="text"
              className="form-control"
              name="country"
              required
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary mt-4">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterCustomer;
