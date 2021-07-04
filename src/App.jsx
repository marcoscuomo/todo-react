import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

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

  const handleAddTodo = (todo) => {
    const newTodos = [...todos, {
      id: uuidv4(),
      title: todo,
      createdAt: new Date(),
      isCompleted: false
    }];

    setTodos(newTodos);
  }

  const handleChangeIsCompleted = (idTodo) => {
    console.log(idTodo);
    const newTodos = todos.map(todo => {
      if(todo.id === idTodo){
        return {
          ...todo,
          isCompleted: !todo.isCompleted
        }        
      }
      return todo;
    });
    console.log(newTodos);
    setTodos(newTodos);
  }

  return(
    <div className="container">
      <Title />
      <AddTodo 
        handleAddTodo={handleAddTodo}        
      />

      <div className="container-todos">
        <Todos 
          todos={todos} 
          handleChangeIsCompleted={handleChangeIsCompleted} 
        />
      </div>
    </div>
  );
}