import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
function Add({ employees, setEmployees, setIsAdding }) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhonenumber] = useState("");
  const [gender, setGender] = useState("");
  const [department, setDepartment] = useState("");
  const [skills, setSkills] = useState([]);
  const [about, setAbout] = useState("");

  const textInput = useRef(null);

  useEffect(() => {
    textInput.current.focus();
  }, []);

  const handelAdd = (e) => {
    e.preventDefault();

    if (
      !firstname ||
      !lastname ||
      !email ||
      !phone_number ||
      !gender ||
      !department ||
      !skills ||
      !about
    ) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required",
        showConfirmButton: true,
      });
    }

    const No = employees.length + 1;
    const newEmployee = {
      No,
      firstname,
      lastname,
      email,
      phone_number,
      gender,
      department,
      skills,
      about,
    };
    employees.push(newEmployee);
    setEmployees(employees);
    setIsAdding(false);
    console.log(employees);
  };
  const addValue = (tempValue) =>{
    const tempSkill = skills;
    if(skills.includes(tempValue)){
      for(let i=0;i<tempSkill.length;i++){
        if(tempSkill[i]==tempValue){
          tempSkill.splice(i,1);
        }
      }
    }else{
      tempSkill.push(tempValue);
    }
    console.log(tempSkill);
    setSkills(tempSkill);
  }
  return (
    <div>
      <form onSubmit={handelAdd}>
        <h1>Add Employee</h1>


        <table>
        <thead>
          <tr>
            <td> <label>First Name: </label></td>
            <td> <input
          type="text"
          ref={textInput}
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}/></td>
          </tr><br/>

          <tr>
            <td> <label><label>Last Name: </label> </label></td>
            <td> <input
          type="text"
          value={lastname}
          onChange={(e) => setlastname(e.target.value)}/></td>
          </tr><br/>
       
          <tr>
            <td> <label><label>Email: </label> </label></td>
            <td>  <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /></td>
          </tr><br/>

          <tr>
            <td> <label><label>Phone Number: </label> </label></td>
            <td> <input
          type="number"
          value={phone_number}
          onChange={(e) => setPhonenumber(e.target.value)}
        /></td>
          </tr><br/>

          
          <tr>
            <td> <label><label>Gender: </label> </label></td>
            <td> <td></td><input type='radio' value='Male' name='gender' onChange={(e) => setGender(e.target.value)} />Male
          <input type="radio" value='Female' name='gender' onChange={(e) => setGender(e.target.value)} />Female
      </td>
          </tr><br/>

          


     
          <tr>
            <td> <label><label>Department:  </label> </label></td>
            <td>   <select onChange={(e) => setDepartment(e.target.value)}>
            <option value="PHP">PHP</option>
            <option value=".NET">.NET</option>
            <option value="SEO">SEO</option>
            <option value="Mobile">Mobile</option>
            <option value="Admin/HR">Admin/HR</option>
            <option value="Account">Account</option>
          </select></td>
          </tr><br/>

          

          <div >
          <label> </label>
            </div>
          <tr>
            <td> <label><label>Skills: </label> </label></td>
            <td> <input type='checkbox' value='Programming' onChange={() => addValue("Programming")} />Programming
          <input type='checkbox' value='Communication' onChange={() => addValue("Communication")} />Communication
          <input type='checkbox' value='Finance' onChange={() => addValue("Finance")} />Finance
          <input type='checkbox' value='Recruitment' onChange={() => addValue("Recruitment")} />Recruitment
          <input type='checkbox' value='Optimization' onChange={() => addValue("Optimization")} />Optimization
          <input type='checkbox' value='App Development' onChange={() => addValue("App Development")} />App Development
          <input type='checkbox' value='Frontend Technology' onChange={() => addValue("Frontend Technology")} />Frontend Technology
          <input type='checkbox' value='Backend Technology' onChange={() => addValue("Backend Technology")} />Backend Technology
     </td>
          </tr><br/>

          <tr>
            <td>About: </td>
            <td><textarea
          type="text"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        /></td>
          </tr><br/>



          </thead>
          </table>


        <div>
          <input type="submit"   className="btn btn-success"  value="Add" style={{ marginRight: "10px" }} />
          <input
            type="button"
            className="btn btn-secondary"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
}

export default Add;
