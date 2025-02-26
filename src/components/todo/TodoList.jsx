import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../api/todo-api"; // ✅ API 함수 import
import { useSearchParams } from "react-router-dom";

const TodoList = () => {
  const [searchParams] = useSearchParams();
  const selectedFilter = searchParams.get("filter"); // ✅ URL 쿼리에서 필터 가져오기

  /** ✅ Todo 목록 가져오기 */
  const {
    data: todos = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["todos"], // ✅ 캐싱 키 설정
    queryFn: getTodos,   // ✅ 데이터 가져오는 함수
  });

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>할 일 목록을 가져오는 중 오류 발생 - {String(error)}</div>;

  /** ✅ 필터링된 Todo 목록 반환 */
  const getFilteredTodos = () => {
    if (selectedFilter === "completed") return todos.filter((todo) => todo.completed);
    if (selectedFilter === "pending") return todos.filter((todo) => !todo.completed);
    return todos;
  };

  const filteredTodos = getFilteredTodos();

  return (
    <TodoListSection>
      <TodoListHeader>할 일 목록</TodoListHeader>
      <TodoListContent>
        {filteredTodos.map(({ id, text, completed }) => (
          <TodoItem key={id} text={text} completed={completed} id={id} />
        ))}
      </TodoListContent>
    </TodoListSection>
  );
};

/** ✅ 전체 Todo 목록 컨테이너 스타일 */
const TodoListSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

/** ✅ 헤더 스타일 */
const TodoListHeader = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`;

/** ✅ 리스트 스타일 */
const TodoListContent = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default TodoList;