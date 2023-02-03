import React from "react";

const Listkey = () => {

    const IPL = ["CSK","MI","RCB","CSK"];
    const result = IPL.map((IPL,index) => <div key = {index}> {IPL} index {index}</div>)

    return (
        <div>
       
        <h1>  {result}</h1>
        
        </div>
    );
}

export default Listkey