export const Practices = () => {
    const students = [2, 9];
    return (
        <>
            <h1>InterView Questions</h1>
            {/* <h2>{students.length && "No student Found"}</h2> output = 0 array is empty */}

            {/* <h2>{students.length === 0 && "No student Found"}</h2> output  NO student found : left side is true thats why */}

            <h2>{!students.length && "No student Found"}</h2>
            {/*output  NO student found : left side is true thats why*/}

            <h2>{Boolean(!students.length) && "No student Found"}</h2>
            {/*output  NO student found : left side is true thats why*/}

            <h3>Number of Student = {students.length}</h3>

        </>
    )
} 