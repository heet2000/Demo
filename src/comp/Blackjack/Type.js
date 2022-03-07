import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
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

const Type = ({handleChangeGame}) => {
    const classes = useStyles();
    const nevigate = useNavigate();
    const [tableno,setTableno] = useState("");
  return (
    <>
        <AppBar position="absolute">
            <Toolbar className={classes.toolbar}>
                <Typography component="h1" variant="h4" color="inherit" className={classes.title}>
                    Kapture Game
                </Typography>
            </Toolbar>
        </AppBar>
        <div className='cards'>
            <div className='form4'>
                <div>
                    <h5 className='text-4xl text-yellow-300 mb-2 pl-7'>
                        Friends & Family
                    </h5>
                    <p className='text-lg text-yellow-300 mb-8 pl-32'>Host a private game</p>
                </div>
                <div className='type'>
                    <div>
                        <button onClick={() => handleChangeGame('room')} className='text-xl bg-yellow-300 rounded-md w-36 mr-4 h-20'>
                            Host Table
                        </button>
                    </div>
                    <div>
                        <input type='text' value={tableno} onChange={(e) => setTableno(e.target.value)} placeholder='Table ID' className='text-xl text-yellow-300 w-20 bg-transparent border-2 border-yellow-300 rounded-md h-20' />
                    </div>
                    <div>
                        <button onClick={() => handleChangeGame('blackjack')} className='text-xl bg-yellow-300 rounded-md w-20 h-20 mt--2'>
                            Join Table
                        </button>
                    </div>
                </div>
                <div>
                    <button onClick={() => handleChangeGame('')} className='bg-yellow-300 text-lg w-full h-10 mt-4 rounded-md'>
                        Back
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Type;
