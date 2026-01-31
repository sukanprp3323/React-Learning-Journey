import { useState } from "react";
import "../Hooks.css"

export const Counter = () => {

    // console.log(useState(5));

    const [Count, setCount] = useState(0)

    const handleBtnClick = () => {
        setCount(Count + 1)
        console.log("Inner", Count);
    }
    console.log("Outer", Count);

    return (
        <>
            <div className="container state-conainer" style={{ textAlign: "center" }}>
                <h1 className="StateHeading">useState Hook!</h1>
                <br />
                <p className="CountValue">Count : {Count} </p>
                <button className="IncrementButton" onClick={handleBtnClick}>Increment</button>
            </div>
        </>
    )
}