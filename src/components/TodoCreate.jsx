import React, { useState } from 'react'

const TodoCreate = ({createTodo}) => {

    const [title, setTitle] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!title.trim()){
           return setTitle('');
        }
        createTodo(title);
        setTitle('');
        
    }

  return (
    <form
          onSubmit={handleSubmit}
          className="bg-white rounded-md overflow-hidden py-4 flex gap-4 items-center px-4 mt-8"
        >
          <span className="border-2 inline-block rounded-full h-5 w-5"></span>
          <input
            type="text"
            placeholder="Create new todo..."
            className="w-full text-gray-500 outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </form>
  )
}

export default TodoCreate