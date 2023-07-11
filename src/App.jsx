import React from "react";
import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-100 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="uppercase text-white text-xl font-bold tracking-[0.3em]">
            Todo
          </h1>
          <button>
            <MoonIcon fill={"#FFF"}/>
          </button>
        </div>
        <form
          action=""
          className="bg-white rounded-md overflow-hidden py-4 flex gap-4 items-center px-4 mt-8"
        >
          <span className="border-2 inline-block rounded-full h-5 w-5"></span>
          <input
            type="text"
            placeholder="Create new todo..."
            className="w-full text-gray-500 outline-none"
          />
        </form>
      </header>

      <main className="container mx-auto px-4 mt-8 ">
        <div className="bg-white rounded-md [&>article]:p-4">
          <article className="flex gap-4 border-b-gray-400 border-b ">
            <button className="border-2 inline-block rounded-full flex-none h-5 w-5"></button>
            <p className="text-gray-600 grow">Complete online course</p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>
          <article className="flex gap-4 border-b-gray-400 border-b ">
            <button className="border-2 inline-block rounded-full flex-none h-5 w-5"></button>
            <p className="text-gray-600 grow">Complete online course</p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>
          <article className="flex gap-4 border-b-gray-400 border-b ">
            <button className="border-2 inline-block rounded-full flex-none h-5 w-5"></button>
            <p className="text-gray-600 grow">Complete online course</p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>

          <section className="px-4 py-4 flex justify-between">
            <span className="text-gray-400">5 items left</span>
            <button className="text-gray-400">Clear Completed</button>
          </section>
        </div>
      </main>

      <section className="container mx-auto px-4 mt-8">
        <div className="bg-white rounded p-4 flex justify-center gap-4">
          <button className="text-blue-600">All</button>
          <button className="hover:text-blue-600">Active</button>
          <button className="hover:text-blue-600">Completed</button>
        </div>
      </section>

      <p className="text-center mt-8">Drag and Drop</p>
    </div>
  );
};

export default App;
