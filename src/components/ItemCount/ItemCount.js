import React from 'react';
import { Add, Remove } from '@mui/icons-material';
import {useState} from 'react';
import './ItemCount.css'

const ItemCount = ({stock}) => {
    const [numClics, setNumClics] = useState(0);

    const CounterUp = () => {
      if (numClics < stock) {
      setNumClics(numClics + 1);
    }
}
    const CounterDown = () => {
      if (numClics !== 0) {
      setNumClics(numClics - 1);
      }
    }
  return (


        <div className="AmountContainer">
                <Remove onClick={CounterDown}/>
                <span className="Amount">{numClics}</span>
                <Add onClick={CounterUp}/>
        </div>
  )
}

export default ItemCount;