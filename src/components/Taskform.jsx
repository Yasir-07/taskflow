import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-6 shadow-sm">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
        className="flex-1 px-4 py-2 rounded-l-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-800"
      />
      <button
        type="submit"
        className="bg-indigo-500 text-white px-6 py-2 rounded-r-xl hover:bg-indigo-600 transition-colors duration-200"
      >
        Add
      </button>
    </form>
  );
};

export default TaskForm;
