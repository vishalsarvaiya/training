import React from 'react'

const Emp_add = () => {
  return (
    <div>

<form>
        <table>
            <tr>
                <td> Firstname:</td>
                <td><input type="text" name="firstname"/></td>
            </tr>

            <tr>
                <td>Lastname:</td>
                <td><input type="text" name="lastname"/></td>
            </tr>
            
            <tr>
                <td> Email:</td>
                <td><input type="email" name="email"/><br/></td>
            </tr>
            
            <tr>
                <td> Phone Number:</td>
                <td><input type="number" name="Phone"/><br/></td>
            </tr>
            
            <tr>
                <td>Gender:</td>
                <td>   <input type="radio" name="gender" id="male" value="male"/>Male
                    <input type="radio" name="gender" id="male" value="female"/>Female<br/></td>
            </tr>
            
            <tr>
                <td>Department:</td>
                <td> <select name="department"><br/>
                    <option value="PHP">PHP</option>
                    <option value=".NET">.NET</option>
                    <option value="SEO">SEO</option>
                    <option value="Mobile">Mobile</option>
                    <option value="Admin/HR">Admin/HR</option>
                    <option value="Account">Account</option>
                </select></td>
            </tr>
            
            <tr>
                <td>Skills:</td>
                <td><input type="checkbox" name="Skills" id="programming" value="programming"/>Programming 
                    <input type="checkbox" name="Skills" id="Communication" value="Communication"/>Communication
                    <input type="checkbox" name="Skills" id="Finance" value="Finance"/>Finance<br/>
                    <input type="checkbox" name="Skills" id="Recruitment" value="Recruitment"/>Recruitment
                    <input type="checkbox" name="Skills" id="Optimization" value="Optimization"/>Optimization
                    <input type="checkbox" name="Skills" id="App" value="App Development"/>App Development<br/>
                    <input type="checkbox" name="Skills" id="Frontend " value="Frontend Technology"/>Frontend Technology
                    <input type="checkbox" name="Skills" id="Backend  " value="Backend  Technology"/>Backend  Technology<br/></td>
            </tr>
            
            <tr>
                <td>Aboout:</td>
                <td>  <textarea rows="3"  name="about"></textarea></td>
            </tr>
      <tr rowspan="2"><input type="submit" name="submit"></input></tr>
    </table>

    </form>






    </div>
    
  )
}

export default Emp_add