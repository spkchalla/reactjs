import React from "react";
import { Link , useNavigate} from "react-router-dom";
import { useState, useContext } from "react";
import { AppContext } from "./App";
export default function Register() {

  const {users, setUsers} = useContext(AppContext)
  

  const [count, setCount] = useState(0);
  const [new_count, setNew_Count]= useState(0);
  const [user, setUser] = useState({});
  const Navigate = useNavigate();

  const handleClick = () => {
    alert("Hello World");
  };
  const updateCount = () => {
    setCount(count + 1);
  };
  const play1 = ()=>{
    setNew_Count(new_count+1);
  };
  const play2 = ()=>{
    setNew_Count(new_count-1);
  };
  const handleSubmit = ()=>{
    // console.log(user);
    setUsers([...users, user]);
    Navigate("/login");
    console.log(users);
  }
  
  return (
    <div>
      <h2>Register</h2>
      <p>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
      </p>
      <p>
        <input
          type="text"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Enter Email Address"
        />
      </p>
      <p>
        <input
          type="password"
          onChange={(e) => setUser({ ...user, pass: e.target.value })}
          placeholder="New Password"
        />
      </p>
      <p>
        <button onClick={handleSubmit}>Submit</button>
      </p>
      <hr />
      <p>
        <Link to="/login">Aready a member? Login Here...</Link>
      </p>
      <hr />
      <button onClick={handleClick}>Click</button>
      <hr />
      <p>
        {count}<br></br>
        <button onClick={updateCount}>Update Count</button>
      </p>
{/* I am doing from here */}
     <p>
        {new_count}<br></br>
        <button onClick={play1}>+ Count</button>
        <button onClick={play2}>- Count</button>
    </p>
    
    </div>
  );
}