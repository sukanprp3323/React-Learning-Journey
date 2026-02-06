import { useState } from "react";
import "../Hooks.css";

export const StateChallange = () => {
  const [Count, setCount] = useState(0);
  const [step, setSteps] = useState(0);

  const IncreaseCount = () => {
    setCount(Count + step);
  };

  const DecreaseCount = () => {
    setCount(Count - step);
  };

  const handleReset = (e) => {
    setCount(0);
    setSteps(0);
  };

  return (
    <>
      <div className="container state-challange-container">
        <div className="innerDiv">
          <h1>useState Challange</h1>

          <div className="Counter-Input">
            <p className="CounterPara">
              Count: <span> {Count} </span>
            </p>

            <label>
              Step:{" "}
              <input
                type="number"
                value={step}
                min={0}
                onChange={(e) => setSteps(Number(e.target.value))}
              />
            </label>
          </div>

          <div className="grid-three-cols">
            <button onClick={IncreaseCount} disabled={Count >= 1000}>
              Increment
            </button>
            <button onClick={DecreaseCount} disabled={Count <= 0}>
              Decrement
            </button>
            <button onClick={handleReset}>Reset</button>
          </div>
        </div>
      </div>
    </>
  );
};
