import { useState } from 'react'
import './App.css'

function App() {
  
  // let [counter, setCounter] = useState(15)
  // // let counter = 15
  // let addValue = () => {
  //   // console.log('Value Added', counter)
   
  //     counter = counter + 1
  //     setCounter(counter)
    
  // }
  // let removeValue = () => {
  //   setCounter(counter - 1)

  // }

  let [counter, setCounter] = useState(10)
  
  let addCounter = ()=>{
    if(counter<20){
      
      setCounter((prevcounter)=> prevcounter + 1)//prevcounter = last updated counter
      setCounter((prevcounter)=> prevcounter + 1)

    }
  }
  let removeCounter = ()=>{
    if(counter>0){
      setCounter(counter - 1)// this doesnot increpment by 3 nums, it runs & updates just the first setCounter
      setCounter(counter - 1)// its not about setCounter, its about useState: which sends all the updates in batches, 
      setCounter(counter - 1)// all this setCounter are upading same counter so it makes batch of all the same works and updates
    }
  }

    
  return (
    <>
    <h1>Click Counter</h1>
    <h2>current number is {counter}</h2>
    <button onClick= {addCounter}>Add Clicks</button>
    <button onClick= {removeCounter}>Remove clicks</button>
    <p>just num{counter}</p>
      {/* <h1>First Counter Project</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value{counter}</button>
      <br/>
      <button onClick = {removeValue}>Remove Value{counter}</button> */}
    </>
  )
}

export default App
