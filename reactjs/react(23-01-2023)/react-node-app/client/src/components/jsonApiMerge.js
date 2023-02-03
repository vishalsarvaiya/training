import React,{useState,useEffect} from 'react'
import axios from 'axios'

const employee = require('../employee.json');
const project = require('../projects.json');

const JsonApiMerge = () => {

    const[data,setData] = useState([]);
    const handlesubmit = async () => {
            const res = await axios.get('http://localhost:8000/getemployeedetails');
            setData(res.data);
            console.log(res.data);
    }

    useEffect(() => {
        handlesubmit();
    },[]);

    useEffect(() => {
    
    }, [data]);

  return (
    <>
   
        {data.map((data,key) => {
            return(
                <div key={key}>
                    {
                    data.id+" " + data.name+" " + data.projectid+" " + data.details+" " + data.projects[0].projectDetails

                    // data.id + data.name + data.projectid + data.details + data.projects[0].projectDetails
                    }
                </div>

            )
        })}
    </>
  )
}

export default JsonApiMerge