import { FactIcon } from "@components/icons";
import { Container } from "@components/ui";
import styles from "./Home.module.css";
import Bounce from "react-reveal/Bounce";

const facts = [
  {
    text: "Best return on investment you can get from trading.",
  },
  {
    text: "Tap from the expertise of the most experienced traders in the market ",
  },
  {
    text: "Get a functioning wallet for personal trading and transactions",
  },
  {
    text: "Lightning quick withdrawal for your return on investment.",
  },
  {
    text: "Affordable investment plans for all class of customers.",
  },
];

const howTos = [
  {
    num: 1,
    text: "Sign up and buy an investment plan.",
  },
  {
    num: 2,
    text: "Click on the hire a trader button in your dashboard and fill in the form.",
  },
  {
    num: 3,
    text: "Submit the form and wait for 48 hours. You'll be contacted by your designated trader.",
  },
];

const HireTrader = () => {
  return (
    <Container className="flex py-12">
      <div className="w-full md:w-7/12">
        <div className={`p-8 ${styles.plans}`}>
          <h3 className="text-orange-red">Hire A trader </h3>
          <p className=" my-4 font-semibold">
            How to recruit the services of a trading expert on profiteria
          </p>
          {howTos.map((howTo, index) => {
            return (
              <Bounce key={`howTo-${index}`}>
                <div className="flex items-center mb-12">
                  <div
                    style={{ minWidth: 32 }}
                    className="rounded-full border-2 w-8 h-8 mr-4 border-orange-red text-center "
                  >
                    {howTo.num}
                  </div>

                  <p className="max-w-md">{howTo.text} </p>
                </div>
              </Bounce>
            );
          })}
        </div>
      </div>
      <div className="w-full md:w-5/12 pl-8 hidden md:block">
        <div className="bg-orange-red max-w-sm text-white p-8 mb-8">
          <h3 className="mb-8">Facts about Profiteria</h3>
          <div>
            {facts.map((fact, index) => {
              return (
                <div key={`fact-${index}`} className="flex mb-6">
                  <span className="h-12 w-12 text-white mr-4">
                    <FactIcon />
                  </span>
                  <p className="w-80">{fact.text} </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HireTrader;
