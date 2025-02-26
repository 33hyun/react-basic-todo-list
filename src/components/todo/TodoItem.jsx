import styled from "styled-components";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo, toggleTodoCompleted } from "../api/todo-api";

const TodoItem = ({ id, text, completed }) => {
  const queryClient = useQueryClient();

  // ✅ 완료/취소 상태 변경 Mutation
  const { mutate: toggleTodoMutate } = useMutation({
    mutationFn: () => toggleTodoCompleted(id, completed),
    onSuccess: () => queryClient.invalidateQueries(["todos"]),
  });

  // ✅ 삭제 Mutation
  const { mutate: deleteTodoMutate } = useMutation({
    mutationFn: () => deleteTodo(id),
    onSuccess: () => queryClient.invalidateQueries(["todos"]),
  });

  return (
    <TodoItemWrapper>
      <TodoItemLink to={`/todos/${id}`} $completed={completed}>
        {text}
      </TodoItemLink>
      <TodoItemActions>
        <ActionButton onClick={toggleTodoMutate} $bgColor={completed ? "#242424" : "#582be6"}>
          {completed ? "취소하기" : "완료하기"}
        </ActionButton>
        <ActionButton onClick={deleteTodoMutate} $bgColor="#e6582b">
          삭제하기
        </ActionButton>
      </TodoItemActions>
    </TodoItemWrapper>
  );
};

export const ActionButton = styled.button`
  background-color: ${(props) => props.$bgColor};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  text-align: center;

  &:hover {
    opacity: 0.8;
  }
`;

const TodoItemWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  background-color: white;
  padding: 1.25rem;
  border-radius: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const TodoItemLink = styled(Link)`
  text-decoration: ${({ $completed }) => ($completed ? "line-through" : "none")};

  &:hover {
    text-decoration: underline;
  }
`;

const TodoItemActions = styled.div`
  display: flex;
  gap: 1rem;
`;
TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

export default TodoItem;