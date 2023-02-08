"use client";
import React, { useState } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState<{ id: string; name: string }[]>([]);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo === "" || todo.length < 2) {
      alert("Please add a new entry");
    } else {
      const newEntry = {
        id: new Date().getTime().toString(),
        name: todo,
      };
      setTodoList([...todoList, newEntry]);
      setTodo(" ");
    }
  };
  const deleteTodo = (id: string) => {
    const updatedArray = todoList.filter((todo) => {
      return todo.id !== id;
    });
    setTodoList(updatedArray);
  };
  return (
    <div>
      <h1 className="md:text-7xl md:font-extrabold uppercase opacity-60 text-white text-center md:py-6 text-3xl font-semibold py-3 tracking-widest">
        {" "}
        Todo App
      </h1>
      <div>
        <form className="m-auto md:max-w-3xl max-w-xs" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5">
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-full p-3 md:text-2xl"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
            <button
              type="submit"
              className="font-semibold uppercase md:text-2xl text-xl w-1/4 bg-[#EcECF1] md:py-3 py-2 px-2 rounded-[5px] text-black hover:bg-gray-700 hover:text-[#EcECF1] transition-transform"
            >
              Add
            </button>
          </div>
        </form>
        <div className="m-auto md:max-w-3xl max-w-xs md:h-[50vh] h-[70vh] mt-4 overflow-y-scroll">
          {todoList.map((currElem) => (
            <li
              className="list-none bg-slate-400 p-3 rounded-xl text-white capitalize mt-2 relative"
              key={currElem.id}
            >
              <button type="button">
                <MdOutlineDeleteOutline
                  className="text-xl text-center mr-2 translate-y-1"
                  title="Remove"
                  onClick={() => deleteTodo(currElem.id)}
                />
              </button>
              {currElem.name}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
