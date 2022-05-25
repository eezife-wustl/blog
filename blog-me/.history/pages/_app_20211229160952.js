import '../styles/globals.css'
import Sidebar from '../components/sidebar'
import Layout from '../components/layout'
import { createContext } from "react";
import { getStrapiMedia } from "../lib/media";
import { fetchAPI } from "../lib/api";

export const GlobalContext = createContext({});


function MyApp({ Component, pageProps }) {
  return (
    <div className="container"> 
      <Layout >
      <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default MyApp
