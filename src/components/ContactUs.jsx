import React from "react";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className=" registerForm">
        <h2 id="form-padding">Contact Us</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter name"
              name="name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              placeholder="Enter phone number"
              name="phone"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              className="form-control"
              id="message"
              rows="4"
              placeholder="Your message"
              name="message"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary mt-5">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
