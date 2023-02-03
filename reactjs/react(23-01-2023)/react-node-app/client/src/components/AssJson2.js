import React, { useState, useEffect } from 'react'
import axios from 'axios'
const project = require('../projects.json')


const AssJson2 = () => {
    const [jdata, setJdata] = useState([]);
    const handleSubmit = async (id) => {
        const res = await axios.get(`http://localhost:8000/project/${id}`);
        console.log(res.data);
        setJdata(res.data);
    }
    useEffect(() => {
        handleSubmit(2);
    }, []);
    useEffect(() => {
    
    }, [jdata]);
    return (
        <>
            {jdata.map((data, key) => {
                 return (
                    <div key={key}>
                        {
                            "DETAILS=" + data.details +
                            ", " +
                            "PROJECT ID=" + data.projectid
                        }
                    </div>
      );
    })}
        </>
    )
}
export default AssJson2

