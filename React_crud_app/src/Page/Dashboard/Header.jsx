import React from "react";
import Search from "./Search";
import "../Dashboard";

function Header({ setIsAdding, searchTextFunction }) {
  return (
    <header>
      <div className="navbar d-flex justify-content-between align-items-center">
        <h1>Employee Management System</h1>
       
        <Search className="px-2 py-5 btn btn-success" searchTextFunction={searchTextFunction} />
        <button className="header_button btn btn-primary" onClick={() => setIsAdding(true)}>
          Add Employee
        </button>
      </div>
    </header>
  );
}

export default Header;
