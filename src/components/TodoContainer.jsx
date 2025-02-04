import { useState } from "react";
import TodoForm from "./src/components/TodoForm";
import TodoList from "./src/components/TodoList";

const SAMPLE_TODOS = [
  { id: 1, text: "Buy milk", completed: false },
  { id: 2, text: "Clean the house", completed: false },
  { id: 3, text: "Go for a run", completed: false },
];

const TodoContainer = () => {
  const [todos, setTodos] = useState(SAMPLE_TODOS);
  const [todoText, setTodoText] = useState("");

  // ✅ 새로운 할 일 추가
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todoText.trim()) return;
    setTodos([{ id: crypto.randomUUID(), text: todoText, completed: false }, ...todos]);
    setTodoText("");
  };

  // ✅ 할 일 완료 상태 변경
  const handleUpdate = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  // ✅ 할 일 삭제
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <TodoForm todoText={todoText} setTodoText={setTodoText} handleSubmit={handleSubmit} />
      <TodoList todos={todos} handleUpdate={handleUpdate} handleDelete={handleDelete} />
    </div>
  );
};

export default TodoContainer;