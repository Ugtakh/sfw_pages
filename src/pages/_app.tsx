import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import Footer from "@/components/Footer/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ProgressBar
        height="4px"
        color="#007C48"
        options={{ showSpinner: false }}
        shallowRouting
      />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      {/* <FacebookMsg /> */}
      <div className="w-full relative">
        <ScrollToTop />
      </div>
    </>
  );
}
