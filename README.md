# React로 Todolist 구현 


## UI 구성하기 
### TodoTemplate
  화면을 가운데에 정렬시켜 주며, 앱 타이틀(일정 관리)을 보여줍니다. children으로 내부 JSX를 props로 받아 렌더링해줍니다.

### TodoInsert
  새로운 항목을 입력하고 추가할 수 있는 컴포넌트이다. state를 통해 인풋의 상태를 관리한다.

### TodoListItem 
  각 할 일 항목에 대한 정보를 보여주는 컴포넌트입니다. todo 객체를 props로 받아와서 상태에 따라 다른 스타일의 UI를 보여줍니다.

### TodoList 
  todos 배열을 props로 받아 온 후, 이를 배열 내장 함수 map을 사용해 여러개의 TodoListItem컴포넌트로 변환 하여 보여줍니다.


### 구현 이유 : react의 컴포넌트, props, 이벤트 핸들링을 하기 위해서 구현한 TODOLIST 입니다.
