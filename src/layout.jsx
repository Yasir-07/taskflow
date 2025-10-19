import React, { Children } from "react";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4 text-center text-indigo-600">
          TaskFlow
        </h1>
        {children}
      </div>
    </div>
  );
};

export default Layout;
