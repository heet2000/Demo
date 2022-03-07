import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import './Blackjack.css'

const Status3 = (props) => {

    return (
      <>
      <Grid className='statusContainer'>
        <Grid className='status'>
          <Typography variant="h5" noWrap className='value'>
            {props.message}
          </Typography>
        </Grid>
        <Grid className='balance'>
          <Typography variant="h5" noWrap className='value'>
              {props.balance}
            </Typography>      
          </Grid>
        </Grid>
      </>
    );
}

export default Status3