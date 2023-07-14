import React from "react";

const TodoComputed = ({computedLeft, clearCompleted }) => {
  return (
    <section className=" bg-white px-4 py-4 flex justify-between rounded-b-md dark:bg-gray-800 transition-all duration-1000">
      <span className="text-gray-400">{computedLeft} item left</span>
      <button onClick={()=> clearCompleted()} className="text-gray-400">Clear Completed</button>
    </section>
  );
};

export default TodoComputed;
