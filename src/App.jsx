import React, { useState } from "react";
import Header from "./components/Header";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";

const initialStateTodos = [
  {
    id: 1,
    title: "Go to the Gym",
    completed: true,
  },
  {
    id: 2,
    title: "Complete online Bluuweb course",
    completed: false,
  },
  {
    id: 3,
    title: "10 minutes meditation",
    completed: false,
  },
  {
    id: 4,
    title: "Complete todo app Frontend Mentor",
    completed: false,
  },
];
const App = () => {
  const [todos, setTodos] = useState(initialStateTodos);
  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id) => {
    setTodos(
      todos.map((td) => {
        return td.id === id ? { ...td, completed: !td.completed } : td;
      })
    );
  };

  const computedLeft = () => todos.filter((todo) => !todo.completed).length;

  const clearCompleted = () =>
    setTodos(todos.filter((todo) => !todo.completed));

  const [filter, setFilter] = useState("all");

  const filterTodos = () => {
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
    }
  };

  const changeFilter = (filter) =>{
    setFilter(filter)
  }

  return (
    <div className="min-h-screen bg-slate-100 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
      <Header />
      <main className="container mx-auto px-4">
        <TodoCreate createTodo={createTodo} />
        <TodoList
          todos={filterTodos()}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
        <TodoComputed
          computedLeft={computedLeft()}
          clearCompleted={clearCompleted}
        />
        <TodoFilter changeFilter={changeFilter} filter={filter}/>
      </main>
      <footer className="text-center mt-8">Drag and Drop</footer>
    </div>
  );
};

export default App;
