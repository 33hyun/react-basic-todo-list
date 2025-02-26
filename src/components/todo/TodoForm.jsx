import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ActionButton } from "./TodoItem";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const TodoForm = () => {
  const queryClient = useQueryClient();
  const { mutate: addTodoMutate } = useMutation({
    // mutationFn: addTodos,
    onSettled: () => {
      return queryClient.invalidateQueries(["todos"]);
    },
  });

  const [todoText, setTodoText] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!todoText.trim()) {
      return;
    }

    addTodoMutate(todoText);

    setTodoText("");
  };

  // input 창의 입력값을 가져오는 함수
  const handleChangeTodoText = (e) => {
    setTodoText(e.target.value);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <TodoFormWrapper onSubmit={handleSubmit}>
      <TodoFormInput
        type="text"
        value={todoText}
        onChange={handleChangeTodoText}
        placeholder="일정을 입력하세요"
        ref={inputRef}
      />
      <SubmitButton type="submit" $bgColor="#582be6">
        제출하기
      </SubmitButton>
    </TodoFormWrapper>
  );
};

const TodoFormWrapper = styled.form`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const TodoFormInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  background-color: white;

  flex: 6;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    border-color: #582be6;
    outline: none;
  }
`;

const SubmitButton = styled(ActionButton)`
  flex: 1;
  text-align: center;
`;

export default TodoForm;