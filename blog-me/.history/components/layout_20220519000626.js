import Sidebar from '../components/sidebar'
import About from './AboutBox'
import PageWithJSbasedForm from '../pages/js-form'
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
          <About />
          <PageWithJSbasedForm />
        </Box>
        <Spacer />
    </Flex>
    
    </>
  )
}