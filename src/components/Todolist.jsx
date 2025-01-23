import React from "react";
import { use } from "react";
import { useState } from "react";

const todos = [
  { id: 1, text: "Buy milk" },
  { id: 2, text: "Clean the house" },
  { id: 3, text: "Go for a run" },
  { id: 4, text: "Finish homework" },
  { id: 5, text: "Call mom" },
  { id: 6, text: "Buy groceries" },
  { id: 7, text: "Walk the dog" },
  { id: 8, text: "Read a book" },
  { id: 9, text: "Do laundry" },
  { id: 10, text: "Write code" },
];

const Todolist = () => {
  const [todos, setTodos] = useState(SAMPLE_TODOS);

  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newTodo.trim()) {
      return;
    }

    setTodos([...todos, { id: crypto.randomUUID(), text: newTodo }]);
    setNewTodo("");
  };

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={mewTodo}
          onChange={handleInputChange}
          placeholder="새로운 todo를 입력하세요."
        />
        <button type="submit">추가하기</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}> {todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
