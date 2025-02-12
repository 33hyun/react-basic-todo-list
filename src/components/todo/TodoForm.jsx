import { useContext, useState } from "react";
import styled from "styled-components";
import { ActionButton } from "./TodoItem";
import { TodoContext } from "../../../context/TodoContext";

const TodoForm = () => {
  const { addTodos } = useContext(TodoContext);

  const [todoText, setTodoText] = useState("");

  const handleSubmit = (e) => {
    // 새로고침 막아주기
    e.preventDefault();

    if (!todoText.trim()) {
      return;
    }

    addTodos(todoText);

    setTodoText("");
  };

  // input 창의 입력값을 가져오는 함수
  const handleChangeTodoText = (e) => {
    setTodoText(e.target.value);
  };

  return (
    <TodoFormWrapper onSubmit={handleSubmit}>
      <TodoFormInput
        type="text"
        value={todoText}
        onChange={handleChangeTodoText}
        placeholder="일정을 입력하세요"
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