import { useQuery } from "@tanstack/react-query";
import { FileCheck, LaptopMinimal, Video } from "lucide-react";
import styled from "styled-components";
import { Link, useSearchParams } from "react-router";
import { getTodos } from "../api/todo-api";

const TodoDashboard = () => {
  const [searchParams] = useSearchParams();
  const selectedFilter = searchParams.get("filter") || "all";

  const {
    data: todos,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  const getFilteredTodos = (filter) => {
    if (!todos) return [];

    if (filter === "completed") {
      return todos.filter((todo) => todo.completed);
    }

    if (filter === "pending") {
      return todos.filter((todo) => !todo.completed);
    }
    return todos;
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div> Error fetching todos - {error} </div>;
  }

  const all = getFilteredTodos().length;
  const completed = getFilteredTodos("completed").length;
  const pending = all - completed;

  return (
    <TodoDashboardSection>
      <TodoDashboardHeader>Quick Access</TodoDashboardHeader>

      <TodoDashboardCardList>
        <TodoDashboardCardWrapper $flex={2}>
          <TodoDashboardCard to="/" $selected={selectedFilter === "all"}>
            <div>
              <FileCheck />
            </div>
            <TodoDashboardCardContent>
              {all} <br /> <span>All Tasks</span>
            </TodoDashboardCardContent>
          </TodoDashboardCard>
        </TodoDashboardCardWrapper>
        <TodoDashboardCardWrapper $flex={1}>
          <TodoDashboardCard
            to="?filter=completed"
            $bgColor="#592be6"
            $selected={selectedFilter === "completed"}
          >
            <div>
              <LaptopMinimal />
            </div>
            <TodoDashboardCardContent>
              {completed} <br /> <span>Completed Tasks</span>
            </TodoDashboardCardContent>
          </TodoDashboardCard>
        </TodoDashboardCardWrapper>
        <TodoDashboardCardWrapper $flex={1}>
          <TodoDashboardCard
            to="?filter=pending"
            $bgColor="#242424"
            $selected={selectedFilter === "pending"}
          >
            <div>
              <Video />
            </div>
            <TodoDashboardCardContent>
              {pending} <br /> <span>Todo Tasks</span>
            </TodoDashboardCardContent>
          </TodoDashboardCard>
        </TodoDashboardCardWrapper>
      </TodoDashboardCardList>
    </TodoDashboardSection>
  );
};

const TodoDashboardSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TodoDashboardHeader = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`;

const TodoDashboardCardList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
`;

const TodoDashboardCardWrapper = styled.li`
  flex: ${({ $flex = 1 }) => $flex};
`;

const TodoDashboardCard = styled(Link)`
  display: flex;
  flex-direction: column;
  height: 184px;
  width: 100%;
  background-color: ${({ $bgColor = "#e6582b" }) => $bgColor};
  justify-content: space-between;
  color: white;
  padding: 1.25rem;
  border-radius: 1rem;
  cursor: pointer;
  text-decoration: ${({ $selected }) => ($selected ? "underline" : "none")};
`;

const TodoDashboardCardContent = styled.p`
  font-size: 1.2rem;
  font-weight: 600;

  span {
    font-size: 0.8rem;
    font-weight: 400;
  }
`;

export default TodoDashboard;
