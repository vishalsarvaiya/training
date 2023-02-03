import React, { useState, useEffect } from "react";
import axios from "axios";

const ApiJson = () => {
  const [jdata, setJdata] = useState([]);

  useEffect(() => {
    axios
      .get("http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees")
      .then((res) => {
        setJdata(res.data);
      });
  },[]);

  return (
    <div>
      {!jdata
        ? "Loading..."
        : jdata.map((item) => {
            return (
              <div key={item.id}>
               "id": {item.id} 
               "name" : {item.name} 
               "createdAt": {item.createdAt}
              </div>
            );
          })}
    </div>
  );
};

export default ApiJson;
