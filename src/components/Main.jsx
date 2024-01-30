import {
    Box,
    Text,
} from '@chakra-ui/react';
import Nav from './Nav';


const Main = (props) => {
    return (
        <>
            <Box 
                w='100%' 
                h='100%' 
                bg='#0A073B'
                fontFamily="poppins"
                color="#ac95e6">
                <Nav />
                <Box
                    position="relative"
                    top="1rem"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    textAlign="center">
                    <Text 
                        fontSize="xl" 
                        color="#d1c6ed"
                        top='1rem'
                        position='relative'>
                        I Am
                    </Text>
                    <Text 
                        fontSize="6xl" 
                        color="#ac95e6">
                        Kevin Pasquarella,
                    </Text>
                </Box>
                <Box
                    position="relative"
                    top="2rem"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    textAlign="center">
                        <Text fontSize='2xl'>
                            Software Engineer
                        </Text>
                    </Box>
            </Box>
        </>
    )
}

export default Main;