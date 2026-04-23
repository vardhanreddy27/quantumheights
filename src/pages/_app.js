import "@/styles/globals.css";
import SeoHead from "@/components/SeoHead";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SeoHead />
      <Component {...pageProps} />
    </>
  );
}
