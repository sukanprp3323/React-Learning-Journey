import { useState } from "react";

export const TodoForm = ({ onAddTodo }) => {

    const [inputValue, setInputValue] = useState({}); //* temparay Input Values

    const handleInputValue = (value) => {
        setInputValue({ id: value, content: value, checked: false })
    }

    const handleFormSubmit = (event) => {
        onAddTodo(inputValue);
        event.preventDefault();
        setInputValue({ id: "", content: "", checked: false });
    }

    return (
        <section className="form">
            <form onSubmit={handleFormSubmit}>
                <div>
                    <input
                        type="text"
                        className="todo-input"
                        autoComplete="off"
                        placeholder="add your Task"
                        value={inputValue.content}
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
    );
}