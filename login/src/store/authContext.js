import React, { useEffect, useState } from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {
  },
  onLogin: (email, password) => {
  }
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const storedLoggedIn = localStorage.getItem('isLoggedIn');

  useEffect(() => {
    if (storedLoggedIn === 'true') {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);


  const loginHandler = (email, password) => {
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.setItem('isLoggedIn', 'false');
    setIsLoggedIn(false);
  };


  return (
    <AuthContext.Provider value={{
      isLoggedIn,
      onLogout: logoutHandler,
      onLogin: loginHandler
    }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
