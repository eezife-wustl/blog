import '../styles/globals.css'
import Layout from '../components/layout'
import { createContext } from "react";
import { getStrapiMedia } from "../lib/media";
import { fetchAPI } from "../lib/api";
import { ChakraProvider } from '@chakra-ui/react'
import { createGlobalStyle, ThemeProvider } from "styled-components";

// Store Strapi Global object in context
export const GlobalContext = createContext({});

export var client_id = "244344d193a6458884254bd22be214b5";
export var client_secret = "client_id";
export var redirect_url = "client_id";



function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout >
      <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
