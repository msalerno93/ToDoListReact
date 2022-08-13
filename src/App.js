import { useState } from "react";
import "./App.css";
import BMI from "./Component/BMI";

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };

    setList([...list, newTodo]);

    setInput("");
  };

  const deleteTodo = (id) => {
    // Filter out todo with the id
    const newList = list.filter((todo) => todo.id !== id);

    setList(newList);
  };

  return (
    <div className="App">
      <h1 className="Header">Todo List</h1>
      <input
        className="input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => addTodo(input)}>Add</button>
      <ul>
        {list.map((todo) => (
          <li key={todo.id}>
            {todo.todo}
            <button className="Delete" onClick={() => deleteTodo(todo.id)}>&times;</button>
          </li>
        ))}
      </ul>
      <div>
        <BMI />
      </div>
    </div>
  );
}

export default App;