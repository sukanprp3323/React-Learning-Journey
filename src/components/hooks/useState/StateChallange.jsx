import "../Hooks.css"

export const StateChallange = () => {
    return (<>
        <div className="container state-challange-container">
            <div className="innerDiv">

                <h1>useState Challange</h1>

                <div className="Counter-Input">
                    <p className="CounterPara">
                        Count: <span> 0 </span>
                    </p>

                    <label>
                        Step: <input type="number" />
                    </label>
                </div>

                <div className="grid-three-cols">
                    <button>Increment</button>
                    <button>Decrement</button>
                    <button>Reset</button>
                </div>
            </div>
        </div>
    </>);
};