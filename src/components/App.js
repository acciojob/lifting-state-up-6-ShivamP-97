import React, { useState } from "react";
import "./../styles/App.css";
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React" }
  ]);

  const handleComplete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      {/* Do not remove the main div */}
      <h1>Todo App</h1>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;
