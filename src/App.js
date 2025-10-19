import React, { useState, useEffect } from "react";
import "./App.css";
import Layout from "./layout";
import TaskForm from "../src/components/Taskform";
import TaskList from "../src/components/TaskList";
import FilterBar from "../src/components/FilterBar";

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState("All");

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskDesc) => {
    console.log("Adding task", taskDesc);
    if (!taskDesc.trim()) {
      return;
    }
    const newtask = { id: Date.now(), text: taskDesc, completed: false };
    setTasks((prevtask) => [...prevtask, newtask]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  const filteredTasks =
    filter === "Active"
      ? tasks.filter((t) => !t.completed)
      : filter === "Completed"
      ? tasks.filter((t) => t.completed)
      : tasks;

  const remaining = tasks.filter((t) => !t.completed).length;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-all p-4">
      <Layout>
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="fixed top-4 right-4 px-4 py-2 bg-indigo-500 text-white rounded shadow-md hover:bg-indigo-600 transition-colors duration-200"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        <TaskForm addTask={addTask} />

        <FilterBar
          filter={filter}
          setFilter={setFilter}
          remaining={remaining}
        />

        <TaskList
          tasks={filteredTasks}
          onDelete={deleteTask}
          onToggle={toggleTask}
        />
      </Layout>
    </div>
  );
}

export default App;
