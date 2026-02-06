import { useState } from "react";
import "../Hooks.css";
export const Controlled = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // const getData = document.querySelector("#name").value
    console.log(name);
  };
  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <section className="container state-challange-container ">
      <form className="Counter-Input" onSubmit={handleSubmit}>
        <h1>UnControlled Component</h1>
        <label>
          Name :{" "}
          <input
            type="text"
            id="name"
            // value={name}
            onChange={handleChange}
            placeholder="Enter text..."
          />
        </label>
        <div className="grid-three-cols">
          <button type="submit">Button</button>
        </div>
      </form>
    </section>
  );
};
