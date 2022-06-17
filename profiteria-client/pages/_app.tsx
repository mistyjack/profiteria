import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Head } from "@components/common";
import { FC } from "react";

interface NoopProps {
  children?: any;
}

const Noop: FC<NoopProps> = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop;
  return (
    <>
      <Head />
      <Layout pageProps={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
