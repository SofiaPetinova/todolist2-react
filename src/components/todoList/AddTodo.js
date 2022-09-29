import {useState} from "react";

export default function AddTodo(props){
    const [inputName, setInputName] = useState(props.task !== undefined ? props.task.title : '')
    function saveButtonHandler(){
        props.inputFunction(inputName, props.task === undefined ? null : props.task.id)
        props.toggleAddTask()
    }
    return (
        <div>
            <input placeholder={'Type here'} value={inputName} onChange={(e)=> setInputName(e.target.value)}/>
            <button onClick={saveButtonHandler}>Save</button>
            <button onClick={props.toggleAddTask}>Cancel</button>
        </div>


    )
}