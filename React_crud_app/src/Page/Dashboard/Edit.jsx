import React, { useState ,useEffect} from 'react'

function Edit({ employees, selectedEmployee, setEmployees, setIsEditing }) {

    const No = selectedEmployee.No;

    const [firstname, setFirstname] = useState(selectedEmployee.firstname);
    const [lastname, setlastname] = useState(selectedEmployee.lastname);
    const [email, setEmail] = useState(selectedEmployee.email);
    const [phone_number, setPhonenumber] = useState(selectedEmployee.phone_number);
    const [gender, setGender] = useState(selectedEmployee.gender);
    const [department, setDepartment] = useState(selectedEmployee.department);
    const [skills, setSkills] = useState(selectedEmployee.skills);
    const [about, setAbout] = useState(selectedEmployee.about);
    useEffect(() => {
      console.log(selectedEmployee);
    
      
    }, [])
    
    function handleupdate(e) {
        console.log(No)
        e.preventDefault();

        const employee = {
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
        for (let i = 0; i < employees.length; i++) {
            if (employees[i].No === No) {
                employees.splice(i, 1, employee);
                break;
            }
        }
        setEmployees(employees);
        setIsEditing(false);
    }
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
            <form onSubmit={handleupdate}>
                <h1>Edit Employee</h1>
                <label>First Name: </label>
                <input
                    type="text"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                />
                <br />
                <br />
                <label>Last Name: </label>
                <input
                    type="text"
                    value={lastname}
                    onChange={(e) => setlastname(e.target.value)}
                />
                <br />
                <br />
                <label>Email: </label>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <br />
                <label>Phone Number: </label>
                <input
                    type="number"
                    maxlength="10"
                    value={phone_number}
                    onChange={(e) => setPhonenumber(e.target.value)}
                />
                <br />
                <br />
                <div>
                    <label>Gender: </label>
                    <input type='radio' value='Male' name='gender' onChange={(e) => setGender(e.target.value)} checked={gender=="Male"?"true":null}/>Male
                    <input type="radio" value='Female' name='gender' onChange={(e) => setGender(e.target.value)} checked={gender=="Female"?"true":null}/>Female
                </div>
                <br />
                <br />
                <div>
                    <label>Department: </label>
                    <select onChange={(e) => setDepartment(e.target.value)}>
                        <option value="PHP">PHP</option>
                        <option value=".NET">.NET</option>
                        <option value="SEO">SEO</option>
                        <option value="Mobile">Mobile</option>
                        <option value="Admin/HR">Admin/HR</option>
                        <option value="Account">Account</option>
                    </select>
                </div>
                <br />
                <br />
                <div >
                    <label>Skills: </label>
                    <input type='checkbox' value='Programming' onChange={() => addValue("Programming")} checked={skills.includes("Programming")?"true":""}/>Programming
                    <input type='checkbox' value='Communication' onChange={() => addValue("Communication")} checked={skills.includes("Communication")?"true":""} />Communication
                    <input type='checkbox' value='Finance' onChange={() => addValue("Finance")}  checked={skills.includes("Finance")?"true":""} />Finance
                    <input type='checkbox' value='Recruitment' onChange={() => addValue("Recruitment")} checked={skills.includes("Recruitment")?"true":""}/>Recruitment
                    <input type='checkbox' value='Optimization' onChange={() => addValue("Optimization")} checked={skills.includes("Optimization")?"true":""}/>Optimization
                    <input type='checkbox' value='App Development' onChange={() => addValue("App Development")} checked={skills.includes("App Development")?"true":""}/>App Development
                    <input type='checkbox' value='Frontend Technology' onChange={() => addValue("Frontend Technology")} checked={skills.includes("Frontend Technology")?"true":""}/>Frontend Technology
                    <input type='checkbox' value='Backend Technology' onChange={() => addValue("Backend Technology")} checked={skills.includes("Backend Technology")?"true":""}/>Backend Technology
                </div>
                <br />
                <br />
                <label>About: </label>
                <textarea
                    type="text"
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                />
                <br />
                <br />
                <div>
                    <input
                         type="submit"
                         className='btn btn-success'
                        value="Update"
                        style={{ marginRight: "10px" }}
                    />
                    <input
                        type="button"
                        className='btn btn-danger'
                        value="Cancel"
                        onClick={() => setIsEditing(false)}
                    />
                </div>
            </form>
        </div>
    )
}

export default Edit