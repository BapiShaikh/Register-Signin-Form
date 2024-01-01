import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import Login from "../Login/Login";
import { useHistory } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';

const Register = () => {
  const history = useHistory();
//   const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };
  const onsubmit = () => {
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && reEnterPassword) {
      axios.post("http://localhost:2024/register", user).then((res) => {
        alert(res.data.massege)
        history.push("/login")
      });
    } else {
      alert("Invalid infomation");
    }
  };

  return (
    <div className="register">
      <h1>Register</h1>
      <input
        type="text"
        required
        name="name"
        value={user.name}
        placeholder="Your Name"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        required
        name="email"
        value={user.email}
        placeholder="Your Email"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        required
        name="password"
        value={user.password}
        placeholder="Enter your Password"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        required
        name="reEnterPassword"
        value={user.reEnterPassword}
        placeholder="Re-enter your Password"
        onChange={handleChange}
      ></input>
      <div className="button" onClick={onsubmit}>
        Register
      </div>
      <div>OR</div>
      <div
        className="button"
        onClick={() => {
            history.push("/login");
        }}
      >
        Login
      </div>
    </div>
  );
};

export default Register;
