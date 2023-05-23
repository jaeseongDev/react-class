import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [isShowing, setIsShowing] = useState(false);
  const clickButtonHandler = () => {
    setIsShowing((prevState) => !prevState);
  };
  return (
    <div className='form__container'>
      <button onClick={clickButtonHandler} className='form__enter-button'>{isShowing ? '입력 취소하기' : '입력하기'}</button>
      {
        isShowing && (
          <form className='form'>
            <input placeholder='이름을 입력해주세요.' />
            <input placeholder='나이를 입력해주세요.' />
          </form>
        )
      }
    </div>
  );
};

export default Form;
