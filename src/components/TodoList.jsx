import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, removeTodo, updateTodo }) => {
  return (
    <div  className="bg-white rounded-t-md overflow-hidden  dark:bg-gray-800 transition-all duration-1000 [&>article]:p-4 mt-8">
     {todos.map((todo)=> (<TodoItem key={todo.id} todo={todo} updateTodo={updateTodo} removeTodo={removeTodo}/>))}
    </div>
  );
};

export default TodoList;
