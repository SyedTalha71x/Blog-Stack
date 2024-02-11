import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import "@/styles/globals.css";
import React, { useState } from "react";
import { SessionProvider } from 'next-auth/react'


export default function App({ Component, pageProps }) {

  const [mode, setmode] = useState('light')

  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'black';
      // document.body.style.transition = ".4s ease-in-out";
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';

      // document.body.style.transition = ".4s ease-in-out";
    }
  }
  return <>
    <SessionProvider session={pageProps.session}>
      <Navbar mode={mode} togglemode={togglemode} />
      <Component mode={mode} {...pageProps} />
      <Footer mode={mode} />
    </SessionProvider>
  </>;
}
