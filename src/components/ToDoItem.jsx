import React, { useState } from "react";

const ToDoItem = ({ todo, deleteTodo, toggleComplete, editTodo }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <li className="border-b border-gray-200 bg-white hover:bg-gray-50 transition-colors">
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center gap-3 overflow-hidden flex-1">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(todo.id)}
            className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer shrink-0"
          />

          <div className="flex flex-col overflow-hidden">
            <span
              className={`text-lg truncate ${todo.completed ? "line-through text-gray-400" : "text-gray-700"}`}
            >
              {todo.text}
            </span>


            {todo.description && !isExpanded && (
              <button
                onClick={() => setIsExpanded(true)}
                className="text-xs text-blue-500 hover:text-blue-700 text-left w-fit"
              >
                Show Details ↓
              </button>
            )}
          </div>
        </div>

        <div className="flex gap-2 ml-2">
          <button
            className="text-yellow-600 hover:text-yellow-800 px-2 py-1 rounded transition-colors"
            onClick={() => alert("Edit feature coming next!")}
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
      </div>


      {isExpanded && todo.description && (
        <div className="px-11 pb-3 text-gray-600 text-sm animate-fade-in">
          <div className="p-2 bg-gray-100 rounded">{todo.description}</div>
          <button
            onClick={() => setIsExpanded(false)}
            className="text-xs text-gray-400 hover:text-gray-600 mt-1"
          >
            Hide Details ↑
          </button>
        </div>
      )}
    </li>
  );
};

export default ToDoItem;