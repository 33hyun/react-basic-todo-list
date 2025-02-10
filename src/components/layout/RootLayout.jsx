import styled from "styled-components";
import PropTypes from 'prop-types';

const RootLayout = ({ children }) => {
  return (
    <MainContainer>
      <MainContent>{children}</MainContent>
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