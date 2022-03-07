import React,{useState} from 'react';
import Link from '@material-ui/core/Link';
import '../App.css';

const Signup = (props) => {
    const[first_name,setFname] = useState("");
    const[last_name,setLname] = useState("");
    const[user_name,setUsername] = useState("");
    const[password,setPassword] = useState("");
    const [error,setError] = useState("");

    const handleSubmit = () =>{
      // e.preventDefault();
      console.log("Here")
      const user={first_name,last_name,password,user_name}

      console.log(user)
      if(!first_name || !last_name || !user_name || !password){
        setError("Please Fill All Fields");
      }
      else{
        fetch('http://localhost:8080/register/',{    //yaha pe teri jo API ki ink ho vo dal dene
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(user)
        }).then(res => res.json())
        .then(data => {
          if(data.error){
            console.log(data.error)
          }
          else{
            props.handleChangeSignin();
          }
        }).catch(error => console.log (error))
      }  
    }
    return (
    <>
      <div>
          <h5 className='text-4xl text-yellow-200 mb-4'>
            Sign up
          </h5>
            <div>
                <div>
                  <label className='text-xl mr-4 text-yellow-200 mb-4'>
                    First Name
                  </label>
                  <input
                    type='text'
                    name="first_name"
                    className='mb-2 h-8 w-full rounded-md'
                    value={first_name}
                    onChange={(e)=> setFname(e.target.value)}
                  />
                </div>
                <div>
                  <label className='text-xl mr-4 text-yellow-200 mb-2'>
                    Last Name
                  </label>
                  <input
                    type='text'
                    className='mb-2 h-8 w-full rounded-md'
                    name="last_name"
                    value={last_name}
                    onChange={(e)=> setLname(e.target.value)}
                  />
                </div>
                <div>
                  <label className='text-xl mr-4 text-yellow-200 mb-2'>
                    User Name
                  </label>
                  <input
                    value={user_name}
                    type='text'
                    className='mb-2 h-8 w-full rounded-md'
                    onChange={(e)=> setUsername(e.target.value)}
                    name="user_name"
                  />
                </div>
                <div>
                  <label className='text-xl mr-4 text-yellow-200 mb-2'>
                      Password
                  </label>
                  <input
                    type='password'
                    name="password"
                    className='mb-6 h-8 w-full rounded-md'
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                  />
                </div>
                <div>
                  <button
                    className='bg-yellow-400 rounded-md h-8 w-full mb-4'
                    type="submit"
                    onClick={handleSubmit}
                    >
                    Sign Up
                  </button>
                </div>
              </div>
          <div container justifyContent="flex-end">
            <div>
            <Link onClick={props.handleChangeSignin} variant="contained">Already have an account? Sign in</Link>
            </div>
          </div>
          <h5 className='text-2xl text-yellow-200 mb-4' >
            {error}
          </h5>
      </div>
    </>
  );
};

export default Signup;