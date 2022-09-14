import { 
    BrowserRouter as Router,
 } from "react-router-dom";
import Navbar from "../components/Navbar";
import Routes from "./Routes";
import '../index.css'
import Loader from "../helpers/Loader";
import { useEffect, useState } from "react";
import BottomNavbar from "../components/BottomNavbar";
 const AppRouter = () =>{
   const [isLoaded,setIsLoaded]=useState(false)

   useEffect(()=>{
      setTimeout(()=>{
         setIsLoaded(true)
      },3000)
   },[])
    return (
        <Router>
         {isLoaded?null:<Loader/>}
         {isLoaded?<Navbar/>:null}
         {isLoaded?<BottomNavbar/>:null}
         {isLoaded? <Routes/>:null}
        </Router>
    )
 }

 export default AppRouter