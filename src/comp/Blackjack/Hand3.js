import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import Card from './Card.js';

const Hand3 = (props) => {

  const getTitle = () => {
    if (props.cards.length > 0) {
      return (
        <Typography variant="h5" noWrap className='title'>
          {props.title}
        </Typography>
      );
    }
  }
  return (
    <>
      <Grid className='handContainer'>
        {getTitle()}
        <Grid className='cardContainer'>
          {props.cards.map((card, index) => {
            return (
                <Card key={index} value={card.value} suit={card.suit} hidden={card.hidden} />
              );
            })}
        </Grid>
      </Grid>
    </>
  );
}

export default Hand3;