import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <meta name="theme-color" content="#fff" />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
          <link href="https://fonts.googleapis.com/css2?family=Rozha+One&display=swap&family=Biryani:wght@200;300;700&display=swap&family=Abhaya+Libre:wght@400;500;600;700;800&family=Della+Respira&family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Vast+Shadow&display=swap" rel="stylesheet"></link>
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}