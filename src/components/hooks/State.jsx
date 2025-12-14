// Css in EVntHandlng.css
import { useState } from "react";
import "../EVntHandlng.css"

export const State = () => {

    console.log("Parent Div Called")
    // const array = useState();
    // console.log(array);
    const [count, setCount] = useState(0);

    const handleButtonClick = () => {
        setCount(() => count + 1)
    }

    return (
        <>
            <div className="outerDiv">
                <h1>useState in React</h1>
                <div className="mainDiv">
                    <h1>{count}</h1>
                    <button onClick={handleButtonClick}>Increment</button>
                </div>
                <ChildComponent count={count} />
            </div>
        </>
    )
}

function ChildComponent({count}) {
    console.log(`Child Component Rendered ${count}`);
    return (
        <h2>Child Component = {count}</h2>
    )
}