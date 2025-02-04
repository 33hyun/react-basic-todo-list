/**
 * @param {{ todo: { id: number, text: string, completed: boolean }, handleUpdate: Function, handleDelete: Function }} props
 */
const TodoItem = ({ todo, handleUpdate, handleDelete }) => {
  return (
    <li style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
      {todo.text}
      <button onClick={() => handleUpdate(todo.id)}>
        {todo.completed ? "완료" : "미완료"}
      </button>
      <button onClick={() => handleDelete(todo.id)}>삭제</button>
    </li>
  );
};

export default TodoItem;