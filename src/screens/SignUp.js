import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar';


export default function SignUp() {
   const [credentails, setcredentails] = useState({name:"",email:"",password:"",geolocation:""})
   let navigate=useNavigate();
   const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(JSON.stringify({name:credentails.name,password:credentails.password,email:credentails.email,location:credentails.geolocation}));
        const response=await fetch("http://localhost:5000/api/createuser",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'

            },
            body:JSON.stringify({name:credentails.name,password:credentails.password,email:credentails.email,location:credentails.geolocation})
        });
        const json=await response.json();
        console.log(json);
        if(!json.success){
            alert("Enter Valid Credentails")
        }
        if(json.success){
          navigate("/");
      }
    }
    const onChange=(event)=>{
        setcredentails({...credentails,[event.target.name]:event.target.value})
    }
  return (
    <>
     <div style={{background:"#bbe4e9",height:"735px"}}>
    <Navbar/>
    <div class="container" style={{"marginTop":"30px",paddingTop:"12px",marginBottom:"10px",borderRadius:"10px",backgroundColor:"#393e46",height:"560px",width:"500px"}} >
    <form onSubmit={handleSubmit}>
    <div class="mb-3">
    <label htmlFor="name" class="form-label text-white" >Username</label>
    <input type="text" class="form-control" name='name' width="50" value={credentails.name} onChange={onChange}/>
  </div>
  <div class="mb-3">
    <label htmlFor="name" class="form-label text-white">Address</label>
    <input type="text" class="form-control" name='geolocation' value={credentails.geolocation} onChange={onChange} />
    
  </div>
  <div class="mb-3">
    <label htmlFor="exampleInputEmail1" class="form-label text-white">Email address</label>
    <input type="email" class="form-control" name='email' value={credentails.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text text-white">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label htmlFor="exampleInputPassword1" class="form-label text-white">Password</label>
    <input type="password" class="form-control" name='password' value={credentails.password} onChange={onChange} id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" class="m-3 btn btn-success" >Submit</button>
  <Link to='/login' class='m-3 btn btn-danger'>Already an User</Link>
</form>
</div>

</div>
    </>
  )
}

