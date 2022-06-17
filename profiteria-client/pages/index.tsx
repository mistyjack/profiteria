import { Layout } from "@components/common";
import {
  GetStartedInput,
  Hero,
  HireTrader,
  HowItWorks,
  LeadingBit,
  WhatYouGet,
} from "@components/home";

const Home = () => {
  return (
    <>
      <Hero />
      <WhatYouGet />
      <LeadingBit />
      <HireTrader />
      <HowItWorks />
      <GetStartedInput />
    </>
  );
};

Home.Layout = Layout;
export default Home;
