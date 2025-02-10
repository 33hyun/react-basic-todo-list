import styled from "styled-components";
import PropTypes from 'prop-types';
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodoCompleted, deleteTodo }) => {
  return (
    <TodoListSection>
      <TodoListHeader>Tasks</TodoListHeader>
      <TodoListContent>
        {todos.map(({ id, text, completed }) => (
          <TodoItem
            key={id}
            toggleTodoCompleted={toggleTodoCompleted}
            deleteTodo={deleteTodo}
            text={text}
            completed={completed}
            id={id}
          />
        ))}
      </TodoListContent>
    </TodoListSection>
  );
};

const TodoListSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TodoListHeader = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`;
const TodoListContent = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  toggleTodoCompleted: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodoList;