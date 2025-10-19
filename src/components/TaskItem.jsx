import React from "react";
import { motion } from "framer-motion";

const TaskItem = ({ task, onDelete, onToggle }) => {
  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.2 }}
      className={`flex justify-between items-center px-4 py-3 mb-3 rounded-lg border ${
        task.completed
          ? "bg-green-50 border-green-200 text-gray-400 dark:text-gray-500"
          : "bg-white border-gray-200 dark:bg-gray-700 dark:border-gray-600 hover:shadow-md transition-all duration-200"
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
          className="h-5 w-5 accent-indigo-500"
        />
        <span
          className={`text-base font-medium ${
            task.completed
              ? "line-through text-gray-400 dark:text-gray-500"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          {task.text}
        </span>
      </div>

      <button
        onClick={() => onDelete(task.id)}
        className="text-red-500 hover:text-red-600 dark:hover:text-red-400 font-bold text-lg transition-all duration-200"
      >
        ✕
      </button>
    </motion.li>
  );
};

export default TaskItem;
