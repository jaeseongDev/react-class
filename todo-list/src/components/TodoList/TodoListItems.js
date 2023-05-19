import TodoListItem from './TodoListItem';

const TodoListItems = ({ items, onDeleteTodoItem }) => {
  return (
    <>
      {items.map(item => <TodoListItem item={item} key={item.id} onDeleteTodoItem={onDeleteTodoItem} />)}
    </>
  );
};

export default TodoListItems;
