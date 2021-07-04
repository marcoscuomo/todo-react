import { useHistory, useParams } from 'react-router-dom';
import Button from '../Button';

import './TodoDetail.css';

export default function TodoDetail() {
  
  const params = useParams();
  const history = useHistory();

  const handleBackPage = () => {
    history.goBack();
  }
  
  return(
    <div className="container-detail">
      <div className="button">
        <Button className="btn-voltar" onClick={handleBackPage}>Voltar</Button>
      </div>

      <div className="datail">
        <h2>{params.todoTitle}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, vel. Esse optio recusandae nihil.</p>
      </div>
    </div>
  );
}