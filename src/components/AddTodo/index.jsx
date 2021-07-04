import Button from '../Button';

import './AddTodo.css';

export default function AddTodo(){
  return(
    <div className="container-add-todo">
      <input type="text"/>        
      <Button>Adicionar</Button>
    </div>
  );
}