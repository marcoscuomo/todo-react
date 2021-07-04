import './Todos.css';

export default function Todos() {
  return(
    <>
      <div className="todo">
        <p>Lavar a louça</p>
        <div className="buttons">
          <button>x</button>
          <button>i</button>
        </div>
      </div>
      <div className="todo">
        <p>Limpar o quarto</p>
        <div className="buttons">
          <button>x</button>
          <button>i</button>
        </div>
      </div>    
      <div className="todo">
        <p>Limpar a sala</p>
        <div className="buttons">
          <button>x</button>
          <button>i</button>
        </div>
      </div>    
    </>    
  );
}