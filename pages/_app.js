import { ThemeProvider } from 'next-themes'
import '@/styles/globals.css'
import { Footer, Navbar } from '@/components'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <div className='dark:bg-nft-dark bg-white min-h-screen'>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
      <Script src="https://kit.fontawesome.com/aee02d284f.js" crossorigin="anonymous" />
    </ThemeProvider>

  )
}
