import { useEffect, useState } from "react";
import "../useState/RegForm.css";

export const CleanUp = () => {
  const [Count, setCount] = useState(450320);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <div className="container-CleanUp">
        <div className="Counter">
          <p>My Subscribers on Youtube</p>
          <div className="odoMeter" id="odoMeter">
            {Count}
          </div>
          <h3 className="title">Subscribers RealTime Counter</h3>
        </div>
      </div>
    </>
  );
};
