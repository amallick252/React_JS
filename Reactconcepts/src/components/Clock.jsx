import React, {useState, useEffect} from 'react'

function Clock() {
const[time,setTime]= useState(new Date().toString())
const[flag,setFlag] = useState('India')

    useEffect(()=>{
        console.log('Component is mounted')
        const interval = setInterval(showDate, 1000)

        return()=>{
            console.log("cleanup of interval")
            clearInterval(setInterval)
        }
}, [time])

  function showDate( ){
    // console.log(new Date().toString())
    setTime(new Date().toString())
  }

  return <div>{time}</div>
}

export default Clock