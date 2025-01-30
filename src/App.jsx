// src/App.jsx
import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const addTodo = () => {
    if (task) {
      setTodos([
        ...todos,
        { id: Date.now(), text: task, completed: false },
      ]);
      setTask("");
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-center items-center py-10">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-3xl">
        <Header />
        <div className="flex mb-6">
          <input
            type="text"
            className="flex-1 border border-gray-300 p-3 rounded-l-lg text-lg"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a new task"
          />
          <button
            className="bg-indigo-600 text-white p-3 rounded-r-lg font-semibold hover:bg-indigo-700 transition duration-300"
            onClick={addTodo}
          >
            Add Task
          </button>
        </div>
        <ToDoList
          todos={todos}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          editTodo={editTodo}
        />
      </div>
    </div>
  );
};

export default App;
