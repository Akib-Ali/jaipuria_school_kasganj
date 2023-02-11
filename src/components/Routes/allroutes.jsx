import { Route, Routes } from 'react-router-dom'
import { AboutUs } from '../aboutUs'
import { HomeMain } from '../home-modal/home_main'


export const AllRoutes=()=>{


    return(
        
        <>
       <Routes>
        <Route path='/' element={<HomeMain/>} /> 
        <Route path="/about-us" element={<AboutUs/>}/>
       </Routes>
        </>
    )



}