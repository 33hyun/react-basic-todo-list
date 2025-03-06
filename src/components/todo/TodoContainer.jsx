import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import TodoDashboard from "./TodoDashboard";

const TodoContainer = () => {
  return (
    <section className="flex flex-col gap-12">
      <TodoDashboard />
      <TodoForm />
      <TodoList />
    </section>
  );
};

export default TodoContainer;