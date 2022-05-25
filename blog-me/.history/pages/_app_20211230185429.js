import '../styles/globals.css'
import Sidebar from '../components/sidebar'
import Layout from '../components/layout'
import { createContext } from "react";
import { getStrapiMedia } from "../lib/media";
import { fetchAPI } from "../lib/api";
import { ChakraProvider } from '@chakra-ui/react'

// Store Strapi Global object in context
export const GlobalContext = createContext({});


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
    <div className="container"> 
      <Layout >
      <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
