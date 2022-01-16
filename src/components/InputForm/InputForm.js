import React, {useState} from "react";

function InputForm() {
  const [todos, setTodos] = useState(["Take the dogs out for a walk", "Take the trash out"]);
  //state to track what use types in 
    
  const [input, setInput] = useState('');
  
  const addTodo = (e) => {
      e.preventDefault(); //prevents a refresh 
      console.log(`This is the ${input} `);
      setTodos([...todos, input]);
      setInput('');
  };
  
  return (
    <div className="App">
        <h1>Welcome to my TODO List!</h1>
       
        <form>
            <input value={input} onChange={e => setInput(e.target.value)} type="text"/>
            <button type="submit" onClick={addTodo}>
                Add todo
            </button>
        </form>
        
        <h2>List of Todos</h2>
        {todos.map(todo=>(
            <p>{todo}</p>
        ))}cd
    </div>
  );
}




export default InputForm;
