import React, { useState } from "react";
import { employee_details as emp } from "../../Data/Body";
import List from "./List";

function Pagination({previousPageClick,nextPageClick}) {

  const previousPage = () => {
    previousPageClick();
  };

  const nextPage = () => {
    nextPageClick();
  };

  return (
    <div className="d-flex justify-content-between">
      <button className="btn btn-dark" style={{marginLeft:"10px"}} onClick={previousPage}>Previous</button>

      <button className="btn btn-dark" onClick={nextPage} style={{ marginLeft : "800px" }}>
        Next
      </button>
      
    </div>
   
  );
}

export default Pagination;
