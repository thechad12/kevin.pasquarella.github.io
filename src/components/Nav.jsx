import {
    HStack,
    Box,
    IconButton,
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
        <HStack spacing={2} position='relative' top='1rem' left='1rem'>
          <Box bg='#fb9062'>
            <IconButton bg='#fb9062' icon={<HiLibrary />} />
              <Text color='#ac95e6' size='md' position='relative'>Main</Text>
          </Box>
          <Box bg='#fb9062'>
            <IconButton bg='#fb9062' icon={<HiBriefcase />}/>
            <Text color='#ac95e6' size='md' position='relative'>Projects</Text>
          </Box>
          <Box bg='#fb9062'>
            <IconButton bg='#fb9062' icon={<HiIdentification />}/>
            <Text color='#ac95e6' size='md' position='relative'>About</Text>
          </Box>
          <Box bg='#fb9062'>
            <IconButton bg='#fb9062' icon={<FaGithub />}/>
            <Text color='#ac95e6' size='md' position='relative'>GitHub</Text>
          </Box>
        </HStack>
    )
  }

  export default Nav;