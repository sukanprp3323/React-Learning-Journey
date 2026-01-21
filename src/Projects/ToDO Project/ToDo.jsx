import { useState } from "react"
import "./ToDo.css"
import { TodoForm } from "./TodoForm";
import { ToDoList } from "./ToDoList";
import { ToDoDate } from "./ToDoDate";
import { getLocalStorageTodoData, setLocalStorageTodoData } from "./TodoLocalstorage";


export const ToDO = () => {
    const [task, setTask] = useState(() => getLocalStorageTodoData()); //* permenent values form inputValues

    const handleFormSubmit = (inputValue) => {

        const { id, content, checked } = inputValue;
        // to check the input field is empty or Not
        if (!content) {
            return;
        }
        //To check if the data is already existing or not
        //* if (task.includes(inputValue)) return;  for only Array

        const ifTodoContentMatched = task.find((curTask) => {
            curTask.content === content
        });

        if (ifTodoContentMatched) return;

        setTask((prevTask) => [...prevTask, { id, content, checked }]) //*Updated function

    }

    //ToDo  LocalStorage Functionality
   setLocalStorageTodoData(task)



    //todo Delete ToDo logic
    const handleDeleteToDo = (curTask) => {
        const UpdatedTask = task.filter((curElem) => {
            //*filter will create new Array for non matched items and we use that updatedArray [] in setTask(updatedTask)
            return curElem.content !== curTask;
        })
        setTask(UpdatedTask) //todo new non matched array inplace of ...prev

    }

    //todo Check button functionality

    const handleCheckedTodo = (content) => {
        const updatedTask = task.map((curTask) => {
            if (curTask.content === content) {
                return { ...curTask, checked: !curTask.checked }
            } else {
                return curTask;
            }
        })
        setTask(updatedTask)
    }

    return (
        <>
            <section className="todo-container">
                <header className="header">
                    <h1>ToDo List</h1>
                    <ToDoDate />
                </header>
                <TodoForm onAddTodo={handleFormSubmit} />

                <section className="myUnordList">
                    <ul>
                        {
                            task.map((curTask) => {
                                return (
                                    <ToDoList
                                        key={curTask.id}
                                        data={curTask.content}
                                        handleDeleteToDo={handleDeleteToDo}
                                        onhandleCheckedTodo={handleCheckedTodo}
                                        checked={curTask.checked}
                                    />
                                )
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