import React, {useState}from "react";
import "./loginform.css";

const LoginForm = () => {
    
    return (
        <div className = "cover">
            <h1>Login</h1>
            <input type="text" placeholder="username" required/>
            <input type="password" placeholder="password" required/>
            
            <div className="login-btn">Login</div>
            <a href="#">Forgot Password?</a>
            <p>Not a Member? Click <a href="#">Join</a></p>
        
        </div>
    )
}
export default LoginForm;