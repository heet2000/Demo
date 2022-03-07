import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useNavigate } from 'react-router-dom';
import Main from'./Main';
import Sudoku from './Sudoku/Sudoku';
import Type from './Blackjack/Type';
import Room from './Blackjack/Room';
import Blackjack from './Blackjack/Blackjack.tsx';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    paddingRight: 24,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Home() {
  const classes = useStyles();
  const nevigate = useNavigate();
  const [game,setGame] = useState('');

  const handleChangeGame = (val) => {
    setGame(val)
  }

  return (
    <>
      <AppBar position="absolute">
        <Toolbar className={classes.toolbar}>
          <Typography component="h1" variant="h4" color="inherit" className={classes.title}>
            Kapture Game
          </Typography>
          <button onClick={() => nevigate('/')} className='bg-blue-400 w-20 h-10 rounded-md'>
            Log out
          </button>
        </Toolbar>
      </AppBar>
      {game !== '' ? <> {game === 'type' && <Type handleChangeGame={handleChangeGame}/>}
                        {game === 'room' && <Room handleChangeGame={handleChangeGame}/>} 
                        {game === 'blackjack' && <Blackjack handleChangeGame={handleChangeGame}/>} 
                        {game==='sudoku' && <Sudoku handleChangeGame={handleChangeGame}/> }  
                      </> : <Main handleChangeGame={handleChangeGame}/>}
        
    </>
  );
}