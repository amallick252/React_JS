import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import authService from '../appwrite/auth'
import { login } from '../store/authSlice'
import { useDispatch } from 'react-redux'
import {Input, Button, Logo} from './index'
import {useForm} from 'react-hook-form'


const Signup = () => {
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {resister, handleSubmit} = useForm()

    const create = async(data)=>{
        setError("")
        try {
            const userData = await authService.createAccount(data)// data entered by the user
            if(userData) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(login(userData))// if we get userdata dispatch the userData to login reducer
                navigate("/")
            }
            
        } catch (error) {
            setError(error.message)
        }
    }
  return (
    <div>Signup</div>
  )
}

export default Signup