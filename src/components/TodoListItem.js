import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,

} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

const TodoListItem = ({todo, onRemove,onToggle}) => {
const {id, text, checked} = todo;
    
return(

    <div className="TodoListItem">
        <div className={cn('checkbox',{checked})}onClick={() => onToggle(id)}>
            {checked ? <MdCheckBox />: <MdCheckBoxOutlineBlank/>}
            <div className='text'>{text}</div>
         
    </div>
    <div className='remove' onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
    </div>
    </div>
);
};
export default TodoListItem;

//각 할일 목록에 대한 정보를 보여주는 컴포넌트이다.
//todo객체를 props로 받아와서 다른 스타일의 ui를 보여준다.