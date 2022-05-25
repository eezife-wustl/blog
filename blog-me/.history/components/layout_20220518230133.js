import Sidebar from '../components/sidebar'
import Sbutton from '../components/sbutton'
import PageWithJSbasedForm from ''
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
        <Spacer />
    </Flex>
    <Sbutton />
    </>
  )
}