import { FaCheck } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

export const ToDoList = ({ data, handleDeleteToDo, onhandleCheckedTodo, checked }) => {
    return (
        <li className="todo-item" >
            <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
            <button className="check-btn" onClick={()=> onhandleCheckedTodo(data)}>
                <FaCheck />
            </button>
            <button className="delete-btn" onClick={() => { handleDeleteToDo(data) }}>
                <MdDelete />
            </button>
        </li>
    );

};