import '../styles/globals.css'
import Layout from '../components/layout'
import { createContext } from "react";
import { getStrapiMedia } from "../lib/media";
import { fetchAPI } from "../lib/api";
import { ChakraProvider } from '@chakra-ui/react'
import { createGlobalStyle, ThemeProvider } from "styled-components";
import passport from 'passport-spotify'

// Store Strapi Global object in context
export const GlobalContext = createContext({});

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
