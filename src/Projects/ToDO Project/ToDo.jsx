import { useEffect, useState } from "react"
import "./ToDo.css"
import { FaCheck } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
export const ToDO = () => {
    const [inputValue, setInputValue] = useState(""); //* temparay Input Values
    const [task, setTask] = useState([]); //* permenent values form inputValues
    const [dateTime, setDateTime] = useState("")
    const handleInputValue = (value) => {
        setInputValue(value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()

        if (!inputValue) {
            return;
        }

        if (task.includes(inputValue)) {
            setInputValue("")
            return;
        }

        setTask((prevTask) => [...prevTask, inputValue]) //*Updated function

        setInputValue("")
    }

    // console.log("hello");

    //* date and Time logic  , We need a STATE For constantly changing date and time dont forgot it
    useEffect(() => {
        const internval = setInterval(() => {
            const now = new Date();
            const formattedDate = now.toLocaleDateString();
            const formattedTime = now.toLocaleTimeString("en-IN", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true,
            });
            setDateTime(`${formattedDate} - ${formattedTime}`)
        }, 1000)

        return () => clearInterval(internval);
    }, [])

    // const updatedTime = setTimeout(formattedTime.tolo, 1000)

    //*Delete ToDo logic
    const handleDeleteToDo = (curTask) => {
        console.log(task);
        console.log(curTask);
        const UpdatedTask = task.filter((curElem) => {   //*filter will create new Array for non matched items and we use that updatedArray [] in setTask(updatedTask)
            return curElem !== curTask;
        })
        setTask(UpdatedTask) //todo new non matched array inplace of ...prev

    }

    //* Clear button functionality

    // const handleClearToDoData = () => {
    // setTask([])
    // }

    return (
        <>
            <section className="todo-container">
                <header className="header">
                    <h1>ToDo List</h1>
                    <h2 className="date-time">{dateTime}</h2>
                </header>
                <section className="form">
                    <form onSubmit={handleFormSubmit}>
                        <div>
                            <input
                                type="text"
                                className="todo-input"
                                autoComplete="off"
                                placeholder="add your Task"
                                value={inputValue}
                                onChange={(event) => { handleInputValue(event.target.value) }}
                            />
                        </div>
                        <div>
                            <button type="submit" className="todo-btn">
                                Add Task
                            </button>
                        </div>
                    </form>
                </section>

                <section className="myUnordList">
                    <ul>
                        {
                            task.map((curTask, index) => {
                                return (
                                    <li key={index} className="todo-item" >
                                        <span>{curTask}</span>
                                        <button className="check-btn">
                                            <FaCheck />
                                        </button>
                                        <button className="delete-btn" onClick={() => { handleDeleteToDo(curTask) }}>
                                            <MdDelete />
                                        </button>
                                    </li>)
                            })
                        }
                    </ul>
                </section>
                <section>
                    <button className="clear-btn" onClick={() => {
                        setTask([]);
                        if (window.confirm("Clear all tasks?"));
                    }}>Clear all</button>
                </section>
            </section>
        </>
    )
}