import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Title from './components/Title';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import TodoDetail from './components/TodoDetail';

import { api } from './services/api';
import './App.css';


export default function App() {
  
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    
    const fetchData = async () => {
      const { data } = await api.get('/');
      setTodos(data);
    }

    fetchData();
    
    
  }, []);

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
    
    const newTodos = todos.map(todo => {
      if(todo.id === idTodo){
        return {
          ...todo,
          isCompleted: !todo.isCompleted
        }        
      }
      return todo;
    });
    
    setTodos(newTodos);
  }

  const handleDeleteTodo = (idTodo) => {
    
    const newTodos = todos.filter(todo => todo.id !== idTodo);    
    setTodos(newTodos);
  }

  return(
    <Router>
      <div className="container">
        <Title />
        <Route path="/" exact render={() => (
          <>
            <AddTodo 
              handleAddTodo={handleAddTodo}        
            />

            <div className="container-todos">
              <Todos 
                todos={todos} 
                handleChangeIsCompleted={handleChangeIsCompleted} 
                handleDeleteTodo={handleDeleteTodo}
              />
            </div>
          </>
        )} />
        <Route path="/:todoTitle" exact component={TodoDetail} />
      </div>
    </Router>
  );
}