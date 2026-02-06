//todo =  New React way for creating form

import { useState } from "react";
import "./RegForm.css";

export const RegistarationReact = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",  
    password: "",
    phonenumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className="container">
          <h1>Sign Up</h1>
          <p>Please fill in the Form to create an Account</p>

          <label htmlFor="firstName">
            <b>First Name</b>
          </label>
          <input
            type="text"
            name="firstname"
            value={user.firstname}
            onChange={handleInputChange}
            placeholder="Enter FirstName"
            required
          />

          <label htmlFor="lastName">
            <b>Last Name</b>
          </label>
          <input
            type="text"
            name="lastname"
            value={user.lastname}
            onChange={handleInputChange}
            placeholder="Enter LastName"
            required
          />

          <label htmlFor="Email">
            <b>Email</b>
          </label>
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleInputChange}
            placeholder="Enter Your Email"
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

          <label htmlFor="Phone Number">
            <b>Phone Number</b>
          </label>
          <input
            type="number"
            name="phonenumber"
            value={user.phonenumber}
            onChange={handleInputChange}
            placeholder="Enter Phone Number"
            required
          />

          <p style={{ wordSpacing: "2px" }}>
            By Creating an Account you Agree to our
            <a href="#" style={{ color: "dodgerblue", marginLeft: "0.5rem" }}>
              Terms & Privacy
            </a>
          </p>

          <div className="clearfix">
            <button type="submit" className="signupbtn">
              Sign Up
            </button>
          </div>
        </div>
      </form>
      <section className="summary" style={{ textAlign: "center" }}>
        <p>
          Hello my Name is <span>{`${user.firstname} ${user.lastname}`}</span>
          .My Email address is <span>{user.email}</span> and myPhone number is{" "}
          <span>{user.phonenumber}</span>
        </p>
      </section>
    </>
  );
};
