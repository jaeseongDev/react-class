import React from 'react';
import styled from 'styled-components';

const StyledLayout = styled.div`
  background-color: lightgray;
  height: 100vh;
  width: 100%;
  padding: 0 10%;
  position: fixed;
  top: 0;
  left: 0;
  overflow: scroll;
`

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      {children}
    </StyledLayout>
  );
};

export default Layout;
