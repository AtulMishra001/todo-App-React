import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ todos, deleteTodo, toggleComplete, editTodo }) => {
  if (todos.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-8">
        No tasks yet. Add one above!
      </div>
    );
  }

  return (
    <ul className="w-full">
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
