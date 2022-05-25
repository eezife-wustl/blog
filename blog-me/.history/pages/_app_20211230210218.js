import '../styles/globals.css'
import Sidebar from '../components/sidebar'
import Layout from '../components/layout'
import { createContext } from "react";
import { getStrapiMedia } from "../lib/media";
import { fetchAPI } from "../lib/api";
import { ChakraProvider } from '@chakra-ui/react'
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-size: 62.5%;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

.container {
  display: flex;
  flex-direction: row-reverse;
}
`;

// Store Strapi Global object in context
export const GlobalContext = createContext({});


function MyApp({ Component, pageProps }) {
  return (
    <></>
    <GlobalStyle />
    <ChakraProvider>
    <div> 
      <Layout >
      <Component {...pageProps} />
      </Layout>
    </div>
    </ChakraProvider>
  )
}

export default MyApp
