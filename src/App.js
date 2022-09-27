import './App.css';
import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import TodoList from "./components/todoList/TodoList";


function App() {
  const [list, setList] = useState([
    {
      id: uuidv4(),
      title: 'Learn React',
      isDone: true
    },
    {
      id: uuidv4(),
      title: 'Learn Redux',
      isDone: false
    },
    {
      id: uuidv4(),
      title: 'Practice',
      isDone: false
    }
  ])



  return (
    <div className="App">
      <TodoList list={list}/>


    </div>
  );
}

export default App;
