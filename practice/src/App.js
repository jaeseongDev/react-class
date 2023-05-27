import React, { useRef } from 'react';

const style = {
  border: '1px solid black',
  height: '300px',
  width: '300px',
  overflow: 'auto',
  position: 'relative'
};

const innerStyle = {
  width: '100%',
  height: '650px',
  background: 'linear-gradient(white, black)'
};

function App() {
  const ref = useRef();

  const scrollToBottom = () => {
    ref.current.scrollTop =
      ref.current.scrollHeight - ref.current.clientHeight;
  };

  return (
    <>
      <div style={style} ref={ref}>
        <div style={innerStyle}></div>
      </div>
      <button onClick={scrollToBottom}>맨 밑으로</button>
    </>
  );
}

export default App;
