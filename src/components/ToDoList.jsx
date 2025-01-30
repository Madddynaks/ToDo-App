// src/components/ToDoList.jsx
import ToDoItem from "./ToDoItem";

const ToDoList = ({ todos, deleteTodo, toggleComplete, editTodo }) => {
  return (
    <div className="space-y-4">
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
};

export default ToDoList;
