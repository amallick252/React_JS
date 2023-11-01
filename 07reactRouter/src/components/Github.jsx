import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()

  return (
    <div className='text-3xl text-white bg-gray-700 py-3'>Github Followers:{data.followers}
    <img className='p-6 w-200' src={data.avatar_url} alt="github_user" />
    <h3>These data load smoothly throgh useLoaderData hook, when mouse Hovers over Github before clicking</h3>
    </div>
  )
}

export default Github

export const loaderInfo = async() =>{
  const res =  await fetch('https://api.github.com/users/amallick252')
  return res.json()
}


