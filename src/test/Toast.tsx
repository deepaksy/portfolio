import { useToast } from "@chakra-ui/react"
import { useEffect } from "react"

const Toast = () => {
    const toast = useToast();
    useEffect(()=>{
        toast({
            title:'Account created.',
            description:`we've created your account for you.`,
            status:'success',
            duration:9000,
            isClosable:true,
            position:'bottom-left',
            variant:'subtle'
        })
    },[toast])
  return <></>
}

export default Toast