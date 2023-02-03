import React from "react";
import Stated from "./statedemo";
//import Propdemo from "./propdemo";


let file_name = "propdemo"
const Con_rend = () =>{
            if(file_name === "propdemo")
            {
                return <Stated/>;
            }
            else
            {
               return <h1>no</h1>
            }
    
        };


export default Con_rend