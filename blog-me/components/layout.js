import Sidebar from '../components/sidebar'
import About from './AboutBox'
import PageWithJSbasedForm from '../pages/js-form-copy'
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
          <PageWithJSbasedForm />
        </Box>
        <Spacer />
    </Flex>
    
    </>
  )
}