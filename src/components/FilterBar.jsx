import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const FilterBar = ({ filter, setFilter, remaining }) => {
  const filters = ["All", "Active", "Completed"];

  return (
    <div className="flex justify-between items-center mb-6">
      <div className="flex gap-3">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-full border ${
              filter === f
                ? "bg-indigo-500 text-white border-indigo-500"
                : "bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-200 border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
            } transition-all duration-200`}
          >
            {f}
          </button>
        ))}
      </div>

      <AnimatePresence mode="popLayout">
        <motion.div
          key={remaining}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className={`px-3 py-1 rounded-full font-semibold text-sm ${
            remaining === 0
              ? "bg-green-200 text-green-800"
              : "bg-indigo-200 text-indigo-800"
          }`}
        >
          {remaining} {remaining === 1 ? "task" : "tasks"} left
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default FilterBar;
