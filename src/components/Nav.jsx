import {
    HStack,
    Box,
    IconButton,
  } from '@chakra-ui/react'
import { 
  HiLibrary,
  HiBriefcase,
  HiIdentification,
} from 'react-icons/hi';
import { FaGithub } from "react-icons/fa";

  const Nav = () => {

    return (
        <HStack spacing={2}>
          <Box>
            <IconButton icon={<HiLibrary />}>Main</IconButton>
          </Box>
          <Box>
            <IconButton icon={<HiBriefcase />}>Projects</IconButton>
          </Box>
          <Box>
            <IconButton icon={<HiIdentification />}>About</IconButton>
          </Box>
          <Box>
            <IconButton icon={<FaGithub />}>GitHub</IconButton>
          </Box>
        </HStack>
    )
  }

  export default Nav;