import React, {useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {login as authLogin} from '../store/authSlice'
import {Button, Input, Logo} from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import {useForm} from 'react-hook-form'

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit}= useForm()
    const [error,setError]= useState()
  
    const login = async (data)=>{
        setError("")
        try {
            const session = await authService.login(data)// send data to the login method of appwrite, we get a session as a responce
            if(session){// if season exist user is loggedin
                const userData = await authService.getCurrentUser()//getting userdata from getCurrentUser Method, not from session
                if(userData) dispatch(authLogin(userData))// dispatch to the store
                navigate("/")// navigate autometicaly redirects to the link, on link we have to click to navigate
            }
        } catch (error) {
            setError(error.message)
        }
    }
  
    return (
       <div className='flex items-center justify-center w-full'>
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <div className="mb-2 flex justify-center">
                <span className="inline-block w-full max-w-[100px]">
                    <Logo width="100%" />
                </span>
            </div>
            <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
            <p className="mt-2 text-center text-base text-black/60">
             Don&apos;t have any account?&nbsp;
                <Link
                    to="/signup"
                    className="font-medium text-primary transition-all duration-200 hover:underline"
                >
                    Sign Up
                </Link>
            </p>
            {error && <p className="text-red-600 mt-8 text-center">{error}</p>} {/* if error exists then <p></p> */}
            <form onSubmit={handleSubmit(login)} className='mt-8'>
                <div className='space-y-5'>
                    <Input label="Email: " placeholder='Enter your email' type='email'
                    {...register("email", {
                        required: true,
                        validate: {
                            matchPatern: (value)=> /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)||
                            "Email address must be a valid address"
                        }
                    })}
                    />
                    <Input label="Password: " placeholder='Enter your password' type='password'
                    {...register("password", {
                        required:true,
                        validate: {
                            matchPatern: (value)=>/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/.test(value)||
                            "password must contain at least eight characters, at least one number and both lower and uppercase letters and special characters"
                        } 
                    })}
                    />
                    <Button type="submit" className="w-full">Sign In</Button>
                </div>
            </form>
        </div>
       </div>
  )
}

export default Login

// {...register("email", {object of options goes here})}
// register needs to be spread, "email" is the key value of the field and should be unique eg: password etc.
// Validate: matchPatern can be used from regexr.com// code should go within /code/.test(v)

