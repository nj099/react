import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Card from './components/Card.jsx'
import './index.css'

let myobj={
    name:"nj",
    age:18
}

ReactDOM.createRoot(document.getElementById('root')).render(
<>
    <App />
    { <Card name="sam" myarr={[1,2,4]} obj={myobj}/> /* props  */}
</>
 
)
