import React, { useContext } from 'react'
import {FirstName,LastName} from '../App.jsx'


const Comp2 = () => {
    const name = useContext(FirstName);
    const lname = useContext(LastName);
  return (
    <>
    <h1> My Name Is {name} {lname}</h1>
    </>
  )
}

export default Comp2