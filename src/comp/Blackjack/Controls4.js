import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import './Blackjack.css'

const Controls4 = (props) => {
  
  const [amount4, setAmount4] = useState(10);
  const [inputStyle, setInputStyle] = useState('input');

  useEffect(() => {
    validation4();
  }, [amount4, props.balance]);

  const validation4 = () => {
    if (amount4 > props.balance) {
      setInputStyle('inputError');
      return false;
    }
    if (amount4 < 0.01) {
      setInputStyle('inputError');
      return false;
    }
    setInputStyle('input');
    return true;
  }

  const amountChange4 = (e) => {
    setAmount4(e.target.value);
  }

  const onBetClick4 = () => {
    if (validation4()) {
      props.betEvent(Math.round(amount4 * 100) / 100);
    }
  }

  const getControls4 = () => {  
    if (props.gameState === 0) {
      return (
        <>
          <div className='controlsContainer'>
            <div className='betContainer'>
              <h1 className='heading'>Amount:</h1>
              <input type='text' value={amount4} onChange={amountChange4} className='inputStyle' />
            <br></br><Button onClick={() => onBetClick4()} type='contained' color='primary' className='button'>Bet</Button>
            </div>
          </div>
        </>
      );
    }
  }

  return (
    <>
      {getControls4()}
    </>
  );
}

export default Controls4;
