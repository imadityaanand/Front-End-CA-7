import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Register.css"

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [alert, setAlert] = useState("");

    const navigate = useNavigate();

    function checkEmail(email){
        const format = /[ `!#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

        if(!email.includes('@')){
            setAlert("Invalid email.")
        } else {
            if(email.match(format)){
                setAlert("Email cannot contain special characters.")
            } else {
                if(email[email.length - 1] === '@'){
                    setAlert("Email must have something following after '@'")
                } else {
                    return true;
                }
            }
        }
    }

    function HandleSubmit(e) {
        e.preventDefault();
        const confirm = document.querySelector(".confirm").value;
        const format = /[ `!#@$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

        if(name === ""){
            setAlert("Name field cannot be empty");
        } else if(name.length < 3) {
            setAlert("Name must be greater than 3 characters");
        } else if(name.length > 30) {
            setAlert("Name must be less than 30 characters");
        } else {
            if(checkEmail(email)) {
                if(password === ""){
                    setAlert("Password field cannot be empty");
                } else if(password.length < 10 || !password.match(format)) {
                    setAlert("Password should be at least 10 characters long and must contain a special character.");
                } else {
                    if(password != confirm){
                        setAlert("Confirmed password does not match.")
                    } else {
                        setAlert("Registered Successfully. Redirecting to Home Page...");

                        sessionStorage.setItem("name", name[0].toUpperCase() + name.slice(1, name.length).toLowerCase());
                        sessionStorage.setItem("email", email);

                        setTimeout(function(){
                            navigate("/");
                        }, 1000);
                    }
                }
            }
        }
    }

    return (
        <div className='register'>
        <h2>Create Account</h2>
        <form onSubmit={HandleSubmit}>
            <input placeholder='Your Name' type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
            <input placeholder='Email' type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <input placeholder='Password' type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
            <input placeholder='Confirm Password' type="password" className='confirm'></input>

            <p className='alert'>{alert}</p>

            <button className='sign-up-btn' type="submit">Sign Up</button>
            <Link to="/"><button>Back to Home</button></Link>
        </form>
        </div>
    )
}

export default Register
