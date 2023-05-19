import './TodoListItem.css';

const TodoListItem = ({ item, onDeleteTodoItem }) => {
  const clickButtonHandler = () => {
    onDeleteTodoItem(item.id);
  };

  return (
    <div className='todo-list__item'>
      {item.content}
      <button onClick={clickButtonHandler}>삭제</button>
    </div>
  );
};

export default TodoListItem;
