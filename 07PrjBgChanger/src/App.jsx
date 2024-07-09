import { useState } from 'react'

function App() {
  const [color,setColor]=useState("olive")

  return (

      <div className='w-full h-screen' style={{backgroundColor:color}}>
      <div className=' fixed flex flex-wrap justify-center bottob-12   '></div>
      </div>

  )
}

export default App