import { Route, Routes } from "react-router-dom";
import { AboutUs } from "../pages/AboutUs";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

export function AppRoutes(){
    return(
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<AboutUs/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    )
}