import { useState } from "react";


export const DerivedState = () => {

    const [users, setUsers] = useState([
        { name: "Alice", Age: 25 },
        { name: "sam", Age: 15 },
        { name: "Buddy", Age: 21 },
        { name: "Alex", Age: 29 },
        { name: "Alex", Age: 19 }
    ]
    );
    // console.log(users);

    const userCount = users.length
    console.log(userCount);

    const userAgeAverage = users.reduce((accum, curElem) => accum + curElem.Age, 0)/userCount;
    // console.log(userAgeAverage);


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
            <br/>
            <li>Total Users = {userCount}</li>
            <li>Average Age = {userAgeAverage}</li>
        </div>

    );
};
