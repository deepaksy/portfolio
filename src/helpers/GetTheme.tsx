import { useColorMode } from "@chakra-ui/react"

export const IsDark = () => {
    const {colorMode}=useColorMode();
  return colorMode==="dark"?true:false
}

export default IsDark