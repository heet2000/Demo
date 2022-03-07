import React,{useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Signup from './Signup';
import Signin from './Signin';
import '../App.css';

export default function Authantication() {
  const [signinFalg,setSigninFlag] = useState(false);
  const handleChangeSignup = () =>{
    setSigninFlag(true);
  }
  const handleChangeSignin = () =>{
    setSigninFlag(false);
  }

  return (
    <Grid container component="main" className='form3'>
      <Grid xs={12} sm={6} md={4} lg={3} className='form'>
        {signinFalg ? <Signup handleChangeSignin = {handleChangeSignin} /> : <Signin handleChangeSignup = {handleChangeSignup}/>}
      </Grid>
    </Grid>  
  );
}
