import TodoListHeader from "./TodoListHeader";
import TodoListInput from "./TodoListInput";
import TodoListItems from "./TodoListItems";
import './TodoList.css'

const TodoList = () => {
  return (
    <div className="todo-list__container">
      <TodoListHeader />
      <TodoListInput />
      <TodoListItems />
    </div>
  )
}

export default TodoList;
