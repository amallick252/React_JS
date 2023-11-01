import React, {useState, useEffect } from "react"

function Github2() {
    const [data, setData] = useState({})

    useEffect(()=>{
        fetch('https://api.github.com/users/amallick252')
        .then(res=> res.json())
        .then(res=> setData(res))
        // return data (data )
    }, [])

  
    return (
    <div className="py-3 text-3xl text-white bg-gray-700">
        Github2 Followers {data.followers}
        <img className = 'p-4' src={data.avatar_url} alt="github_user" />  
        <h3>These data load, after clicking Github2 </h3>    
    </div>
  )
}

export default Github2