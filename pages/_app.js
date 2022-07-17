import '../styles/globals.css'
import { useEffect } from 'react';
import { keepTheme } from './helpers/helpers';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    keepTheme();
})
  return <Component {...pageProps} />
}

export default MyApp
