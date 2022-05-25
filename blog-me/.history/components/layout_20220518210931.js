import Sidebar from '../components/sidebar'
import sbutton from '../components/sbutton'
import { Flex, Spacer } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'

export default function Layout({ children }) {
  return (
    <>
    <Flex>
        <Spacer />
        <Box>
        <Sidebar />
          <main>{children}</main>
        </Box>
        <sbutton />
        <Spacer />
        <bad />
    </Flex>
    </>
  )
}