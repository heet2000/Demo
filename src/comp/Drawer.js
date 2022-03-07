import { Link } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import '../App.css'

const array = [
  {
    item:'Account',
    id:1
  },
  {
    item:'Payment', 
    id:2
  },
  {
    item:'Redeem',
    id:3
  },
  {
    item:'Account',
    id:4
  },
  {
    item:'Payment', 
    id:5
  },
  {
    item:'Redeem',
    id:6
  },
  {
    item:'Account',
    id:7
  },
  {
    item:'Payment', 
    id:8
  },
  {
    item:'Redeem',
    id:9
  },{
    item:'Account',
    id:10
  },
  {
    item:'Payment', 
    id:11
  },
  {
    item:'Redeem',
    id:12
  }
];

const Drawer = () => {
  return (
    <>
        <Grid item xs={false} sm={false} md={1.5} >
          <div className='drawer'>
              {array.map((text) => (
                  <div key={text.id} className='array'>
                      <Link item className='items'>{text.item}</Link>
                  </div>
              ))}
          </div>
        </Grid>
    </>
  )
}

export default Drawer