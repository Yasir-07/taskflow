import React from "react";

const TaskItem = ({ task, onDelete, onToggle }) => {
  return (
    <li
      className={`flex justify-between items-center bg-white shadow-sm rounded-lg px-4 py-3 mb-3 border transition-all duration-200 ${
        task.completed
          ? "border-green-200 bg-green-50 text-gray-400"
          : "border-gray-200 hover:shadow-md"
      }`}
    >
      <div
        onClick={() => onToggle(task.id)}
        className="flex items-center gap-3 cursor-pointer flex-1"
      >
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="h-5 w-5 accent-indigo-500 cursor-pointer"
        />
        <span
          className={`text-lg font-medium ${
            task.completed ? "line-through text-gray-400" : "text-gray-800"
          }`}
        >
          {task.text}
        </span>
      </div>

      <button
        onClick={() => onDelete(task.id)}
        className="text-red-500 hover:text-red-700 text-lg font-bold px-2"
      >
        ✕
      </button>
    </li>
  );
};

export default TaskItem;
