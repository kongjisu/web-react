import './TodoTemplate.scss';

const TodoTemplate =({children}) =>{
    return (
        <div className="TodoTemplate">
            <div className ="app-title">일정관리</div>
            <div className="content">{children}</div> 
        </div>
    );
};
export default TodoTemplate;
// 화면을 가운데 정렬,(일정관리)제목을 보여줌
//children으로 내부 JSX를 props로 받아와서 렌더링 해준다.