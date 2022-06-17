import { Container } from "@components/ui";
import styles from "./Home.module.css";
import Image from "next/image";
import Fade from "react-reveal/Fade";

const advantages = [
  {
    image:
      "https://ik.imagekit.io/o79mipqfj/bit_investment_4cX6S3rVC.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653593318641",
    heading: "Bitcoin Investment",
    description:
      "With our impressive rates and easily accessible plans, profiteria makes investing in bitcoin easy. All you need to do is register and buy a plan to enjoy the moouthwatering  benefits.",
  },
  {
    image:
      "https://ik.imagekit.io/o79mipqfj/wallet_service.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653594997490",
    heading: "Wallet Services",
    description:
      "We also provide a fully functioning and easy to access crypto wallet to trade and move your assets around anyhow you see fit.",
  },
  {
    image:
      "https://ik.imagekit.io/o79mipqfj/expert_recruit.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653417748915",
    heading: "Expert Recruitment Services",
    description:
      "We at profiteria understands that farming with us may be slower than desired by customers, and we also get how trading independently might be complex for untrained enthusiasts, so we provide experts that customers can hire to perform high level trading specifically defined for you.",
  },
];

const WhatYouGet = () => {
  return (
    <Container>
      <div className="py-20">
        <h2
          className={`mx-auto mb-8 w-full text-center md:w-2/3 ${styles.whatYouGet_title}`}
        >
          What you get investing with&nbsp;
          <span className="text-orange-red">Profiteria</span>
        </h2>
        <div className="mx-auto flex flex-wrap">
          {advantages.map((advantage, index) => {
            return (
              <div
                key={`advantage-${index}`}
                className={`py-8 px-6 w-full md:w-1/3 text-center mx-auto mt-12 hover:scale-105 transition-transform ease-in-out duration-500  ${styles.adv_desc}`}
              >
                <div>
                  <Fade>
                    <div className="w-40 h-40 pt-8 mx-auto ">
                      <Image
                        src={advantage.image}
                        alt="bitcoin platform"
                        width={160}
                        height={160}
                        layout="responsive"
                      />
                    </div>
                    <h3 className={`mb-6 mt-12 ${styles.whatYouGet_subtitle}`}>
                      {advantage.heading}{" "}
                    </h3>
                    <p>{advantage.description} </p>
                  </Fade>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default WhatYouGet;
