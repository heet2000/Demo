import React,{useState} from 'react'

 const Try = () => {
    const[val, setVal] = useState(0);
  return (
    <div>
        <button className='bg-yellow-400 w-24 h-8 mr-8' onClick={()=>setVal(val+1)}>+</button>
        <button className='bg-yellow-400 w-24 h-8 mr-8' onClick={()=>setVal(val-1)}>-</button>
        {val}
    </div>
  )
}

export default Try;