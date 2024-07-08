import { useState } from 'react';
import './App.css'

function App() {

  let [counter,setCounter]=useState(0)//Hooks//here 0 is defaults// 

  // let counter=15

  function addval() {
    console.log("clicked add value"+ "->"+  counter);
    // counter++;
    setCounter(counter+1)
  }
  function removeval() {
    console.log("clicked remove value"+ "->"+  counter);
    // counter--;
    if (counter===0) {
      console.log("Reached at 0");
      return ;
     }
    setCounter(counter-1)
   
  }


  return (
    <>
    <h1>Counter {counter}</h1>
    <button onClick={addval}>add value</button>
    <br />
    <button onClick={removeval}>remove value</button>
    </>
  )
}

export default App
