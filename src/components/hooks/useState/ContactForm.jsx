//todo =  New React way for creating form

import { useState } from "react";
import "./RegForm.css";

export const ContactForm = () => {
  const [user, setUser] = useState({
    UserName: "",
    password: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("message sent successfully");
    console.log(user);

    setUser({
      UserName: "",
      password: "",
      message: "",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h1>Contact Form</h1>
          <p>Please fill in the Form to Contact US...</p>

          <label htmlFor="UserName">
            <b>UserName</b>
          </label>
          <input
            type="text"
            name="UserName"
            value={user.UserName}
            onChange={handleInputChange}
            placeholder="Enter FirstName"
            required
          />

          <label htmlFor="Password">
            <b>Password</b>
          </label>
          <input
            type="text"
            name="password"
            value={user.password}
            onChange={handleInputChange}
            placeholder="Enter Password"
            required
          />

          <label htmlFor="message">
            <b>Message</b>
          </label>
          <textarea
            name="message"
            onChange={handleInputChange}
            required
            autoComplete="off"
            rows={6}
          />

          <div className="clearfix">
            <button type="submit" className="ContactBtn">
              Send Message
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
