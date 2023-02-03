import React , {useState,useEffect} from 'react'
import axios from 'axios'
//const emp = require('..employee.json');
//const project = require('../projects.json')

const emp = require('../employee.json');

const AssJson = () =>{

    const [jdata,setJdata]=useState([]);

    const handleSubmit = async () => {
        const res = await axios.get("http://localhost:8000/emp/2");
        console.log(res.data);
        setJdata(res.data);
    }
    useEffect(()=>{
        handleSubmit()
    },[])
    useEffect(() => {
    
    }, [jdata]);


   
    return(
        <>
            <>
         

                {jdata.map((data, key) => {
                    return (
                        <div key={key}>
                            {"ID=" + data.id +
                                " , " +
                                "NAME=" + data.name +
                                " ," +
                                "DETAILS=" + data.details +
                                ", " +
                                "PROJECT ID=" + data.projectid
                            }
                        </div>
          );
        })}


            </>


        </>
    )
 }


export default AssJson




// const [photos, setPhotos] = useState([]);
    
// useEffect(()=>{
//     axios.get('emp')
//     .then(response => {
//         console.log(response)
//         setPhotos(response.data.data)
//     })
// })

// return (
//     <div>
//         <ul>
//             hello
//            {photos.map(photos => (<li>{photos.photo}</li>)
//            )}
//         </ul>
//     </div>
// )