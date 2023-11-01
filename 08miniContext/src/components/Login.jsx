import React, { useContext, useState } from 'react'
import UserContext from '../contexts/UserContext'

function Login() {
    const[username,SetUsername]= useState("")
    const[password,SetPassword]= useState("")

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username,password})
    }
  
    return (
    <div>
        <h1>Login</h1>
        <div>
            <input type="text" 
            placeholder='username' 
            value={username}
            onChange={(e)=> SetUsername(e.target.value)} />
        </div>
        <div>
            <input type="text" 
            placeholder='password' 
            value={password}
            onChange={(e)=> SetPassword(e.target.value)} />
        </div>
        <div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
        
    </div>
  )
}

export default Login