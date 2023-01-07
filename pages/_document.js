import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* use flowbite */}
        <script
          async
          src="https://cdn.flowbite.com/flowbite.js"
          data-site-id="5f9f9b0b0e2b4a0017e1b0d9"
        ></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Irish+Grover&family=Lato:ital,wght@0,100;0,400;0,700;0,900;1,100&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400&family=Lato:ital,wght@0,100;0,400;0,700;0,900;1,100&display=swap"
          rel="stylesheet"
        />
        {/* import local fonts from the fonts directory */}
        {/* <link rel="preload" href="/fonts/fonts.ttf" as="font" crossOrigin="anonymous" /> */}
      </Head>
      <body>
        <Main /> 
        <NextScript />
      </body>
    </Html>
  );
}
