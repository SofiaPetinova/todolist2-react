import './App.css';
import {useState} from "react";
import {v4 as uuidv4} from 'uuid';
import TodoList from "./components/todoList/TodoList";
import CartList from "./components/cartList/CartList";


function App() {
    const [list, setList] = useState([
        {
            id: uuidv4(),
            title: 'Learn React',
            isDone: true,
            cart: false
        },
        {
            id: uuidv4(),
            title: 'Learn Redux',
            isDone: false,
            cart: false
        },
        {
            id: uuidv4(),
            title: 'Practice',
            isDone: false,
            cart: true
        }
    ])

    function addNewTask(title) {
        setList([...list, {
            id: uuidv4(),
            title,
            isDone: false,
            cart: false
        }])
    }

    function moveUp(id) {
        const newList = [...list]
        const currentIndex = list.indexOf(newList.find(el => el.id === id))
        const currentTask = newList[currentIndex]
        newList[currentIndex] = newList[currentIndex - 1]
        newList[currentIndex - 1] = currentTask
        setList(newList)
    }

    function moveDown(id) {
        const newList = [...list]
        const currentIndex = list.indexOf(newList.find(el => el.id === id))
        const currentTask = newList[currentIndex]
        newList[currentIndex] = newList[currentIndex + 1]
        newList[currentIndex + 1] = currentTask
        setList(newList)
    }

    function deleteTask(id) {
        const newList = list.filter(el => el.id !== id)
        setList(newList)
    }

    return (
        <div className="App">
            <TodoList list={list}
                      addNewTask={addNewTask}
                      moveUp={moveUp}
                      moveDown={moveDown}
                      deleteTask={deleteTask}/>
            <hr/>
            <CartList list={list}/>


        </div>
    );
}

export default App;
