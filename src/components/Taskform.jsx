import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    addTask(text);
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center mt-6"
    >
      <div className="flex w-full max-w-md bg-white border border-gray-200 rounded-lg shadow-sm">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a new task..."
          className="flex-1 px-4 py-2 rounded-l-lg focus:outline-none text-gray-800"
        />
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-5 py-2 rounded-r-lg transition-all duration-200"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
