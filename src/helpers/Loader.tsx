import { Box, Heading } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { useEffect } from "react"
import { useRandomColor } from "./useRandomColor"

const animationVariants = {
  animate:{
    scale: [1, 2, 2, 1, 1],
    rotate: [0, 0, 270, 270, 0],
    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    transition:{
      duration: .5,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
      repeat: Infinity,
      repeatDelay: 1
    }
  }
}
const Loader = () => {
  useEffect(()=>{
    setInterval(()=>{
      getColor(Math.random()*100,Math.random()*10)
    },750)
  })
  const {color,getColor}=useRandomColor()
  return (
    <Box as='div' sx={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        left:0,right:0,bottom:0,top:0,
        minHeight:'100vh',
        zIndex:1,
        textAlign:'center',
        backdropFilter:'blur(30px)'
    }}>
      <Box as={motion.div}
      sx={{
        width:['80px','200px'],
        height:['80px','200px'],
        background:`${color}`,
      }}
    variants={animationVariants}

    animate='animate'
  />
        <Box as={Heading} sx={{
        textAlign:'center'
    }}>

        Loading....
        </Box>
    </Box>
  )
}

export default Loader