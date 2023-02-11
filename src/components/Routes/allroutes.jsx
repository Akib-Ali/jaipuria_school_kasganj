import { Route, Routes } from 'react-router-dom'
import { AboutUs } from '../aboutUs'
import { Home } from '../home'

export const AllRoutes=()=>{


    return(
        
        <>
       <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path="/about-us" element={<AboutUs/>}/>
       </Routes>
        </>
    )



}