import React, { useState } from 'react'
import "./Register.css"

const Register = () => {
    const [user,setUser] = useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword:""
    })

    const handleChange = (e)=>{
        const {name,value} = e.target
        
        setUser({
            ...user,
            [name]:value
        })
    }
  return (
    <div className='register'>
    <h1>Register</h1>
    <input type='text' name='name' value={user.name} placeholder='Your Name' onChange={handleChange}></input>
    <input type='text' name='email' value={user.email} placeholder='Your Email' onChange={handleChange}></input>
    <input type='password' name='password' value={user.password} placeholder='Enter your Password' onChange={handleChange}></input>
    <input type='password' name='reEnterPassword' value={user.reEnterPassword} placeholder='Re-enter your Password' onChange={handleChange}></input>
    <div className='button'>Register</div>
    <div>OR</div>
    <div className='button'>Login</div>
  </div>
  )
}

export default Register
