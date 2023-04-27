import { Logo } from '@/assets'
import {
  Avatar,
  Box,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { ExternalLinkIcon, AddIcon } from '@chakra-ui/icons'
import { useAuth } from '@/helpers/authContext'
import { firstLetter, nameInEmail } from '@/helpers/nameAndEmail'
import { Link } from 'react-router-dom'
import { HOME } from '@/helpers'

const Header = () => {
  const { toggleColorMode } = useColorMode()
  const { logout, user } = useAuth()

  const name = nameInEmail(user.user.email)
  const firstLetterCapitalCase = firstLetter(name)
  const textByColorMode = useColorModeValue('black', 'white')
  const bg = useColorModeValue('green.300', 'teal.300')

  return (
    <Stack
      bg={['red', 'green', 'gray', 'violet']}
      as='header'
      justifyContent='space-between'
      alignItems='center'
      w='100%'
      maxW='960px'
      m='0 auto'
      p='1em 2em'
      minH='80px'
      h='auto'
      flexDir={{ base: 'column', sm480: 'row' }}
    >
      <Box
        justifyContent='center'
        sx={{
          svg: {
            width: '200px',
            height: 'auto',
          },
          path: {
            fill: textByColorMode,
          },
          line: {
            stroke: textByColorMode,
          },
        }}
      >
        <Box display='inline-block'>
          <Link to={HOME}>
            <Logo />
          </Link>
        </Box>
      </Box>
      <Menu>
        <MenuButton
          _hover={{
            boxShadow: 'btn-primary-shadow',
          }}
        >
          <HStack>
            <Avatar
              display={{ base: 'none', md: 'block' }}
              name={firstLetterCapitalCase}
              color={textByColorMode}
              bg={bg}
            />
            <Text>Olá {name}</Text>
          </HStack>
        </MenuButton>
        <MenuList>
          <MenuItem
            icon={<AddIcon />}
            command='⌘T'
            onClick={() => toggleColorMode()}
          >
            toggle CorlorMode
          </MenuItem>
          <MenuItem icon={<ExternalLinkIcon />} command='⌘N' onClick={logout}>
            Logout
          </MenuItem>
        </MenuList>
      </Menu>
    </Stack>
  )
}

export default Header
