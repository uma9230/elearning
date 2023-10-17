import 'bootstrap/dist/css/bootstrap.min.css'
import { StrictMode } from 'react';
import '../../public/css/style.css'

function MyApp({ Component, pageProps }) {
  return (
    <StrictMode>
        <Component {...pageProps} />
    </StrictMode>
  );
}

export default MyApp;