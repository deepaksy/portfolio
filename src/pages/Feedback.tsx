import { Box } from '@chakra-ui/react'
import { Button, 
  // CssBaseline, 
  TextField } from '@mui/material'
import{ FormEvent, useState } from 'react'
import axios from 'axios'

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
    <Box as="div">
      {!formStatus?
        <Box as={'form'} sx={{
          display:'flex',
          flexDirection:'column',
          maxWidth:['80%'],
          margin:'auto'
        }} 
        onSubmit={(e:FormEvent)=>handleSubmit(e)}>
          <TextField id='name' name="name" type="text" value={name} onChange={(e)=>handleChange(e)} aria-label='name' placeholder='' label='name' variant='standard'/>
          <TextField id='email' name="email" type='email' value={email} onChange={(e)=>handleChange(e)} aria-label='email' label='email' placeholder='ex: abc@gmail.com' variant='standard'/>
          <TextField id='message' name="message" type="text" value={message} onChange={(e)=>handleChange(e)} aria-label='message' label='message' variant='standard'/>
          <Button type="submit">Submit</Button>
        </Box>
      :<h1>Thanks for the Feedback!</h1>}
    </Box>
  )
}

export default Feedback