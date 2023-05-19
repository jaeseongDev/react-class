import TodoListHeader from './TodoListHeader';
import TodoListInput from './TodoListInput';
import TodoListItems from './TodoListItems';
import './TodoList.css';
import { useState } from 'react';

const TodoList = () => {
  const [currentId, setCurrentId] = useState(0);
  const [items, setItems] = useState([]);

  const enterTodoItemContentHandler = (content) => {
    setCurrentId((id) => id + 1);
    setItems((prevItems) => {
      return [
        ...prevItems,
        {
          id: currentId,
          content
        }
      ];
    });
  };

  const deleteTodoItemHandler = (itemId) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== itemId)
    })
  };

  return (
    <div className='todo-list__container'>
      <TodoListHeader />
      <TodoListInput onEnterTodoItemContent={enterTodoItemContentHandler} />
      <TodoListItems
        items={items}
        onDeleteTodoItem={deleteTodoItemHandler}
      />
    </div>
  );
};

export default TodoList;
