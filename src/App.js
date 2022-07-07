import React, { useCallback, useRef, useState } from 'react';
import Momentum from './components/Momentum';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

// [수정기능]
// 수정 기능
// - App 컴포넌트에 onToggle 함수 생성
// - 해당 함수 TodoList 컴포넌트에 props로 넣어주기
// - TodoList를 통해 TodoListItem까지 전달

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

  // onToggle 작성
  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );

  return (
    <div>
      <Momentum />
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
    </div>
  );
};

export default App;