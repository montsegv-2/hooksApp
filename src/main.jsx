import React from 'react'
import ReactDOM from 'react-dom/client'
import { Message } from './02-useEffect/Message'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { HooksApp } from './HooksApp'
import { SimpleForm } from './02-useEffect/SimpleForm'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SimpleForm />
    <Message/>
  </React.StrictMode>,
)
