import './TodoListInput.css';
import { useState } from 'react';

const TodoListInput = ({ onEnterTodoItemContent }) => {
  const [input, setInput] = useState('');

  const inputChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const buttonClickHandler = () => {
    onEnterTodoItemContent(input);
    resetInput();
  };

  const buttonEnterHandler = (e) => {
    if (e.key === 'Enter') {
      buttonClickHandler();
    }
  };

  const resetInput = () => {
    setInput('');
  };

  return (
    <div className='todo-list__input'>
      <input placeholder='할 일을 입력하세요' value={input} onChange={inputChangeHandler} onKeyPress={buttonEnterHandler} />
      <button
        onClick={buttonClickHandler}
      >추가
      </button>
    </div>
  );
};

export default TodoListInput;
