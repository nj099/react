import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Counter from './components/interviewCounter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Counter/>
  </>
)
