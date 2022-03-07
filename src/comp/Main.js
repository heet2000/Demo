import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import '../App.css'

const Main = ({handleChangeGame}) => {
    return (
        <>
          <Grid container >
              <div className='cards'>
                <Card className='form1' xs={12} sm={6} md={6} lg={3} >
                  <CardActionArea>
                    <img className='w-full rounded-md' src='https://www.hdnicewallpapers.com/Walls/Thumb/Games/F1_Race_Game_2020_Wallpaper.jpg' alt='Black Jack logo' />
                    <CardContent>
                      <h2 className='text-2xl mb-2 font-medium'>
                        Black Jack
                      </h2>
                      <p className='mb-2'>
                        Blackjack, or twenty-one, Card game whose object is to be dealt cards having a higher count than those of the dealer, up to but not exceeding 21.Aces count as 1 or 11, and face cards as 10.,
                      </p>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <button onClick={() => handleChangeGame('type')} className='bg-blue-600 w-full h-9 rounded-md'>
                      Play
                    </button>
                  </CardActions>
                </Card>
                <Card className='form1'>
                  <CardActionArea>
                    <img className='w-full rounded-md' src='https://www.hdnicewallpapers.com/Walls/Thumb/Games/F1_Race_Game_2020_Wallpaper.jpg' alt='Black Jack logo' />
                    <CardContent>
                      <h2 className='text-2xl mb-2 font-medium'>
                        Sudoku
                      </h2>
                      <p className=' mb-2'>
                        A puzzle in which missing numbers are to be filled into a 9 by 9 grid of squares which are subdivided into 3 by 3 boxes so that every row, every column, and every box contains the numbers 1 through 9.                      </p>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <button onClick={() => handleChangeGame('sudoku')} className='bg-blue-600 w-full h-9 rounded-md'>
                      Play
                    </button>
                  </CardActions>
                </Card>
              </div>
          </Grid>
        </>
    );
}

export default Main;


