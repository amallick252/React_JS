// import React from 'react'
// import {useDispatch} from 'react-redux'
// import authService from '../../appwrite/auth'
// import {logout} from '../../store/authSlice'

// function LogoutBtn() {
//     const dispatch = useDispatch()
//     const logoutHandler = () => {
//         authService.logout().then(() => {
//             dispatch(logout())
//         })
//     }
//   return (
//     <button
//     className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
//     onClick={logoutHandler}
//     >Logout</button>
//   )
// }

// export default LogoutBtn

import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import Button from "../Button";
import { logout } from "../../store/authSlice";

function LogoutBtn(){
  const dispatch =useDispatch()
  const handleClick =()=>{
    authService.logout().then(()=>{
      dispatch(logout())
    })
  }

  return(
    <Button onClick= {handleClick} bgColor = "bg-gray" textColor = "text-black"  className=" hover:bg-red-400 focus:outline-none focus:ring focus:ring-violet-300">Logout</Button>
  )
}

export default LogoutBtn