import { useEffect, useState } from "react";
import "../useState/RegForm.css";

export const UseEffectBasics = () => {
  // const [Count, setCount] = useState(0);
  const [date, setDate] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedDate = new Date();
      setDate(updatedDate.toLocaleTimeString());
      // console.log(updatedDate);
    }, 1000);

    return ()=> clearInterval(interval)
  }, []);

  return (
    <>
    <div className="container">
      {/* <h1>UseEffect Hook Basic </h1>
      <h1>{Count}</h1>
      <button
        onClick={() => {
          setCount(Count + 1);
        }}
      >
        Count
      </button> */}

      <h1>Date : {date}</h1>
      </div>
    </>
  );
};
