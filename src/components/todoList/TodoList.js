import TodoListItems from "../todoListItems/TodoListItems";
import {useState} from "react";
import AddTodo from "../todoListItems/AddTodo";

export default function TodoList(props){
    const [openAddInput, setOpenAddInput] = useState(false)

    function toggleAddTask(){
        setOpenAddInput(!openAddInput)
    }
    return (
        <div>
            {props.list.map(el => <TodoListItems key={el.id} task={el}/>)}
            {!openAddInput && <button onClick={toggleAddTask}>Add new task</button>}
            {openAddInput && <AddTodo toggleAddTask={toggleAddTask}/>}
        </div>
    )
}