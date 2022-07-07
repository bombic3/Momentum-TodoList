import React, { useCallback, useRef, useState } from 'react';
import Momentum from './components/Momentum';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

// [제거기능]
// 지우기 기능 구현하기
//   - 배열의 불변성 지키면서 배열 원소 제거해야 할 경우 배열 내장 함수인 filter 사용
// 배열 내장 함수 filter
//  - filter 함수에는 조건을 확인해 주는 함수를 파라미터를 넣어 줘야 함
//  - 파라미터로 넣는 함수는 true 혹은 false 값 반환해야 하며, 여기서 true를 반환하는 경우만 새로운 배열에 포함됨
// todos 배열에서 id로 항목 지우기
//  - filter 함수 사용하여 onRemove 함수 작성
//  - App 컴포넌트에 id를 파라미터로 받아와 같은 id를 가진 항목을 todos 배열에서 지우는 함수
//  - 이 함수를 만들고 나서 TodoList의 props로 설정해주기

const App = () => {
  const [todos, setTodos] = useState([
    {
      // map 사용 위해 고유한 key 값 id 넣어줌
      id: 1,
      text: '해야 할 일',
      checked: false,
    },
    {
      id: 2,
      text: '끝낸 일',
      checked: true,
    },
    {
      id: 3,
      text: '오른쪽 삭제 아이콘을 눌러 삭제해보세요',
      checked: true,
    },
  ]);

  // 고유값으로 사용될 id
  // ref를 사용하여 변수 담기
  const nextId = useRef(4);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1; // nextId 1씩 더하기
    },
    [todos],
  );
  
  // onRemove 작성
  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos],
  );


  return (
    <div>
      <Momentum />
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} />
      </TodoTemplate>
    </div>
  );
};

export default App;