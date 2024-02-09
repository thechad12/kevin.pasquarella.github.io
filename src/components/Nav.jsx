import {
    HStack,
    Box,
    Text
  } from '@chakra-ui/react'
import { 
  HiLibrary,
  HiBriefcase,
  HiIdentification,
} from 'react-icons/hi';
import { FaGithub } from "react-icons/fa";

  const Nav = () => {

    return (
        <HStack  
          position='relative' 
          top='1rem' 
          borderBottom='2px solid'
          width='auto'
          justifyContent='center'>
            <Box position='relative' paddingRight='3rem' display='flex'>
                <HiLibrary />
                <Text 
                  color='black' 
                  size='lg' 
                  position='relative' 
                  paddingLeft='0.5rem'>Main</Text>
            </Box>
            <Box paddingRight='3rem' display='flex'>
              <HiBriefcase />
              <Text 
                color='black' 
                size='lg' 
                position='relative' 
                paddingLeft='0.5rem'>Projects</Text>
            </Box>
            <Box paddingRight='3rem' display='flex'>
              <HiIdentification />
              <Text 
                color='black' 
                size='lg' 
                position='relative' 
                paddingLeft='0.5rem'>About</Text>
            </Box>
            <Box paddingRight='3rem' display='flex'>
              <FaGithub />
              <Text 
                color='black' 
                size='lg' 
                position='relative' 
                paddingLeft='0.5rem'>GitHub</Text>
            </Box>
        </HStack>
    )
  }

  export default Nav;