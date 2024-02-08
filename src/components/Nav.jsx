import {
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Icon,
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
        <Tabs spacing={2} position='relative' top='1rem' left='1rem'>
          <TabList bg='#fb9062'>
            <Tab>
                <HiLibrary />
                <Text color='black' size='md' position='relative'>Main</Text>
            </Tab>
            <Tab>
              <HiBriefcase />
              <Text color='black' size='md' position='relative'>Projects</Text>
            </Tab>
            <Tab>
              <HiIdentification />
              <Text color='black' size='md' position='relative'>About</Text>
            </Tab>
            <Tab>
              <FaGithub />
              <Text color='black' size='md' position='relative'>GitHub</Text>
            </Tab>
          </TabList>
        </Tabs>
    )
  }

  export default Nav;