import React, { useState } from "react";

const Form = () =>{
    const[name,setName] = useState("")
    const[fullname,setfullname] = useState()


    const get = (event) =>{
        console.log(event.target.value);
        setName(event.target.value);
    }

    const show = () =>{
        setfullname(name);
        
    }
    return(
            <div>
                <h1> HELLO {fullname} </h1>
                <input type='text' placeholder='enter name' value={name} onChange={get} ></input>
                <button onClick={show}> SHOW DATA </button>
            </div>
    );
}

export default Form