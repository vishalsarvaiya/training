import React, { useState, useEffect } from "react";
import BasicButtons from "../../client1/src/components/button";
import Folderform from "../../client1/src/components/folderform";
import Fileform from "../../client1/src/components/fileform";
import "./App.css";
import axios from 'axios';

// import React from 'react'
// import Assignment2 from './components/Assignment-2'
// import Ass1 from './components/file1'
// import Assignment_3 from './components/Assignment-3'


function App() {
  const [message, setMessage] = useState("");
  const [folderVisible,setFolderVisible]=useState(false);
  const [fileVisible,setFileVisible]=useState(false);

  useEffect(() => {
   
  }, [message]);


  const readFileBtnClick = () =>{
    fetch("http://localhost:8001/readFile")
    .then((res) => res.json())
    .then((data) =>{console.log(data);
      setMessage(data+" ")});
  }


const appendFileBtnClick = () => {
  fetch("http://localhost:8001/appendfile")
  .then((res) => res.json())
  .then((data)=> {console.log(data);
  setMessage(data+" ")});
}
const writeFileBtnClick = () => {
  fetch("http://localhost:8001/writefile")
  .then((res) => res.json())
  .then((data)=> {console.log(data);
  setMessage(data+" ")});
}
const deleteFileBtnClick = () => {
  fetch("http://localhost:8001/deletefile")
  .then((res) => res.json())
  .then((data)=> {console.log(data);
  setMessage(data+" ")});
}

const createFolderBtnClick = () => {
  setFolderVisible(!folderVisible);
}

const createFileBtnClick = () => {
  setFileVisible(!fileVisible);
}
return (
    <div className="App" >
      <br>
      </br>
      <BasicButtons readFileBtnClick={readFileBtnClick} createFolderBtnClick={createFolderBtnClick} 
      createFileBtnClick={createFileBtnClick} appendFileBtnClick={appendFileBtnClick} writeFileBtnClick={writeFileBtnClick} 
      deleteFileBtnClick={deleteFileBtnClick}/>
      {folderVisible?<Folderform/>:<></>}
      {fileVisible?<Fileform/>:<></>}
      
      <h1>{message}</h1>

      {/* <Assignment_3/> */}
      {/* <Ass1/> */}
      {/* <Assignment1/> */}
      {/* <Assignment2/> */}
    </div>
  );
}

export default App


// import React from 'react'
// import Assignment2 from './components/Assignment-2'
// import Ass1 from './components/file1'
// import Assignment_3 from './components/Assignment-3'
// const App = () => {
//   return (
//     <div>
//       <Assignment_3/>
//       {/* <Ass1/> */}
//       {/* <Assignment1/> */}
//       {/* <Assignment2/> */}
//     </div>
//   )
// }

// export default App

