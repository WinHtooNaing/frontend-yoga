import React, { useRef } from 'react'
import './index.css'
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import Navbar from '../pages/Navbar';
const Login = () => {


  const navigate = useNavigate();

  const email = useRef();
      const password = useRef();
      const getEmail = localStorage.getItem("emailData");
      const getPassword = localStorage.getItem("passwordData");
  const handleSubmit = ()=>{
      if(email.current.value === getEmail && password.current.value === getPassword){
        navigate("/admin/");
        Swal.fire({
          title: "Success",
          text: "Admin Login successful",
          icon: "success",
          confirmButtonText: "OK",
        });
      }else{
        alert("Something went wrong, please try again")
       
      }
  }
  return (
  
    <>
    <Navbar/>
    <div class="page-header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2>Login</h2>
                    </div>
                    <div class="col-12">
                        <a href="">Home</a>
                        <a href="">Login</a>
                    </div>
                </div>
            </div>
        </div>
       
    <section class="vh-100" >
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          class="img-fluid" alt="Sample image"/>
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form onSubmit={handleSubmit}>
          

          <div class="form-outline mb-4">
            <input type="email" id="form3Example3" class="form-control form-control-lg"
              placeholder="Enter a valid email address" ref={email} />
            <label class="form-label" for="form3Example3">Email address</label>
          </div>

          <div class="form-outline mb-3">
            <input type="password" id="form3Example4" class="form-control form-control-lg"
              placeholder="Enter password" ref={password} />
            <label class="form-label" for="form3Example4">Password</label>
          </div>

          

          <div class="text-center text-lg-start mt-4 pt-2">
            <button type="submit" class="btn btn-primary btn-lg"
            style={{paddingLeft:"2.5rem",paddingRight:"2.5rem"}}>Login</button>
           
          </div>

        </form>
      </div>
    </div>
  </div>
  
</section>
    </>
  )
}

export default Login