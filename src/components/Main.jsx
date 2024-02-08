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
                fontFamily="poppins"
                border='30px solid'
                borderRadius='1px'
                bg='#FFFFFF'
                borderColor="#6a0d83">
                <Nav />
                <Box
                    position="relative"
                    top="6rem"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    textAlign="center">
                    <Text 
                        fontSize="xl" 
                        color="#0A073B"
                        top='1rem'
                        position='relative'>
                        I Am
                    </Text>
                    <Text 
                        fontSize="6xl"
                        top='1rem'
                        position='relative'
                        color="#0A073B">
                        Kevin Pasquarella,
                    </Text>
                    <Text 
                        fontSize='2xl'
                        top='1rem'
                        color='#0A073B'
                        position='relative'>
                        Software Engineer
                    </Text>
                </Box>
            </Box>
        </>
    )
}

export default Main;