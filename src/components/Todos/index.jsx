import './Todos.css';

export default function Todos({ todos }) {
  return(
    <>
      {todos.map(todo => (
        <div className="todo" key={todo.id} style={todo.isCompleted ? {borderLeft: '6px solid chocolate'}: {}}>
          <p style={todo.isCompleted ? {textDecoration: 'line-through'}: {}}>{todo.title}</p>
          <div className="buttons">
            <button>x</button>
            <button>i</button>
          </div>
        </div>
      ))}          
    </>    
  );
}