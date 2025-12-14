import { useState } from "react";


export const DerivedState = () => {

    const [users, setUsers] = useState([
        { name: "Alice", Age: 25 },
        { name: "sam", Age: 15 },
        { name: "Buddy", Age: 21 },
        { name: "Alex", Age: 29 }
    ]
    );

    return (
        <div className="main-div">
            <h1>users List:</h1>
            <ul>
                {
                    users.map((curElem, index) => {
                        {/* console.log(curElem) */ }
                        return (
                            <>
                                <li key={index}>
                                    {curElem.name} - {curElem.Age} years Old
                                </li>
                            </>)
                    })
                }
            </ul>
        </div>
    );
};
