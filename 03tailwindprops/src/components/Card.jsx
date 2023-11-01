import React from "react";

function Card({username = 'dummy user', btnText = 'btn'}) {
    // console.log('props', props)
    // console.log(props.username)
    return (
        <div className="relative h-[400px] w-[300px] rounded-md">
            <img
                src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                alt="AirMax Pro"
                className="z-0 h-full w-full rounded-md object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg font-semibold text-white">{username}</h1>
                <p className="mt-2 text-sm text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                    debitis?
                </p>
                <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black">
                    {btnText} →
                </button>
            </div>
        </div>

    )
}

export default Card

// You can pass the prop as (prop) in the function without {}, here you have to use 
// {props.username}, {props.btnText} directly in the jsx.

// However, if you are passing {username,btnText} in the function that means you are 
// already destructuring it and you can use {username}, {btnText} directly in the jsx

//Also ou can pass unused props to the child component in both the above methods
