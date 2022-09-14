import { motion } from "framer-motion"
import {Box,Heading, Stack} from '@chakra-ui/react'
import siteinfo from '../data/siteinfo.json'
import "../styles/Navbar.css"
import { navbarLinks } from "../data/NavbarLinkData"
import { Link, useLocation} from "react-router-dom"
import Theme from "../helpers/Theme"
const navbarMotionConfig={
  initial:{
    y:-100,
  },
  animate:{
    y:0,
    transition:{
      delay:0.3,
      type:"Inertia",stiffness:1
    }
  }
}

const logoAnimationVariants={
  initial:{
    opacity:0,scale:0
  },
  animate:{
    opacity:[0,1,1,0,1,1,0,1,0,1,0,1,0,1],scale:1,
    transition:{
      staggerChildren:0.5,delay:2
    }
  }
}
const Navbar = () => {
  const {sitename}=siteinfo
  const location=useLocation()
  return (
    <Box  
    as={motion.div} 
    sx={{display:'flex',flexDirection:['column','row'],alignItems:'center',position:'sticky',left:0,right:0,top:0,padding:['8px 10px'],zIndex:1,backdropFilter:'blur(20px)'}}
    // className='navbarContainer'
    variants={navbarMotionConfig} initial='initial' animate='animate' 
    >
      <motion.div variants={logoAnimationVariants} initial='initial' animate='animate'><Link to={'/'}><Heading  size={['md','lg']}>{sitename}</Heading></Link></motion.div>
      <Stack as={'ul'} flexGrow={1} direction='row'  alignItems={'center'} sx={{display:['none','flex'],flexDirection:'row',alignItems:'center',listStyleType:'none'}}>
        {navbarLinks.map(({name,link},i)=>{
          return(
            <Box key={i} as='li'  sx={{margin:'0px 12px',padding:'0px 10px',color:location.pathname===link?'red':'initial '}}><Link key={i} to={link}>{name}</Link></Box>
          )
        })}
      </Stack>
      <Box as="span" sx={{display:['none','initial']}}><Theme/></Box>
    </Box>
  )
}

export default Navbar