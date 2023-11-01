import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Clock from './components/Clock'
import LoginControl from './components/LoginControl'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const[flag,setFlag] = useState(false)

  const click= ()=>{
    console.log('Hey yo!')
    setFlag(!flag)
  }


  return (
    <>
      {/* {flag? <Clock/> :'No time to weste'}
      <button onClick={click}>Click me!</button> */}
      <LoginControl/>
    </>
  )
}

export default App

//if the flag is true then show clock otherwise show the text