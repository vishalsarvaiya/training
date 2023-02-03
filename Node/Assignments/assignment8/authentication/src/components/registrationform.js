import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";



const Registrationform = () => {

    const[firstname,setFirstname] = useState("");
    const[lastname,setLastname] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[confpassword,setConfpassword] = useState("");
    const[data,setData] = useState([]);

    const handlesubmit = async (e) => {
        e.preventDefault();

        if (
            !firstname ||
            !lastname ||
            !email ||
            !password ||
            !confpassword
          ) {
            return (
                        alert("all fields are required")
                    );
          }

        else if(password.length < 8) {  
            
            return (
                alert("Password Must Have Atleast 8 Character")
            )
         }  
        else if(password != confpassword)
        {
            return(
                alert("Password And Confirm Password Must Be Same")
            )
        }
        else{
            const res = await axios.post("http://localhost:8000/registration", {
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password,
                confpassword: confpassword

            })
                .then((res) => {
                    setData(res.data);
                    console.log(data);
                })
                .catch((err) => {
                    console.group(err);
                });
        }
    }

  return (
    <div>
            <Navbar />

            <div className="container d-flex justify-content-center">
            <form onSubmit={handlesubmit} className='col-5 mt-5' >
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Firstname</label>
                    <input type='text' value = {firstname} class="form-control" name = 'firstname' onChange ={(e) => {setFirstname(e.target.value) }} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Lastname</label>
                    <input type='text' class="form-control" value = {lastname} name = 'password' onChange ={(e) => {setLastname(e.target.value) }} />
                </div>

                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Email</label>
                    <input type='text' class="form-control" value = {email} name = 'email' onChange ={(e) => {setEmail(e.target.value) }} />
                </div>

                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type='password' class="form-control" value = {password} name = 'password' onChange ={(e) => {setPassword(e.target.value) }} />
                </div>

                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Lastname</label>
                    <input type='text' class="form-control" value = {confpassword} name = 'confpassword' onChange ={(e) => {setConfpassword(e.target.value) }} />
                </div>
                <Link to={"/register"} type="submit" class="btn btn-primary"  >Register</Link>
                <Link to={"/login"} type="submit" class="btn btn-primary ms-2"  >Back</Link>
            </form>
            </div>
    </div>
  )
}

export default Registrationform