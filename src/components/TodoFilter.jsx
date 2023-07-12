import React from "react";

const TodoFilter = ({ changeFilter, filter }) => {
  return (
    <section className="container mx-auto  mt-8">
      <div className="bg-white rounded p-4 flex justify-center gap-4">
        <button
          onClick={() => changeFilter("all")}
          className={`${
            filter === "all"
              ? "text-blue-600"
              : "text-gray-400 hover:text-blue-600"
          }`}
        >
          All
        </button>
        <button
          onClick={() => changeFilter("active")}
          className={`${
            filter === "active"
              ? "text-blue-600"
              : "text-gray-400 hover:text-blue-600"
          }`}
        >
          Active
        </button>
        <button
          onClick={() => changeFilter("completed")}
          className={`${
            filter === "completed"
              ? "text-blue-600"
              : "text-gray-400 hover:text-blue-600"
          }`}
        >
          Completed
        </button>
      </div>
    </section>
  );
};

export default TodoFilter;
