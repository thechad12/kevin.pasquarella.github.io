import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
  } from '@chakra-ui/react'
import {HamburgerIcon} from '@chakra-ui/icons';

  const Nav = () => {

    return (
        <Menu>
          <MenuButton
              as={IconButton}
              aria-label='Options'
              icon={<HamburgerIcon color="#ac95e6"/>}
              variant='outline'
          />
          <MenuList>
              <MenuItem>
              Projects
              </MenuItem>
              <MenuItem>
              About
              </MenuItem>
              <MenuItem>
              GitHub
              </MenuItem>
          </MenuList>
        </Menu>
    )
  }

  export default Nav;