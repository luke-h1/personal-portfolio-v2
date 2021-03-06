import { DefaultSeo } from 'next-seo';
import * as gtag from '@src/lib/gtag';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import '@src/styles/index.css';
import Nav from '@src/components/Nav';
import Container from '@src/components/Container';
import Footer from '@src/components/Footer';
// import '@fontsource/noto-sans-jp';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <DefaultSeo
        titleTemplate="%s | lhowsam.com"
        description="Luke Howsam - Software tester & developer"
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://lhowsam.com',
          description: 'Luke Howsam - Software tester & developer',
          site_name: 'Luke Howsam',
          images: [
            {
              url: 'https://lhowsam.com/icons/logo.png',
              alt: 'Site Logo',
            },
          ],
        }}
        twitter={{
          handle: '@LukeH_1999',
          site: '@LukeH_1999',
          cardType: 'summary_large_image',
        }}
      />
      <Nav />
      <Container>
        <Component {...pageProps} />
        <Footer />
      </Container>
    </>
  );
}

export default MyApp;
