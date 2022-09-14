
import { Box, Typography } from '@mui/material';
import {Box as ChakraBox} from '@chakra-ui/react'
import namasteImg from '../images/logo.png'
import { motion } from 'framer-motion';


const animationVariants={
  initial:{
    opacity:0,
  },
  animate:{
    opacity:1,
    transition:{
      delay:1,
      duration:0.8
    }
  }
}
const AboutCard = () => {

  return (
    <>
    <ChakraBox as={motion.div}  variants={animationVariants} initial="initial" animate="animate">
    <Box sx={{display:['none','flex'],flexDirection:['column-reverse','row'],justifyContent:'center',alignItems:'center'}} >
        <>
        <div>
          <Typography sx={{wordBreak:'break-word',textAlign:'center'}} variant='h2' component='h2'>
            Hi, I'm Deepak
          </Typography>
          <Typography variant='h6' component='div'>
            A computer science and engineering graduate.
          </Typography>
        </div>
        </>
        <img src='./logo.png' alt='namaste' aria-label='namaste' style={{height:300}}/>  
      </Box>
      <Box sx={{borderStyle:'solid',borderWidth:'thin',borderColor:'inherit',display:['flex','none'],flexDirection:['column-reverse','row'],justifyContent:'center',alignItems:'center',padding:0}} >
        <>
        <div>
          <Typography sx={{wordBreak:'break-word',textAlign:'center',fontWeight:'bolder'}} variant='h4' component='div'>
            Hi,<br/> I'm Deepak 
          </Typography>
          <Typography  component='p'>
            A computer science and engineering graduate.
          </Typography>
        </div>
        </>
        <img src={namasteImg} alt='namaste' aria-label='namaste' style={{height:300}}/>  
      </Box>
    </ChakraBox>
    </>
  )
}

export default AboutCard