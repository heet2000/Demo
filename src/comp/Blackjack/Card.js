import { Grid } from '@material-ui/core';
import React from 'react';
import './Blackjack.css'

const Card = (props) => {

  const getColor = () => {
    if (props.suit === '♠' || props.suit === '♣') {
      return 'black';
    }
    else {
      return 'red';
    }
  }

  const getCard = () => {
    if (props.hidden) {
      return (
        <div className='hiddenCard'>hidden</div>
      );
    }
    else {
      return (
        <Grid className='card'>
        <Grid className={getColor()}>
          <h1 className='valueis'>{props.value}</h1>
        </Grid>
          <Grid className={getColor()}>
            <h1 className='suit'>{props.suit}</h1>
          </Grid>
          <Grid className={getColor()}>
            <h1 className='valuerev'>{props.value}</h1>
          </Grid>
        </Grid>
      );
    }
  }

  return (
    <>
      {getCard()}
    </>
  );
}

export default Card;