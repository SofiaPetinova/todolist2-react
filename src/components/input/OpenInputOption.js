import {useState} from "react";
import AddTodo from "../todoList/AddTodo";

export default function OpenInputOption(props){
    const [openAddInput, setOpenAddInput] = useState(false)

    function toggleAddTask() {
        setOpenAddInput(!openAddInput)
    }
    return(
        <>
            {!openAddInput && <button onClick={toggleAddTask}>{props.buttonLabel}</button>}
            {openAddInput && <AddTodo toggleAddTask={toggleAddTask} inputFunction={props.inputFunction} task={props.task}/>}
        </>
    )
}