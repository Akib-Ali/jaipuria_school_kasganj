import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/navbar'
import { AllRoutes } from './components/Routes/allroutes'

function App() {
  

  return (
    <div className="App">
   
     <Navbar/>
     <AllRoutes/>
    </div>
  )
}

export default App
