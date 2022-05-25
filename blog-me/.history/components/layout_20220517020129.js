import Sidebar from '../components/sidebar'
import { Flex, Spacer } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'

export default function Layout({ children }) {
  return (
    <>
    <Flex>
        <Spacer />
        <Sidebar />
        <Box>
          <main>{children}</main>
        </Box>
        <Spacer />
    </Flex>
    </>
  )
}