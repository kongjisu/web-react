import { useState, useRef, useCallback } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const App = ( ) =>{
  // todos 라는 상태를 배열로 선언 안에 id,text 넣기 
    const [todos,setTodos]= useState([
        {
            id: 1,
            text: '리액트 기초 알아보기',
            checked: true,

        },
        {
            id: 2,
            text:'맛난 것 먹기',
            checked: true,

        },
        {
          id:3,
          text:'노래하기',
          checked: false
        },
    ]);


    const nextId = useRef(4);
    //todos 배열에서 새 객체를 추가하는 onInsert 함수 만들기 
    const onInsert = useCallback(
      //컴포넌트 성능을 아끼기 위해서 usecallback으로 감싸준다.
      
        text => {
          const todo = {
            id: nextId.current,
            text,
            checked: false,

          };

          setTodos(todos.concat(todo));
          nextId.current += 1;

        },
        [todos]

    );
         
        const onRemove= useCallback(
          id => {
            setTodos(todos.filter(todo => todo.id !== id));

          },
          [todos]

        );

        const onToggle = useCallback(
          id => {
            setTodos(
              todos.map (todo =>
                  todo.id ===id ? { ...todo, checked:!todo.checked}: todo,
                
                ),

            );

          },
          [todos],

        );


    return (
      <TodoTemplate>
        <TodoInsert onInsert ={onInsert}/>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
        {/* todolist 컴포넌트에 props로 넣어준다. */}

      </TodoTemplate>

    );
};
export default App;
