import '../styles/globals.css'
import Sidebar from '../components/sidebar'
import Layout from '../components/layout'


function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.mySidebar} > 
      <Layout >
      <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default MyApp
