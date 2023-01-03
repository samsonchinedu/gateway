import Layout from '../component/Layout.js'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    // <Layout>
    // </Layout>
      <Component {...pageProps} />
  )
}

export default MyApp
