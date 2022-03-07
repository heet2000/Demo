import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import Link from '@material-ui/core/Link';

export default function Signin(props) {
  const navigate = useNavigate();
  const[user_name,setUsername] = useState("");
  const[password,setPassword] = useState("");
  const [error,setError] = useState("");

  const handleSubmit = (e) =>{
    // e.preventDefault();
    if(!password || !user_name){
      setError("Please Fill in All The Information");
    }
    fetch(`http://localhost:8080/login/${user_name}/${password}`,{   
      method:"GET",
      headers:{
        "Content-Type":"text/plain;charset=UTF-8"
      },
      // body:JSON.stringify(user)
    }).then(res => {
    if(res.status === 404){
      alert("No user exists with such Username and Password")
    }
    else if(res.status === 404){
      alert("There is some error")
    }
    else{
      navigate('/home');
    }}).then(data => {
      console.log(data);
      if(data.error){
        console.log(data.error)
      }
    }).catch(error => console.log (error)) 
    setUsername("");
    setPassword("");
  }

  return (
      <div>
        <div>
          <h5 className='text-4xl text-yellow-200 mb-4'>
            Sign in
          </h5>
            <div>
              <div>
                <label className='text-xl text-yellow-200 mb-2'>
                User Name
                </label>
                <input
                  id="username"
                  type="text"
                  value={user_name}
                  className='mb-2 h-8 w-full rounded-md'
                  onChange={(e)=> setUsername(e.target.value)}
                  name="user_name"
                />
              </div>
              <div>
              <label className='text-xl text-yellow-200 mb-2'>
                Password
                </label>
                <input 
                  name="password"
                  value={password}
                  type="password"
                  id="password"
                  className='mb-6 h-8 w-full rounded-md'
                  onChange={(e)=> setPassword(e.target.value)}
                />
              </div>
            </div>
            <div item xs={12}>
            <button className='bg-yellow-400 rounded-md h-8 w-full mb-4'
              type="submit"
              onClick={handleSubmit}
            >
                Sign In
            </button> 
          </div> 
          <div container>
            <div>
            <Link onClick={props.handleChangeSignup} variant="contained">Don't have an account? Sign Up</Link>
            </div>
          </div>
        </div>
        <h5 className='text-2xl text-yellow-200 mb-4'>
         {error} 
        </h5>               
      </div>
  );
}
