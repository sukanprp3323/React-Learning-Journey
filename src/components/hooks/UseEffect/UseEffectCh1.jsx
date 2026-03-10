//! 1. A counter that increments when a button is clicked...
//! 2. An input field where users can type their name.
//! 3. The Document title will to show the current count.
import { useEffect, useState } from "react";
import "../useState/RegForm.css";

export const UseEffectCh1 = () => {
  const [Count, setCount] = useState(0);
  const [Fname, setFname] = useState("");

  useEffect(() => {
    document.title = `Count : ${Count}`
  }, [Count]);

  useEffect(() => {
    console.log(Fname);
  }, [Fname]);

  return (
    <>
      <div className="challange1-container">
        <h1>UseEffect challange 1</h1>
        <p>
          Count <span> {Count} </span>
        </p>
        <button
          onClick={() => {
            setCount(Count + 1);
          }}
        >
          Increment
        </button>

        <p>
          Name: <span>{Fname}</span>
        </p>
        <input
          type="text"
          value={Fname}
          onChange={(e) => setFname(e.target.value)}
          placeholder="enter text"
        />
      </div>
    </>
  );
};
