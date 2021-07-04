import { useState } from 'react';

import Button from '../Button';
import './AddTodo.css';

export default function AddTodo({ handleAddTodo }){
  
  const [inputData, setInputData] = useState('');

  const handlenInputAddTodo = (e) => {
    setInputData(e.target.value);    
  }

  const handleAddTodoData = () => {
    handleAddTodo(inputData);
    setInputData('');
  }
  
  return(
    <div className="container-add-todo">
      <input type="text" onChange={handlenInputAddTodo} value={inputData}/>        
      <Button onClick={handleAddTodoData}>Adicionar</Button>
    </div>
  );
}