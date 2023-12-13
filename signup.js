import React, {useState}from "react";
import "./loginform.css";

const Signup = () => {
    
    return (
        <div className = "cover">
            <h1>Join as a Member</h1>
            <input type="text" placeholder="Firstname" required/>
            <input type="text" placeholder="Lastname" required/>
            <input type="text" placeholder="Phonenumber" required/>
            <input type="email" placeholder="EmailID" required/>
            <input type="text" placeholder="Address" required/>

            <div className="login-btn">Join</div>
            <p>Already a member <a href="#">Login</a></p>
        </div>
    )
}
export default Signup;