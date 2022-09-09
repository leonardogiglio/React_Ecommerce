import React from 'react';
import { Add, Remove } from '@mui/icons-material';
import {useState} from 'react';
import './ItemCount.css'

const ItemCount = ({initial, stock, onAdd}) => {
    const [numClics, setNumClics] = useState(initial);

    const CounterUp = () => {
      if (numClics <= stock) {
      setNumClics(numClics +1); 
      }
    }
    const CounterDown = () => {
      if (numClics !== 0) {
      setNumClics(numClics -1);
      }
    }

  return (
    <div className="ButtonContainer">
        <div className="AmountContainer">
                <Remove onClick={CounterDown}/>
                <span className="Amount">{numClics}</span>
                <Add onClick={CounterUp}/>
        </div>
        <button className="Button" disabled={stock <= 0} onClick={() => onAdd(numClics)} >Comprar</button>
    </div>
  );
}

export default ItemCount;