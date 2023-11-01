import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='text-3xl text-white bg-gray-700 py-3'>User: {userid} </div>
  )
}

export default User