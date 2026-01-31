import { useState, useEffect } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [inputValue, setInputValue] = useState("");
  const [inputDescription, setInputDescription] = useState(""); 

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: inputValue,
      description: inputDescription,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInputValue("");
    setInputDescription(""); 
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const editTodo = (id, newText, newDescription) => {
    
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, text: newText, description: newDescription }
          : todo,
      ),
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6">
        {" "}

        <Header />

        <form
          onSubmit={handleAddTodo}
          className="flex flex-col gap-3 mb-6 bg-gray-50 p-4 rounded-lg border border-gray-200"
        >
          <input
            type="text"
            placeholder="Task Title (e.g., Buy Groceries)"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 font-medium"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          <textarea
            placeholder="Description (optional details...)"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm h-20 resize-none"
            value={inputDescription}
            onChange={(e) => setInputDescription(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors font-semibold shadow-sm"
          >
            Add Task
          </button>
        </form>

        <ToDoList
          todos={todos}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          editTodo={editTodo}
        />
      </div>
    </div>
  );
}

export default App;
