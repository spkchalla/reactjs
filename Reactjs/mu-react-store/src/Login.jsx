import React from "react";
import { Link ,useNavigate} from "react-router-dom";
import { useState, useContext } from "react";
import { AppContext } from "./App";
export default function Login() {

  const Navigate = useNavigate();

  const {users} = useContext(AppContext);
  const [user, setUser] = useState({});
  const [error, setError] = useState("");


  const checkUser = ()=>{

    const found = users.find((elem) => elem.email ===user.email && elem.pass === user.pass);
    if(!found){
      setError("Access Denied");
    }else{
      Navigate("/");
    }

}

  return (
    <div>
      <h2>Login Form</h2>
      {error}
      <p><input type="text"
      placeholder="Enter name"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      /></p>
      <p><input type="password"
      placeholder="Enter password"
      onChange={(e) => setUser({ ...user, pass: e.target.value })}
      /></p>
      <p><button onClick={checkUser}>Login</button></p>
      <hr />
      <p>
        <Link to="/register">Create Account</Link>
      </p>
    </div>
  );
}