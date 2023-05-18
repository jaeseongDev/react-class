import './TodoListInput.css';

const TodoListInput = () => {
  return (
    <div className='todo-list__input'>
      <input placeholder='할 일을 입력하세요' />
      <button>추가</button>
    </div>
  );
};

export default TodoListInput;
