export default function CartListItem (props){
    return (
        <div>
            {props.task.title}
            <button onClick={()=>props.addToCartAndBack(props.task.id)}>Back to list</button>
            <button onClick={()=>props.deleteBtn(props.task.id)}>Delete</button>

        </div>
    )
}