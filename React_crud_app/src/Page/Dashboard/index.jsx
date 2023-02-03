import React, { useState, useEffect } from "react";
import Add from "./Add";
import List from "./List";
import Header from "./Header";
import Edit from "./Edit";
import { searchData, paigination } from "../../Data/Body";
import Pagination from "./Pagination";

function Index() {
  const [employees, setEmployees] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [page, setPage] = useState(0);
  const [pagePerItem, setPagePerItem] = useState(5);

  useEffect(() => {}, [employees]);

  useEffect(() => {
    reloadData();
  }, []);

  useEffect(() => {
    reloadData();
  }, [page]);

  const reloadData = () => {
    const data = paigination(page, pagePerItem);
    setEmployees(data);
  };
  
  const handleEdit = (No) => {
    const [employee] = employees.filter((employee) => employee.No === No);
    setSelectedEmployee(employee);
    setIsEditing(true);
  };

  const handleDelete = (No) => {
    const [employee] = employees.filter((employee) => employee.No === No);
    setEmployees(employees.filter((employee) => employee.No !== No));
  };
  const searchTextFunction = (searchText) => {
    setEmployees(searchData(searchText));
  };
  const previousPageClick = () => {
    setPage(page - 1);
  };
  const nextPageClick = () => {
    setPage(page + 1);
  };

  return (
    <div>
      {!isAdding && !isEditing && (
        <>
          <Header
            setIsAdding={setIsAdding}
            searchTextFunction={searchTextFunction}
          />

          <List
            employees={employees}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
          <Pagination
            nextPageClick={nextPageClick}
            previousPageClick={previousPageClick}
          />
        </>
      )}

      {isAdding && (
        <Add
          employees={employees}
          setEmployees={setEmployees}
          setIsAdding={setIsAdding}
        />
      )}
      {isEditing && (
        <Edit
          employees={employees}
          selectedEmployee={selectedEmployee}
          setEmployees={setEmployees}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
}

export default Index;
