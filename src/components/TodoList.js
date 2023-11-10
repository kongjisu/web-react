import TodoListItem from './TodoListItem';
import './TodoList.scss';


const TodoList = ({todos, onRemove, onToggle}) => //todos 배열을  props로 받아온후,
{
    return (
        <div className="TodoList">
            {todos.map(todo => (
                <TodoListItem todo={todo} key={todo.id} 
                onRemove={onRemove}
                onToggle={onToggle}
                />
                    //이를 배열내장함수 map을 활용해서 여러개의 TodoListItem 컴포넌트로 변환해 보여준다. 
            ))}
            
        </div>
    );

};
export default TodoList;



//TodoList에서  값을 받아온 후 TodoItem으로 변환해 렌더링하도록 설정해야한다.