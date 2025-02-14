import styled from "styled-components";
import PropTypes from 'prop-types';
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <MainContainer>
      <MainContent>
        <Outlet />
      </MainContent>
    </MainContainer>
  );
};

const MainContainer = styled.main`
  min-height: 100vh;
  background-color: #f6f5f8;
`;

const MainContent = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 1rem;
`;
RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RootLayout;