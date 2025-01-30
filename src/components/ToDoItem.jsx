// src/components/ToDoItem.jsx
import { useState } from "react";

const ToDoItem = ({ todo, deleteTodo, toggleComplete, editTodo }) => {
  const [editing, setEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    if (newText) {
      editTodo(todo.id, newText);
      setEditing(false);
    }
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-md p-4 flex justify-between items-center space-x-4 transition-transform transform ${
        todo.completed ? "opacity-50" : ""
      } hover:scale-105`}
    >
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          className="h-5 w-5 text-indigo-600"
        />
        {editing ? (
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="border border-gray-300 p-2 rounded text-lg w-64"
          />
        ) : (
          <span className={`text-lg ${todo.completed ? "line-through text-gray-400" : ""}`}>
            {todo.text}
          </span>
        )}
      </div>
      <div className="flex space-x-2">
        <button
          onClick={() => deleteTodo(todo.id)}
          className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition duration-300"
        >
          Delete
        </button>
        {editing ? (
          <button
            onClick={handleEdit}
            className="bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600 transition duration-300"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setEditing(true)}
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default ToDoItem;
