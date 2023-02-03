import React, { useState } from "react";

function List({ employees, handleEdit, handleDelete }) {
  return (
    <div className="body_item table" >
      <table className="bodytable">
        <thead className="table table-dark">
          <tr>
            <th>No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Department</th>
            <th>Skills</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody className="">
          {employees.length > 0 ? (
            employees.map((employees, i) => (
              <tr key={employees.No}>
                <td>{employees.No}</td>
                <td>{employees.firstname}</td>
                <td>{employees.lastname}</td>
                <td>{employees.email}</td>
                <td>{employees.gender}</td>
                <td>{employees.department}</td>
                <td>{employees.skills}</td>
                <td>
                  <button className="btn btn-primary" onClick={() => handleEdit(employees.No)}>Edit</button>
                </td>
                <td>
                  <button className="btn btn-danger" onClick={() => handleDelete(employees.No)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td align="center" colSpan='10'>No Employee</td>
            </tr>
          )}

          <tr>No. oF Employees = {employees.length}</tr>
        </tbody>
      </table>
      <br />
      <div>{/* <Pegination /> */}</div>
    </div>
  );
}

export default List;
