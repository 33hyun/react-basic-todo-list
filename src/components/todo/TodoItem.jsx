import { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { TodoContext } from "../../../context/TodoContext";

const TodoItem = ({ id, text, completed }) => {
  const { toggleTodoCompleted, deleteTodo } = useContext(TodoContext);

  return (
    <TodoItemWrapper>
      <TodoItemText $completed={completed}> {text} </TodoItemText>

      <TodoItemActions>
        <ActionButton
          onClick={() => toggleTodoCompleted(id)}
          $bgColor={completed ? "#242424" : "#582be6"}
        >
          {completed ? "취소하기" : "완료하기"}
        </ActionButton>

        <ActionButton onClick={() => deleteTodo(id)} $bgColor="#e6582b">
          삭제하기
        </ActionButton>
      </TodoItemActions>
    </TodoItemWrapper>
  );
};

const TodoItemWrapper = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  background-color: white;
  padding: 1.25rem;
  border-radius: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const TodoItemText = styled.p`
  text-decoration: ${({ $completed }) =>
    $completed ? "line-through" : "none"};
`;

const TodoItemActions = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const ActionButton = styled.button`
  background-color: ${(props) => props.$bgColor};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  word-break: keep-all;

  &:hover {
    opacity: 0.8;
  }
`;
TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

export default TodoItem;