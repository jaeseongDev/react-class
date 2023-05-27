import React, { useContext } from 'react';
import AuthContext from '../store/authContext';

const Login = () => {
  const ctx = useContext(AuthContext);
  return (
    <div>
      아이디 : <input /><br />
      비밀번호 : <input /><br />
      <button onClick={ctx.onLogin}>로그인</button>
    </div>
  );
};

export default Login;
