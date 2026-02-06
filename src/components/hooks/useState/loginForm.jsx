import { useState } from "react";
import "./RegForm.css";

export const LoginForm = () => {
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    setUser({
        userName:"",
        password:""
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h1>Login Form</h1>
          <label htmlFor="userName">
            <b>User Name</b>
          </label>
          <input
            type="text"
            name="userName"
            value={user.userName}
            onChange={handleInputChange}
            required
            placeholder="Enter User Name"
          />

          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleInputChange}
            required
            placeholder="Enter your password"
          />

          <div className="clearfix">
            <button type="submit" className="Loginbtn">
              Login
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
