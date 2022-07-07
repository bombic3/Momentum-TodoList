import React from 'react';
import Momentum from './components/Momentum';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

const App = () => {
  return (
    <div>
      <Momentum />
      <TodoTemplate>
        <TodoInsert />
        <TodoList />
      </TodoTemplate>
    </div>
  );
};

export default App;