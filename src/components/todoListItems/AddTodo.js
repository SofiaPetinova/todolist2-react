import {useState} from "react";

export default function AddTodo(props){
    const [inputName, setInputName] = useState('')
    return (
        <div>
            <input placeholder={'Type here'} value={inputName} onChange={(e)=> setInputName(e.target.value)}/>
            <button>Save</button>
            <button onClick={props.toggleAddTask}>Cancel</button>
        </div>


    )
}