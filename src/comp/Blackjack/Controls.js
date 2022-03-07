import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import './Blackjack.css'

const Controls = (props) => {
    console.log(props)
    const [amount, setAmount] = useState(10);
    const [inputStyle, setInputStyle] = useState('input');
  
    useEffect(() => {
      validation();
    }, [amount, props.balance]);
  
  
  
    const validation = () => {
      if (amount > props.balance) {
        setInputStyle('inputError');
        return false;
      }
      if (amount < 0.01) {
        setInputStyle('inputError');
        return false;
      }
      setInputStyle('input');
      return true;
    }
  
    const amountChange = (e) => {
      setAmount(e.target.value);
    }
  
    const onBetClick = () => {
      if (validation()) {
        // props.betEvent(Math.round(amount * 100) / 100);
      }
    }
  
    const getControls = () => { 
        return (
          <>
          {props.gameState ===0?
           <div className='controlsContainer'>
           <div className='betContainer'>
             <h1 className='heading'>Amount:</h1>
             <input type='text' value={amount} onChange={amountChange} className='inputStyle' />
             <br></br><Button onClick={() => onBetClick()} type='contained' color='primary' className='button'>Bet</Button>
           </div>
         </div>: <div className='controlsContainer'>
              {/* <button onClick={() => props.hitEvent()} disabled={props.buttonState.hitDisabled} className='w-12 bg-blue-500 h-6 ml-2'>Hit</button>
              <button onClick={() => props.standEvent()} disabled={props.buttonState.standDisabled} className='w-12 bg-blue-500 ml-2 h-6'>Stand</button>
              <button onClick={() => props.resetEvent()} disabled={props.buttonState.resetDisabled} className='w-12 bg-blue-500 ml-2 h-6'>Reset</button> */}
            </div>
          }
           
          </>
        );
      }
    
    }
  
  
  export default Controls;
