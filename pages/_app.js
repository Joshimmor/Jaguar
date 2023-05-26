import '../styles/globals.css'
import Layout from '../components/layout'
function MyApp({ Component, pageProps }) {
  return (
    // <Layout>    </Layout>
      <Component {...pageProps} />

  )
}

export default MyApp
