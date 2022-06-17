import { Layout } from "@components/common";
import { Container } from "@components/ui";
import Image from "next/image";
import styles from "./plans.module.css";

const plans = [
  {
    imgSrc:
      "https://ik.imagekit.io/o79mipqfj/Graphite__1__I0mOMi9E6.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654602583060",
  },
  {
    imgSrc:
      "https://ik.imagekit.io/o79mipqfj/Opal_PXW2XhwkN.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654602996974",
  },
  {
    imgSrc:
      "https://ik.imagekit.io/o79mipqfj/Ruby_o05xyXvs0q.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654602996976",
  },
  {
    imgSrc:
      "https://ik.imagekit.io/o79mipqfj/Sapphire_ctxLk43zP.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654602998505",
  },
  {
    imgSrc:
      "https://ik.imagekit.io/o79mipqfj/Bronze_xDLaDcYJD.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654602997967",
  },
  {
    imgSrc:
      "https://ik.imagekit.io/o79mipqfj/Silver_slRxvfGFS.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654602998367",
  },
  {
    imgSrc:
      "https://ik.imagekit.io/o79mipqfj/Gold_6hiWyHDwM.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654094209263",
  },
  {
    imgSrc:
      "https://ik.imagekit.io/o79mipqfj/Diamond_RCVcy-8BN.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654602996948",
  },
  {
    imgSrc:
      "https://ik.imagekit.io/o79mipqfj/Platinum_Q_Vg1QzQiP.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654602996031",
  },
];

const Plans = () => {
  return (
    <Container className="py-16">
      <h2 className={`mx-auto mb-12 ${styles.heading}`}>Our Plans</h2>
      <div
        className={`mx-auto flex justify-around flex-wrap ${styles.plans_bg}`}
      >
        {plans.map((plan, index) => {
          return (
            <div
              className="sm:w-1/3 mx-auto mb-8 md:mb-12"
              key={`plan-${index}`}
            >
              <div className={`relative mx-auto ${styles.plans_img}`}>
                <Image
                  src={plan.imgSrc}
                  alt="bitcoin plans"
                  layout="responsive"
                  width={327}
                  height={415}
                />
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

Plans.Layout = Layout;
export default Plans;
