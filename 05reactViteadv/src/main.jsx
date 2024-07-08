import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function MyApp() {
  return(
    <>
      <h2>indeed hey that's true</h2>
    </>
  )
}

// const anotherElement=(
//   <a href='https://google.com' target='_blank'>visit google</a>
// )

const reactElement=React.createElement('a',{href:"https:''google.com",target:"_blank"},"click me to visit google")


let username=nj;

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
    <h1>fine {username}</h1>
    <MyApp/>
  </>
)
