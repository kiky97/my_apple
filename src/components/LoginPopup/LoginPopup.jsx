import React, { useState } from 'react'
import "./LoginPopup.css"
import { assets } from '../../assets/assets'
const LoginPopup = ({setShowLogin}) => {
    const [currState, setCurrState] = useState("Sign up")
  return (
    <div className='login-popup'>
        <form className="login-popup-container" onSubmit={(e) => e.preventDefault()}>
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />

            </div>
            <div className="login-popup-inputs">
                {currState === "Sign up" && <input type="text" placeholder='Your Name' required />}
                <input type="email" placeholder='Email' required />
                <input type="password" placeholder='Password' required />
            </div>
            <button type='submit'>{currState === "Sign up" ? "Create account" : "Log in"}</button>
            <div className="login-popup-condition">
                <div>
                    <input type="checkbox" required />
                    <span>I agree to the <span>Terms of Service</span> and <span>Privacy Policy</span></span>
                </div>
            </div>
            {currState === "Log in" 
            ?<p> Create an new account? <span onClick={()=>setCurrState("Sign up")}>Sign up</span></p> 
            : <p> Already have an account? <span onClick={()=>setCurrState("Log in")}>Log in</span></p>
            }
            
          
        </form>
    </div>
  );
};

export default LoginPopup;