import { Box } from '@chakra-ui/react'
import { Button, 
  // CssBaseline, 
  TextField } from '@mui/material'
import{ FormEvent, useState } from 'react'
import axios from 'axios'
import RadioGroupRating from '../components/StyledRating'

export type FeedbackFormData={
  name:string,
  email:string,
  message:string
}

const Feedback = () => {
  const [formData,setFormData]=useState({name:'',email:'',message:''});
  const [formStatus,setFormStatus]=useState(false)
  const {name,email,message}=formData;
  const handleSubmit = (e:FormEvent)=>{
    e.preventDefault()
    axios.post('https://formspree.io/f/xjvzwblr',formData)
    .then(res=>{
      console.log(res)
      res.status===200?setFormStatus(true):setFormStatus(false)
    })
    .catch(e=>console.log(e))
    console.log(formData)
  }

  const handleChange = (e:any) =>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  return (
    <Box as="div" sx={{
      display:'flex',
      flexDirection:'column',
      minHeight:'100vh',
      position:'relative',
      _before:{
        content:'" "',
        height:'24px',
        flexGrow:1,
        display:'block'
      },
      _after:{
        content:'" "',
        height:'24px',
        flexGrow:1,
        display:'block'
      }
    }}>
      {!formStatus?
        <Box as={'form'} sx={{
          display:'flex',
          flexDirection:'column',
          justifyContent:'space-between',
          width:['98%','80%'],
          margin:'auto',
          flexGrow:1,
          borderStyle:'solid',
          borderWidth:'thin',
          borderColor:'inherit',
          borderRadius:10,
          padding:[5,12],
        }} 
        onSubmit={(e:FormEvent)=>handleSubmit(e)}>
          <TextField id='name' name="name" type="text" value={name} onChange={(e)=>handleChange(e)} aria-label='name' placeholder='' label='name' variant='standard'/>
          <TextField id='email' name="email" type='email' value={email} onChange={(e)=>handleChange(e)} aria-label='email' label='email' placeholder='ex: abc@gmail.com' variant='standard'/>
          <TextField sx={{minHeight:'20px'}} id='message' name="message" type="text" value={message} onChange={(e)=>handleChange(e)} aria-label='message' label='message' variant='standard'/>
          <Button type="submit">Submit</Button>
        </Box>
      :<h1>Thanks for the Feedback!</h1>}
      <RadioGroupRating/>
    </Box>
  )
}

export default Feedback