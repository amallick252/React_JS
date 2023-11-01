// import React,{useState} from 'react'

// function LoginControl() {
//     const[isLoggedIn,setIsLoggedIn]= useState(false)

//   const handleLoginClick = ()=>{
//     setIsLoggedIn(true)
//   }
//   const handleLogoutClick = ()=>{
//     setIsLoggedIn(false)
//   }

//   let button;
//   if(isLoggedIn){
//     button =<LogoutButton onClick = {handleLogoutClick}/>
//   } else{
//     button =<LoginButton onClick = {handleLoginClick}/>
//   }
  
  
//     return (
//     <div>{button}</div>
//   )
// }

// function LoginButton(props) {
//     return(
//         <button onClick={props.onClick}>Login</button>
//     )
// }
// function LogoutButton(props) {
//     return(
//         <button onClick={props.onClick}>Logout</button>
//     )
// }

// export default LoginControl

import React,{useState} from "react";

function LoginControl(){
    const[isLoggedin, setIsLoggedin] = useState(false)

    const handleLogIn = ()=>{
        setIsLoggedin(true)
    }

    const handleLogOut = ()=>{
        setIsLoggedin(false)
    }
    
    let button;
    if(isLoggedin){ 
        button =  <Login onClick= {handleLogOut}/>
    }else{
        button = <LogOut onClick = {handleLogIn}/>
    }
    

    return(
        <div>{button}</div>
    )

}

function Login(props){
    return(
        <button onClick={props.onClick}>LogIn</button>
    )
}
function LogOut(props){
    return(
        <button onClick={props.onClick}>LogOut</button>
    )
}

export default LoginControl