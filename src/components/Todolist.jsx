import TodoItem from "./components/TodoItem";

const TodoList = ({ todos, handleUpdate, handleDelete }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} handleUpdate={handleUpdate} handleDelete={handleDelete} />
      ))}
    </ul>
  );
};

export default TodoList;