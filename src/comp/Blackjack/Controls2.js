import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import './Blackjack.css'

const Controls2 = (props) => {
    console.log(props)
    const [amount2, setAmount2] = useState(10);
    const [inputStyle, setInputStyle] = useState('input');
  
    useEffect(() => {
      validation2();
    }, [amount2, props.balance]);
  
    useEffect(() => {
      if(props.gameState !== 0){
        getControls2();
      }
    },[props]);
  
    const validation2 = () => {
      if (amount2 > props.balance) {
        setInputStyle('inputError');
        return false;
      }
      if (amount2 < 0.01) {
        setInputStyle('inputError');
        return false;
      }
      setInputStyle('input');
      return true;
    }
  
    const amountChange2 = (e) => {
      setAmount2(e.target.value);
    }
  
    const onBetClick2 = () => {
      if (validation2()) {
        props.betEvent(Math.round(amount2 * 100) / 100);
      }
    }
  
    const getControls2 = () => { 
      console.log("game") 
      if (props.gameState === 0) {
        console.log("gameState",props)
        return (
          <>
            <div className='controlsContainer'>
              <div className='betContainer'>
                <h1 className='heading'>Amount:</h1>
                <input type='text' value={amount2} onChange={amountChange2} className='inputStyle' />
                <br></br><Button onClick={() => onBetClick2()} type='contained' color='primary' className='button'>Bet</Button>
              </div>
            </div>
          </>
        );
      }
      else {
        console.log("gameState",props)
        return (
          <>
            <div className='controlsContainer'>
              <button onClick={() => props.hitEvent()} disabled={props.buttonState.hitDisabled} className='w-12 bg-blue-500 h-6 ml-2'>Hit</button>
              <button onClick={() => props.standEvent()} disabled={props.buttonState.standDisabled} className='w-12 bg-blue-500 ml-2 h-6'>Stand</button>
              <button onClick={() => props.resetEvent()} disabled={props.buttonState.resetDisabled} className='w-12 bg-blue-500 ml-2 h-6'>Reset</button>
            </div>
          </>
        );
      }
    }
  
    return (
      <>
        {getControls2()}
      </>
    );
  }
  
  export default Controls2;