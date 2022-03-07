import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import './Blackjack.css'

const Controls1 = (props) => {
  
  const [amount1, setAmount1] = useState(10);
  const [inputStyle, setInputStyle] = useState('input');

  useEffect(() => {
    validation1();
  }, [amount1, props.balance]);

  const validation1 = () => {
    if (amount1 > props.balance) {
      setInputStyle('inputError');
      return false;
    }
    if (amount1 < 0.01) {
      setInputStyle('inputError');
      return false;
    }
    setInputStyle('input');
    return true;
  }

  const amountChange1 = (e) => {
    setAmount1(e.target.value);
  }

  const onBetClick1 = () => {
    if (validation1()) {
      props.betEvent(Math.round(amount1 * 100) / 100,props.id);
    }
  }

  const getControls1 = () => {  
    if (props.gameState === 0) {
      return (
        <>
          <div className='controlsContainer'>
            <div className='betContainer'>
              <h1 className='heading'>Amount:</h1>
              <input type='text' value={amount1} onChange={amountChange1} className='inputStyle' />
            <br></br><Button onClick={() => onBetClick1()} type='contained' color='primary' className='button'>Bet</Button>
            </div>
          </div>
        </>
      );
    }
  }

  return (
    <>
      {getControls1()}
    </>
  );
}

export default Controls1;
