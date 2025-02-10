import { FileCheck, LaptopMinimal, Video } from "lucide-react";
import styled from "styled-components";
import PropTypes from 'prop-types';

const TodoDashboard = ({ all = 0, completed = 0, pending = 0 }) => {
  return (
    <TodoDashboardSection>
      <TodoDashboardHeader>Quick Access</TodoDashboardHeader>

      <TodoDashboardCardList>
        <TodoDashboardCardWrapper $flex={2}>
          <TodoDashboardCard>
            <div>
              <FileCheck />
            </div>
            <TodoDashboardCardContent>
              {all} <br /> <span>All Tasks</span>
            </TodoDashboardCardContent>
          </TodoDashboardCard>
        </TodoDashboardCardWrapper>
        <TodoDashboardCardWrapper $flex={1}>
          <TodoDashboardCard $bgColor="#592be6">
            <div>
              <LaptopMinimal />
            </div>
            <TodoDashboardCardContent>
              {completed} <br /> <span>Completed Tasks</span>
            </TodoDashboardCardContent>
          </TodoDashboardCard>
        </TodoDashboardCardWrapper>
        <TodoDashboardCardWrapper $flex={1}>
          <TodoDashboardCard $bgColor="#242424">
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

const TodoDashboardCard = styled.button`
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
`;

const TodoDashboardCardContent = styled.p`
  font-size: 1.2rem;
  font-weight: 600;

  span {
    font-size: 0.8rem;
    font-weight: 400;
  }
`;
TodoDashboard.propTypes = {
  all: PropTypes.number,
  completed: PropTypes.number,
  pending: PropTypes.number,
};

export default TodoDashboard;