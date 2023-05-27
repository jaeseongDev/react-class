import React, { useContext } from 'react';
import styled from 'styled-components';
import AuthContext from '../store/authContext';

const StyledHeader = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: yellowgreen;

  button {
    height: 20px;
    margin-right: 10px;
  }
`;

const Header = () => {
  const ctx = useContext(AuthContext);
  return (
    <StyledHeader>
      <h2>Header</h2>
      {ctx.isLoggedIn && <button onClick={ctx.onLogout}>Logout</button>}
    </StyledHeader>
  );
};

export default Header;
