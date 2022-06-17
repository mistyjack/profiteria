import { FC } from "react";
import NextHead from "next/head";
import { DefaultSeo } from "next-seo";

const Head: FC = () => {
  return (
    <>
      <DefaultSeo
        title="Bitcoin Farming"
        titleTemplate="%s - Profiteria"
        description="Profiteria Commerce - https://www.profiteria.trade"
        openGraph={{
          title: "Bitcoin Farming",
          description: "Profiteria Commerce - https://www.profiteria.trade",
          type: "website",
          locale: "en_IE",
          url: "https://www.profiteria.trade",
          site_name: "Profiteria Commerce",
          images: [
            {
              url: "/logo.svg",
              width: 496,
              height: 426,
              alt: "Profiteria Commerce",
            },
          ],
        }}
        twitter={{
          handle: "@nextjs",
          site: "@nextjs",
          cardType: "summary_large_image",
        }}
      />
      <NextHead>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" key="site-manifest" />
      </NextHead>
    </>
  );
};

export default Head;
