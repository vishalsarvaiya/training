import React, { useState } from 'react'

const Assignment_3 = () => {

  const[folder,setFolder] = useState("");

  const[ffolder,setFfolder] = useState("");
  const[ffile,setFfile] = useState("");

  const[wfolder,setWfolder] = useState("");
  const[wfile,setWfile] = useState("");
  const[wdata,setWdata] = useState("");

  const[afolder,setAfolder] = useState("");
  const[afile,setAfile] = useState("");
  const[adata,setAdata] = useState("");

  
  const[rfolder,setRfolder] = useState("");
  const[rfile,setRfile] = useState("");

  
  const[dfolder,setDfolder] = useState("");
  const[dfile,setDfile] = useState("");

  
  const[disfolder,setDisfolder] = useState("");
  const[disfile,setDisfile] = useState("");
  
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
   <>
   
      <input type='button' value="Create Folder"/>
      <input type='text' name='folder' value={folder} onChange = {(e) => {setFolder(e.target.value)}} 
      placeholder='Enter Folder Name'/><br/><br/>
     
      <input type='button' value="Create a File"/>
      <input type='text'  name='ffolder' value={ffolder} onChange = {(e) => {setFfolder(e.target.value)}}  placeholder='Enter Folder Name'/>
      <input type='text' name='ffile' value={ffile} onChange = {(e) => {setFfile(e.target.value)}}  placeholder='Enter File Name' /><br/><br/>
      
      <input type='button' value="Write Data"/>
      <input type='text' name='wfolder' value={wfolder} onChange = {(e) => {setWfolder(e.target.value)}}  placeholder='Enter Folder Name' />
      <input type='text' name='wfile' value={wfile} onChange = {(e) => {setWfile(e.target.value)}}  placeholder='Enter File Name'/>
      <input type='text' name='wdata' value={wdata} onChange = {(e) => {setWdata(e.target.value)}}   placeholder='Enter Data'/><br/><br/>
     
      <input type='button' value="Append Data"/>
      <input type='text' name='afolder' value={afolder} onChange = {(e) => {setAfolder(e.target.value)}}  placeholder='Enter Folder Name'/>
      <input type='text' name='afile' value={afile} onChange = {(e) => {setAfile(e.target.value)}}  placeholder='Enter File Name' />
      <input type='text' name='adata' value={adata} onChange = {(e) => {setAdata(e.target.value)}}  placeholder='Enter Data To Append' /><br/><br/>
     


      <input type='button' value="Read Data"/>
      <input type='text' name='rfolder' value={rfolder} onChange = {(e) => {setRfolder(e.target.value)}}  placeholder='Enter Folder Name'/>
      <input type='text' name='rfile' value={rfile} onChange = {(e) => {setRfile(e.target.value)}}  placeholder='Enter File Name'/><br/><br/>

      <input type='button' value="Delete File"/>
      <input type='text' name='dfolder' value={dfolder} onChange = {(e) => {setDfolder(e.target.value)}}  placeholder='Enter Folder Name'/>
      <input type='text' name='dfile' value={dfile} onChange = {(e) => {setDfile(e.target.value)}}  placeholder='Enter File Name'/><br/><br/>



      <input type='button' value="Display Data"/>
      <input type='text' name='disfolder' value={disfolder} onChange = {(e) => {setDisfolder(e.target.value)}}  placeholder='Enter Folder Name' />
      <input type='text' name='disfile' value={disfile} onChange = {(e) => {setDisfile(e.target.value)}}  placeholder='Enter File Name'/><br/><br/>

   </>
  )
}

export default Assignment_3