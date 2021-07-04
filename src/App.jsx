import { useState } from 'react';

import Title from './components/Title';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

import './App.css';

export default function App() {

  const [todos, setTodos] = useState([
    {
      id: '1',
      title: 'Lavar carro',
      createdAt: new Date(),
      isCompleted: false
    },
    {
      id: '2',
      title: 'Lavar louça do jantar',
      createdAt: new Date(),
      isCompleted: true
    }
  ]);

  return(
    <div className="container">
      <Title />
      <AddTodo />

      <div className="container-todos">
        <Todos todos={todos} />
      </div>
    </div>
  );
}