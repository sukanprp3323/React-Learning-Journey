import { useState } from "react";
import "../ShortCircuit/shortCUR.css"

const ShortCircuitExample = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [user, setUser] = useState("")
    return (
        <>
            <section className="container short-container">
                <h1 className="shortCircuitHeading">Welcome to the ShortCircuit Evaluation!</h1>

                {/* conditional redering using short circuit evalution */}
                {isLoggedIn && <p className="status">You are logged IN!</p>}
 
                {/* For USER Greeting with Name*/}
                <p className="status"> {user ? `Hello, ${user}` : "Hello, User pls Login"}</p>

                <div className="grid-three-cols">
                    <button onClick={() => { setIsLoggedIn(!isLoggedIn) }}>Togggle Login Status</button>
                    <button onClick={() => { setUser("Sukan Prajapati") }}>Set User</button>
                    <button onClick={() => setUser("")}>Clear User</button>
                </div>
            </section>
        </>
    )
};

export default ShortCircuitExample;