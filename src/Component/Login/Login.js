import React,{useState} from 'react'
import "./Login.css"

const Login = () => {
    const [user,setUser] = useState({
        
        email:"",
        password:""
       
    })

    const handleChange = (e)=>{
        const {name,value} = e.target
        
        setUser({
            ...user,
            [name]:value
        })
    }
  return (
    <div className='login'>
      <h1>Login</h1>
      <input type='text' name='email' value={user.email} onChange={handleChange} placeholder='Enter your Email'></input>
      <input type='password' name='password' value={user.password} onChange={handleChange} placeholder='Enter your Email'></input>
      <div className='button'>Login</div>
      <div>OR</div>
      <div className='button'>Register</div>
    </div>
  )
}

export default Login
