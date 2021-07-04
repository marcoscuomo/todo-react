import { useHistory } from 'react-router-dom';
import { CgClose, CgInfo } from 'react-icons/cg';

import './Todos.css';

export default function Todos({ todos, handleChangeIsCompleted, handleDeleteTodo }) {
  
  const history = useHistory();
  
  const handleIsChecked = (idTodo) => {
    handleChangeIsCompleted(idTodo);
  }


  const handleGoToDetails = (title) => {
    history.push(`/${title}`);
  }

  return(
    <>
      {todos.map(todo => (
        <div className="todo" key={todo.id} style={todo.isCompleted ? {borderLeft: '6px solid chocolate'}: {}}>
          <p 
            style={todo.isCompleted ? {textDecoration: 'line-through'}: {}}
            onClick={() => {handleIsChecked(todo.id)}}
          >
            {todo.title}
          </p>
          <div className="buttons">
            <button onClick={() => {handleDeleteTodo(todo.id)}}><CgClose/></button>
            <button><CgInfo onClick={() => {handleGoToDetails(todo.title)}} /></button>
          </div>
        </div>
      ))}          
    </>    
  );
}