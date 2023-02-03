import React, {useState} from 'react'
const Stated = () => {
    
const state = useState();    
const [count, setcount ] = useState(0);
console.log(state);

const incrmnt = () =>
{
    setcount(count+1);
    console.log("clicked");
}

  return (
    <div>
        <h1> {count} </h1>
       <button className='clk-btn' onClick={incrmnt}>click</button>
    </div>
         )
}

export default Stated


