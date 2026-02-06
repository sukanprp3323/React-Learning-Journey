//!File Location: = Component/Hooks/useState/registrationForm

import { useState } from "react";
import "./RegForm.css";

export const RegistarationForm = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.name);

    switch (name) {
      case "firstname":
        setFirstName(value);
        break;

      case "lastname":
        setLastName(value);
        break;

      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      case "phonenumber":
        setPhoneNumber(value);
        break;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = {
      firstname,
      lastname,
      email,
      password,
      phonenumber,
    };

    console.log(formData);
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
            value={firstname}
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
            value={lastname}
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
            value={email}
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
            value={password}
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
            value={phonenumber}
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
          Hello my Name is <span>{`${firstname} ${lastname}`}</span>
          .My Email address is <span>{email}</span> and myPhone number is{" "}
          <span>{phonenumber}</span>
        </p>
      </section>
    </>
  );
};
