import { useState } from 'react';

function Counter() {

  let [counter,setCounter]=useState(0)//Hooks//here 0 is defaults// 

  // let counter=15

  function addval() {
    console.log("clicked add value"+ "->"+  counter);
    setCounter(counter+1) //if i write these three then it show as prev pehle 0 to tha ab 1 then 2 no jump to 3 because react consider it as a bunch and it is same so
    setCounter(counter+1)
    setCounter(counter+1)// but if i write here ⁡⁢⁣⁢counter+2⁡ then it shows 0,2,4 because when it bunch it see as only two//jayada wala if thno me 1 2 3 then 3 wala
    //-------------- but if

    // setCounter((prevCounter)=>prevCounter+1)
    // setCounter((prevCounter)=>prevCounter+1)
    // setCounter((prevCounter)=>prevCounter+1) //now not act as bundle it 0,3,6



  }


  return (
    <>
    <h1>Counter {counter}</h1>
    <button onClick={addval}>add value</button>
    </>
  )
}

export default Counter
