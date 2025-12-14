import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a React App", completed: false },
    { id: 3, text: "Deploy the React app", completed: false }
  ]);

  const handleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  };

  return (
    <div>
      {/* Do not remove the main div */}
      <h1>Todo App</h1>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}

            {!todo.completed && (
              <button onClick={() => handleComplete(todo.id)}>
                Complete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
