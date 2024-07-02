'use client';
import Head from 'next/head';
import './globals.css';
import { OpenAppProvider } from '@/context/openApp';
import { TerminalContextProvider } from 'react-terminal';

export default function RootLayout({ children }) {
  return (
    <TerminalContextProvider>
      <OpenAppProvider>
        <html lang="en">
          <Head>
            <title>Anubhav Singh</title>
            <meta
              name="description"
              content="Portfolio Website in Windows Theme"
            />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.svg" />
          </Head>
          <body>{children}</body>
        </html>
      </OpenAppProvider>
    </TerminalContextProvider>
  );
}
