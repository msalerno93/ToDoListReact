import { useState } from 'react';
import './App.css';

function App() {

  const [list, setList] = useState([])
  const [input, setInput] = useState('')

  return (
    <div className='App'>
      <div className="Header">To Do List</div>
      <input 
        type="text" 
        className="input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
       />
       <button>Add Task</button>
    </div>
  );
}

export default App;
