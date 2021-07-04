import Title from './components/Title';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

import './App.css';

export default function App() {

  return(
    <div className="container">
      <Title />
      <AddTodo />

      <div className="container-todos">
        <Todos />
      </div>
    </div>
  );
}