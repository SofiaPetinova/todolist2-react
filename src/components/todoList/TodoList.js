import TodoListItems from "./TodoListItems";
import OpenInputOption from "../input/OpenInputOption";

export default function TodoList(props) {
    return (
        <div>
            <h1>To do list</h1>
            <OpenInputOption inputFunction={props.addNewTask} buttonLabel={'Add new task'}/>
            {props.list.filter(el => !el.cart).map((el, index) =>
                <TodoListItems key={el.id}
                               listLength={props.list.filter(el => !el.cart).length}
                               index={index}
                               task={el}
                               moveUp={props.moveUp}
                               moveDown={props.moveDown}
                               deleteTask={props.deleteTask}
                               addToCartAndBack={props.addToCartAndBack}
                               updateTask={props.updateTask}/>)}
        </div>
    )
}