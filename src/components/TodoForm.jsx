const TodoForm = ({ todoText, setTodoText, handleSubmit }) => {
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" value={todoText} onChange={(e) => setTodoText(e.target.value)} />
        <button type="submit">제출하기</button>
      </form>
    );
  };
  
  export default TodoForm;