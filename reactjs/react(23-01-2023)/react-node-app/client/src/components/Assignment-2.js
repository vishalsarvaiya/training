import React, { useState } from 'react';
import axios from "axios";

const Assignment2 = () => {
    const[value,setValue] = useState("");
    const[power,setPower] = useState("");
    const[ans,setAns] = useState("");

    function handlesbmt(event) {
        event.preventDefault();
        axios.post("http://localhost:4000", {
            value: value, power: power
        }).then((res) => {
            console.log(res.data.ans);
            setAns(res.data.ans);
        });
    }

  return (
    <div>
    <form onSubmit={handlesbmt}>
        <input type='text' id='number' name='value' value={value} onChange = {(e) => {setValue(e.target.value) }}/>
        <input type='text' id='number' name='power' value={power} onChange = {(e) => {setPower(e.target.value) }}/>
        
        <input type = 'submit'></input>
        
    </form>
        <p>{ans}</p>
    </div>
  )
}

export default Assignment2
