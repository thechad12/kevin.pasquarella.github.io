import {
    Box,
    Text,
    CSSReset
} from '@chakra-ui/react';
import Nav from './Nav';
import SnowyMountainScene from './SnowyMountainScene';


const Main = (props) => {
    return (
        <>
            <CSSReset />
            <Nav />
            <Box position='relative'>
                    <SnowyMountainScene />
                    <Box
                        position="absolute"
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -50%)"
                        textAlign="center">
                        <Text fontSize="2xl" color="black">
                            Kevin Pasquarella
                        </Text>
                    </Box>
                    <Box
                        position="absolute"
                        top="5rem"
                        left="50%"
                        transform="translate(-50%, -50%)"
                        textAlign="center">
                            <Text fontSize='lg' color='white'>
                                Software Engineer and Enthusiast
                            </Text>
                        </Box>
            </Box>
        </>
    )
}

export default Main;