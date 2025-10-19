import React, { useState, useEffect } from "react";
import "./App.css";
import Layout from "./layout";
import TaskForm from "../src/components/Taskform";
import TaskList from "../src/components/TaskList";

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

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

  const toggletask = (id) => {
    setTasks(
      tasks.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  return (
    <Layout>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggletask} />
    </Layout>
  );
}

export default App;
