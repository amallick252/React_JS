import React, { useContext } from 'react'
import UserContext from '../contexts/UserContext'

function Profile() {
    const{user}=useContext(UserContext)
   
    if(!user) {
        return  <div>Please Login!</div>
    } else if(!user.username){
        return  <div>Please provide a valid username!</div>
    } else {
        return  <div>Welcome {user.username}!</div>
    }
}

export default Profile