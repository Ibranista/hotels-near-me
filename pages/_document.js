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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
