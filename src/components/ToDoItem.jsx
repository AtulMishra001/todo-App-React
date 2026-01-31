import React from "react";

const ToDoItem = ({ todo, deleteTodo, toggleComplete, editTodo }) => {
  return (
    <li className="flex items-center justify-between p-3 border-b border-gray-200 bg-white hover:bg-gray-50 transition-colors">
      <div className="flex items-center gap-3 overflow-hidden">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer"
        />

        <span
          className={`text-lg truncate ${todo.completed ? "line-through text-gray-400" : "text-gray-700"}`}
        >
          {todo.text}
        </span>
      </div>

      <div className="flex gap-2">
        <button
          className="text-yellow-600 hover:text-yellow-800 px-2 py-1 rounded transition-colors"
          onClick={() => alert("Edit feature coming in Commit #5!")}
        >
          Edit
        </button>

        <button
          onClick={() => deleteTodo(todo.id)}
          className="text-red-500 hover:text-red-700 px-2 py-1 rounded transition-colors"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default ToDoItem;

