import Layout from '@/components/Layout'
import { GlobalStyle } from '@/styles/global'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }) {
  return <>
  <GlobalStyle/>
  <Layout>
    <Component {...pageProps} />
  </Layout>
  </>
}

