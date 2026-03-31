import { useRef } from "react";
import "../Hooks.css";

export const UseRef = () => {
  // const userName = document.getElementById("userName"); //! Old way without useRef();
  // const Password = document.getElementById("Password");//! Old way without useRef();

  const userName = useRef(null);
  const Password = useRef(null);
  console.log(userName);
  

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(userName.current.value, Password.current.value);
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input type="text" id="userName" ref={userName} />
        <br />
        <input type="text" id="Password" ref={Password} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
