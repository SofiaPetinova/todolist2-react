import TodoListItems from "./TodoListItems";
import {useState} from "react";
import AddTodo from "./AddTodo";

export default function TodoList(props) {
    const [openAddInput, setOpenAddInput] = useState(false)

    function toggleAddTask() {
        setOpenAddInput(!openAddInput)
    }

    return (
        <div>
            <h1>To do list</h1>
            {!openAddInput && <button onClick={toggleAddTask}>Add new task</button>}
            {openAddInput && <AddTodo toggleAddTask={toggleAddTask} addNewTask={props.addNewTask}/>}
            {props.list.filter(el => !el.cart).map((el, index) => <TodoListItems key={el.id}
                                                                                 list={props.list.filter(el => !el.cart)}
                                                                                 index={index}
                                                                                 task={el}
                                                                                 moveUp={props.moveUp}
                                                                                 moveDown={props.moveDown}
                                                                                 deleteTask={props.deleteTask}
                                                                                 addToCartAndBack={props.addToCartAndBack}/>)}
        </div>
    )
}