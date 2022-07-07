import { useCallback, useState } from 'react';
import { MdOutlineAddCircleOutline } from 'react-icons/md';
import './TodoInsert.scss'

// App 에서 TodoInsert에 넣어 준 onInsert 함수에
// 현재 useState를 통해 관리하고 있는 value 값을
// 파라미터로 넣어서 호출
const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback(e => {
    // console.log("OK");
    setValue(e.target.value);
  }, []);

  // onSubmit을 useCallback사용하여 생성
  const onSubmit = useCallback(
    e => {
      onInsert(value);
      setValue(''); // value 값 초기화

      // submit 이벤트는 브라우저에서 새로고침을 발생시킴
      // 이를 방지하기 위해 이 함수 호출함
      e.preventDefault();
    },
    [onInsert, value],
  );
  
  return (
    <div>
      <form className='TodoInsert' onSubmit={onSubmit}>
        <input
          placeholder='할 일을 입력하세요'
          value={value}
          onChange={onChange}
        />
        <button type='submit'>
          <MdOutlineAddCircleOutline />
        </button>
      </form>
    </div>
  );
};

export default TodoInsert;