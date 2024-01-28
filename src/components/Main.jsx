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
                bg='#0A073B'>
                <Nav />
                <Box
                    position="relative"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    textAlign="center">
                    <Text fontSize="2xl" color="black">
                        Kevin Pasquarella
                    </Text>
                </Box>
                <Box
                    position="relative"
                    top="5rem"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    textAlign="center">
                        <Text fontSize='lg' color='black'>
                            Software Engineer and Enthusiast
                        </Text>
                    </Box>
            </Box>
        </>
    )
}

export default Main;