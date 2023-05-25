import React, { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  // deps가 빈 배열 & return이 아닌 부분에 로직 작성 : 컴포넌트 처음 생성될 때 딱 한 번만 실행! (마운트)
  // (Use Case) 처음 데이터를 불러올 때
  // deps가 빈 배열 & return 값에 로직 작성 : 컴포넌트 사라질 때 딱 한 번만 실행! (언마운트)
  useEffect(() => {
    console.log('컴포넌트 생성 된 직후');
    return () => {
      console.log('컴포넌트 삭제');
    };
  }, []);

  // deps에 특정 값 넣기 & return이 아닌 부분에 로직 작성 : 컴포넌트가 처음 생성될 때와 deps에 넣은 값이 바뀔 때 실행!
  // deps가 빈 배열 & return 값에 로직 작성 : 컴포넌트가 사라질 때와 deps에 넣은 값이 바뀌기 직전에 호출!
  useEffect(() => {
    console.log('컴포넌트 생성 & deps의 값 변경 직후 호출');
    return () => {
      console.log('컴포넌트 삭제 & deps의 값 바뀌기 직전 호출');
    };
  }, [count]);


  // deps에 아무 값 안 넣을 때 : 컴포넌트 리렌더링 될 때마다
  // (이건 거의 안 씀!)
  useEffect(() => {
    console.log('컴포넌트 리렌더링 될 때마다');
  });

  return (
    <div>
      <div>
        {count}
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
}

export default App;
