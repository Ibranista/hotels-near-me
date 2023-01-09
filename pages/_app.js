import "../styles/globals.css";
// importing components
import NavBar from "../components/NavBar";
import { Calistoga } from "@next/font/google";

export default function App({ Component, pageProps }) {
  return (
    <div className="min-w-[270px]">
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
}
