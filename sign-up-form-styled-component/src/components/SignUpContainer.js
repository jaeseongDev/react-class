import React from 'react';
import styled from 'styled-components';

const StyledSignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  align-items: center;
`;

const SignUpContainer = ({ children }) => {
  return (
    <StyledSignUpContainer>
      {children}
    </StyledSignUpContainer>
  );
};

export default SignUpContainer;
