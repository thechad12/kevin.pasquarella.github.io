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
            icon={<HamburgerIcon />}
            variant='outline'
        />
        <MenuList>
            <MenuItem command='⌘T'>
            Projects
            </MenuItem>
            <MenuItem command='⌘N'>
            About
            </MenuItem>
            <MenuItem command='⌘⇧N'>
            GitHub
            </MenuItem>
        </MenuList>
        </Menu>
    )
  }

  export default Nav;