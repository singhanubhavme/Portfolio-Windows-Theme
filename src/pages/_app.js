import '@/styles/globals.css';
import { OpenAppProvider } from '@/context/openApp';
import { TerminalContextProvider } from 'react-terminal';

export default function App({ Component, pageProps }) {
  return (
    <TerminalContextProvider>
      <OpenAppProvider>
        <Component {...pageProps} />
      </OpenAppProvider>
    </TerminalContextProvider>
  );
}
