import React from 'react'
import { AppContext } from './App'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';


export default function logout() {
    const {email, setEmail} = useContext(AppContext);
    const Navigate = useNavigate();
    setEmail(null);
    Navigate("/");

  return (
    <div>logout</div>
  )
}
