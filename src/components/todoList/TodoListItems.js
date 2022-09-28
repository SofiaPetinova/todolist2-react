export default function TodoListItems (props) {
    return (
        <div>
            {props.task.title}
            <button disabled={props.index === 0} onClick={()=>props.moveUp(props.task.id)}>↑</button>
            <button disabled={props.index === props.list.length - 1} onClick={()=>props.moveDown(props.task.id)}>↓</button>
            <button onClick={()=>props.addToCartAndBack(props.task.id)}>Add to cart</button>
            <button onClick={()=>props.deleteTask(props.task.id)}>Delete</button>
        </div>
    )
}