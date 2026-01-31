# React To-Do Application

A robust and responsive To-Do List application built with **React**, **Vite**, and **Tailwind CSS**. This project allows users to manage tasks with full CRUD (Create, Read, Update, Delete) functionality and persists data using LocalStorage.

## 🚀 Features

* **Add Tasks:** Create new tasks with a Title and an optional Description.
* **Edit Tasks:** Update existing tasks (both title and description) inline.
* **Mark as Completed:** Toggle the completion status of tasks.
* **Delete Tasks:** Remove unwanted items from the list.
* **Persistent Data:** All tasks are saved to the browser's `localStorage`, so data is not lost on page reload.
* **Responsive Design:** Styled with Tailwind CSS for a clean, modern look on all devices.
* **Expandable Details:** View or hide task descriptions to keep the interface clean.

## 🛠️ Tech Stack

* **Framework:** React (Vite)
* **Styling:** Tailwind CSS
* **State Management:** React Hooks (`useState`, `useEffect`)

## ⚙️ Installation & Run Instructions

Follow these steps to run the project locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/AtulMishra001/todo-App-React
    cd todo-app
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

4.  **Open in Browser:**
    Click the link shown in the terminal (usually `http://localhost:5173/`).

## 📂 Project Structure


```
├── App.jsx # Main state logic & LocalStorage handling 
├── main.jsx # Entry point 
└── index.css # Tailwind imports
└── src/ 
    ├── components/ 
    │ 
    ├── Header.jsx # App title 
    │ 
    ├── ToDoList.jsx # Renders the list of items 
    │ 
    └── ToDoItem.jsx # Individual task (handles Edit/Delete/Toggle) 
```

[gitHub repo link](https://github.com/AtulMishra001/todo-App-React)