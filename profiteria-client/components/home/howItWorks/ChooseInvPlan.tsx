import { Container } from "@components/ui";
import Image from "next/image";
import styles from "../Home.module.css";
import Fade from "react-reveal/Fade";

const plans = [
  {
    plan: "https://ik.imagekit.io/o79mipqfj/Gold_ZKmcJC6Yg.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653414372298",
  },
  {
    plan: "https://ik.imagekit.io/o79mipqfj/Diamond_RCVcy-8BN.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654602996948",
  },
  {
    plan: "https://ik.imagekit.io/o79mipqfj/Graphite__1__I0mOMi9E6.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654602583060",
  },
];
const ChooseInvPlan = () => {
  return (
    <Container className="flex flex-wrap items-center md:flex-row flex-col-reverse justify-between py-12">
      <Fade bottom>
        <div className={`py-8 px-4 flex w-full md:w-7/12 ${styles.plans}`}>
          {plans.map((plan, index) => {
            return (
              <div key={`plan-${index}`} className="w-1/3 px-2">
                <Image
                  src={plan.plan}
                  alt="leading_bit"
                  width={200}
                  height={250}
                  layout="responsive"
                />
              </div>
            );
          })}
        </div>
      </Fade>
      <div className="w-full  md:w-5/12 md:pl-8">
        <div className=" ">
          <Fade bottom>
            <h3 className="text-orange-red">Choose your Investment Plan</h3>
          </Fade>
          <Fade bottom>
            <p className={`mt-8 mb-8 md:mb-0 max-w-sm $ {styles.body1}`}>
              Choose the most suitable out of our carefully crafted plans that
              most fits your budget and your expected ROI. The plan you choose
              determines how much you get on your investment over time.
            </p>
          </Fade>
        </div>
      </div>
    </Container>
  );
};

export default ChooseInvPlan;
