import { useCallback, useState } from "react";
import './TodoInsert.scss';

import { MdAdd } from 'react-icons/md';


const TodoInsert = ({onInsert}) => {
    const [value,setvalue] = useState('');
    //인풋하는 입력값을 다루기위한 상태(state)를 useState로 정의

    const onChange = useCallback(e =>{
        setvalue(e.target.value);
        // 추가로 인풋에 넣어줄 onchange함수 재사용을 위해 useCallback 사용하기 
        }

        
    )
//onSubmit라는 함수를 만들고 이를 form의 submit로 설정했습니다.
    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setvalue('');
            e.preventDefault();
            
        },
        [onInsert,value],

//이 함수가 호출되면 props로 받아온 onInsert 함수에 현재 value 값을 파라미터로 넣어서 호출하고, 현재 value 값을 초기화합니다.

    );
    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input
            placeholder='할 일 입력'
            value={value}
            onChange={onChange}
            />
            <button type ="submit">
                <MdAdd/>
            </button>
        </form>

    );
    
};
export default TodoInsert;





