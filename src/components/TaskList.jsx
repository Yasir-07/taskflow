import React from "react";
import TaskItem from "./TaskItem";
import { AnimatePresence } from "framer-motion";

const TaskList = ({ tasks, onDelete, onToggle }) => {
  if (!tasks || tasks.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-6 text-lg">
        No tasks yet — add your first one!
      </p>
    );
  }

  return (
    <div className="mt-6 w-full max-w-md mx-auto">
      <ul className="space-y-2">
        <AnimatePresence>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onDelete={onDelete}
              onToggle={onToggle}
            />
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default TaskList;
