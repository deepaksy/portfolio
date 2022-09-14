import { Box, useColorMode } from "@chakra-ui/react"
import SunIcon from '../images/sunLight.svg'
import MoonIcon from '../images/moon.svg'
import { motion } from "framer-motion"
import { useThemeDispatch,useThemeSelector } from "../redux/ThemeHook"
import { toggleTheme,settheme } from "../redux/ThemeSlice"
import { useEffect } from "react"
const iconMotionVariants={
  animate:{
    rotate:360,
    transition:{
      duration:3,
      repeat:Infinity,
      ease:'linear'

    }
  }
}
const Theme = () => {
    const dispatch=useThemeDispatch()
    const {colorMode,toggleColorMode}=useColorMode()
    useEffect(()=>{
      dispatch(settheme(colorMode))
    },[colorMode,dispatch])

  return (
   
      <Box as={motion.div} onClick={toggleColorMode} variants={iconMotionVariants} animate="animate" backgroundImage={colorMode==='light'?MoonIcon:SunIcon} sx={{backgroundSize:'cover',backgroundRepeat:'no-repeat',minWidth:'10px',cursor:'pointer'}} color={'pink'}>&nbsp;&nbsp;&nbsp;</Box>

  )
}

export default Theme