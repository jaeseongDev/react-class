import React, { useEffect, useState } from 'react';

function App() {
  const [nickname, setNickname] = useState('');
  const [valid, setValid] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('닉네임 중복 체크 API 요청');
    }, 1000);

    return () => {
      console.log('Clean Up');
      clearTimeout(timer);
    };
  }, [nickname]);

  const changeNameHandler = (e) => {
    setNickname(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <input value={nickname} onChange={changeNameHandler} style={{ backgroundColor: valid ? '' : 'red' }} />
    </>
  );
}

export default App;
