import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import '../../App.css'

const useStyles = makeStyles((theme) => ({
    toolbar: {
      paddingRight: 24,
    },
    title: {
      flexGrow: 1,
    },
  }));

const Room = ({handleChangeGame}) => {
    const classes = useStyles();

  return (
    <>
        <AppBar position="absolute">
            <Toolbar className={classes.toolbar}>
                <Typography component="h1" variant="h4" color="inherit" className={classes.title}>
                    Blackjack Table 1111
                </Typography>
            </Toolbar>
        </AppBar>
        <div className='cards'>
            <div className='form5'>
                <div className='type mb-2'>
                    <div>
                        <div className='w-20 h-20 ml-10 mr-36 rounded-full  bg-yellow-300'>
                        </div>
                        <h5 className='text-yellow-300 ml-16 mr-40'>
                            User1
                        </h5>
                    </div>                   
                    <div>
                        <div className='w-20 h-20 ml-10 mr-36 rounded-full  bg-yellow-300'>
                        </div>
                        <h5 className='text-yellow-300 ml-16 mr-40'>
                            User2
                        </h5>
                    </div> 
                    <div>
                        <div className='w-20 h-20 ml-10 mr-36 rounded-full  bg-yellow-300'>
                        </div>
                        <h5 className='text-yellow-300 ml-16 mr-40'>
                            User3
                        </h5>
                    </div> 
                    <div>
                        <div className='w-20 h-20 mr-10 rounded-full  bg-yellow-300'>
                        </div>
                        <h5 className='text-yellow-300 ml-6 mb-2'>
                            User4
                        </h5>
                        <h5 className='text-yellow-300 text-xs ml-6'>
                            MAX 4
                        </h5>
                    </div> 
                </div>
                <div className='type'>
                    <button onClick={() => handleChangeGame('blackjack')} className='bg-yellow-300 w-1/2 h-10 text-lg rounded-md mr-2 mt-6'>
                        Start
                    </button>
                    <button onClick={() => handleChangeGame('')}  className='bg-yellow-300 w-1/2 h-10 text-lg rounded-md mt-6'>
                        Leave 
                    </button>
                </div>   
            </div>
        </div>
    </>
  )
}

export default Room;