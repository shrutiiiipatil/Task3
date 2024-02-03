import React, { useState } from "react";
import { Link,useNavigate } from 'react-router-dom'
import Navbar from "../components/Navbar";

export default function Login() {
  const [credentails, setcredentails] = useState({ email: "", password: "" });
  let navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(
      JSON.stringify({
        password: credentails.password,
        email: credentails.email,
      })
    );
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: credentails.password,
        email: credentails.email,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("Enter Valid Credentails");
    }
    if (json.success) {
        localStorage.setItem("authToken",json.authToken);
        console.log(localStorage.getItem("authToken"));
        navigate("/");
    }
    
  };
  const onChange = (event) => {
    setcredentails({ ...credentails, [event.target.name]: event.target.value });
  };
  return (
    <>
    <div style={{background:"#bbe4e9",height:"735px"}}>
    <Navbar />
    
      <div class="container"style={{"marginTop":"30px",paddingTop:"10px",borderRadius:"10px",backgroundColor:"#393e46",height:"350px",width:"500px"}} >
        <form onSubmit={handleSubmit}>
          
          
          <div class="mb-3">
            <label htmlFor="exampleInputEmail1" class="form-label me-2 text-white ">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              name="email"
              value={credentails.email}
              onChange={onChange}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text text-white">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label htmlFor="exampleInputPassword1" class="form-label text-white">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              name="password"
              value={credentails.password}
              onChange={onChange}
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" class="m-3 btn btn-success">
            Submit
          </button>
          <Link to="/createuser" class="m-3 btn btn-danger">
            New User
          </Link>
        </form>
      </div>
      </div>
    </>
  );
}
