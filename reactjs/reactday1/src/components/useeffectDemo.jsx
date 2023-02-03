import React, { useEffect, useState } from 'react'

const UseeffectDemo = () => {

    const[count,setcount] = useState(0);

    useEffect( () =>{
        document.title = 'chats('+count+')'
    });

    console.log('outside')
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={
            ()=>setcount(count+1)
         }>click</button>
    </div>
  )
}

export default UseeffectDemo