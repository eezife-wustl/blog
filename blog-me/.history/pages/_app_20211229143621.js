import '../styles/globals.css'
import Sidebar from '../components/sidebar'
import Layout from '../components/layout'


function MyApp({ Component, pageProps }) {
  return (
    <div> </div>
    <Layout >
    <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
