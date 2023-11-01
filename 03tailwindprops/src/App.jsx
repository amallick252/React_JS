import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name: 'Abinash',
    age: 31
  }

  let newArr = [1,2,3]

  return (
    <>
    <h1 className='bg-purple-300 text-black p-4 
    rounded-2xl mb-4'>Talwind Test</h1>
    <Card username = 'Katrina' btnText = 'CheckOut' someObj = {myObj} someArr = {newArr}/>
    <Card username = 'Someone'/>
    
    </>
  )
}

export default App
