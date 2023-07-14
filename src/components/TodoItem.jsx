import React from "react";
import IconCross from "./icons/IconCross";
import IconCheck from "./icons/IconCheck";

const TodoItem = ({ todo, removeTodo, updateTodo }) => {
  const { id, title, completed } = todo;
  return (
    <article className="flex gap-4 border-b-gray-400 border-b ">
      {/* <button className="border-2 inline-block rounded-full flex-none h-5 w-5">
        <IconCheck />
      </button> */}
      <button
        className={`border-2 rounded-full flex-none h-5 w-5 dark:border-gray-700 transition-all duration-1000 ${
          completed
            ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center"
            : "inline-block"
        }`}
        onClick={() => updateTodo(id)}
      >
        {completed && <IconCheck />}
      </button>
      <p className={`text-gray-600 grow dark:text-gray-400 transition-all duration-1000 ${completed && "line-through"}`}>
        {title}
      </p>
      <button className="flex-none" onClick={() => removeTodo(id)}>
        <IconCross />
      </button>
    </article>
  );
};

export default TodoItem;
