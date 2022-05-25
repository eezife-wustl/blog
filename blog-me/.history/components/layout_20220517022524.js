import Sidebar from '../components/sidebar'
import { Flex, Spacer } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'

export default function Layout({ children }) {
  return (
    <>
            <Sidebar />
          <main>{children}</main>
    <Flex>
        <Spacer />
        <Box>

        </Box>
        <Spacer />
    </Flex>
    </>
  )
}