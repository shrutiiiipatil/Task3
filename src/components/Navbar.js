import React from "react";
import {Link,useNavigate} from 'react-router-dom'

export default function Navbar() {
  const navigate=useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem("authToken");
    navigate("/login");

  }
  
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-success" style={{backgroundColor:"#53a8b6"}}>
        <div className="container-fluid" >
          <Link className="navbar-brand fs-3" style={{color:"#113f67 "}} to="/">
            Clean City
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
              {(localStorage.getItem("authToken")) || (!localStorage.getItem("authToken"))?
              < div className="d-flex">
              
                <Link className="btn  text-black " to="/">
                  Home
                </Link>
             
             
               
              
              </div>
              :""}
             
              {(localStorage.getItem("authToken"))?
              < div className="d-flex">
              
                <Link className="btn  text-black  " to="/myhistory">
                  My History
                </Link>
             
             
               
              
              </div>
              :""}
              </ul>
              {(!localStorage.getItem("authToken"))?
              < div className="d-flex">
              
                <Link className="btn  text-black " to="/login">
                  Login
                </Link>
             
             
                <Link className="btn  text-black " to="/createuser">
                  SignUp
                </Link>
              
              </div>
              :<div className="btn  text-danger " onClick={handleLogout}>LogOut</div>}

            
            
          </div>
        </div>
      </nav>
    </>
  );
}
