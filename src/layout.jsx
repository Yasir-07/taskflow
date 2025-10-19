import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="w-full max-w-lg mx-auto bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-8 transition-all duration-300">
      <h1 className="text-3xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-6">
        TaskFlow
      </h1>
      {children}
    </div>
  );
};

export default Layout;
