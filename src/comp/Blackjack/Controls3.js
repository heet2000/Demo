import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import './Blackjack.css'

const Controls3 = (props) => {
  
    const [amount3, setAmount3] = useState(10);
    const [inputStyle, setInputStyle] = useState('input');
  
    useEffect(() => {
      validation3();
    }, [amount3, props.balance]);
  
    const validation3 = () => {
      if (amount3 > props.balance) {
        setInputStyle('inputError');
        return false;
      }
      if (amount3 < 0.01) {
        setInputStyle('inputError');
        return false;
      }
      setInputStyle('input');
      return true;
    }
  
    const amountChange3 = (e) => {
      setAmount3(e.target.value);
    }
  
    const onBetClick3 = () => {
      if (validation3()) {
        props.betEvent(Math.round(amount3 * 100) / 100);
      }
    }
  
    const getControls3 = () => {  
      if (props.gameState === 0) {
        return (
          <>
            <div className='controlsContainer'>
              <div className='betContainer'>
                <h1 className='heading'>Amount:</h1>
                <input type='text' value={amount3} onChange={amountChange3} className='inputStyle' />
                <br></br>
                <Button onClick={() => onBetClick3()} variant="outlined">Bet</Button>
              </div>
            </div>
          </>
        );
      }
    }
  
    return (
      <>
        {getControls3()}
      </>
    );
  }

export default Controls3;
