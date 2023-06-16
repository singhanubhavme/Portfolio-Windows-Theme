import '@/styles/globals.css';
import { OpenAppProvider } from '@/context/openApp';

export default function App({ Component, pageProps }) {
  return (
    <OpenAppProvider>
      <Component {...pageProps} />
    </OpenAppProvider>
  );
}
