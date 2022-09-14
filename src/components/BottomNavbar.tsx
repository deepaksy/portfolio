import { Box,BottomNavigation,BottomNavigationAction } from "@mui/material"
import { useState } from "react"
import { bottomNavbarLinks } from "../data/BottomNavbarLinks";
import { useNavigate } from "react-router-dom";
const BottomNavbar = () => {
    const [value,setValue]=useState(0)
    const navigate=useNavigate()
  return (
    <Box sx={{display:['initial','none'],position:'fixed',zIndex:1,left:0,right:0,bottom:0}}>
        <BottomNavigation
        showLabels
        value={value}
        onChange={(event,newValue)=>{
            setValue(newValue)
        }}
        sx={{backdropFilter:'blur(20px)',background:'transparent'}}
        >
            {bottomNavbarLinks.map(({name,link,icon},i)=>{
              return(
            <BottomNavigationAction key={i} onClick={()=>navigate(link)} label={name} icon={icon}/>
              )
            })}
        </BottomNavigation>
    </Box>
  )
}

export default BottomNavbar