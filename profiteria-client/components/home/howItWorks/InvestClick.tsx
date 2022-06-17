import { Container } from "@components/ui";
import styles from "../Home.module.css";
import Fade from "react-reveal/Fade";
import Image from "next/image";

const InvestClick = () => {
  return (
    <section className="ash-gradient">
      <Container className="a-center-j-btw flex-wrap py-12">
        <div className="w-full md:w-5/12 pr-4 mb-4">
          <Fade bottom>
            <h3 className="text-orange-red ">Invest with a Click</h3>
          </Fade>
          <Fade bottom>
            <p className={`mt-8 max-w-sm ${styles.body1}`}>
              After choosing your plan, you&apos;ll be redirected to where
              you&apos;ll make the payment of your plan to in BITCOIN. After
              paying to the wallet, your payment will be confirmed in about 48
              hours. After confirmation, you&apos;ll be given access to your
              dashboard where you can track your investment and withdraw your
              ROI.
            </p>
          </Fade>
        </div>
        <div className="w-full md:w-7/12">
          <div className={`md:mr-auto ${styles.goldImg}`}>
            <Fade bottom>
              <Image
                src="https://ik.imagekit.io/o79mipqfj/gold_landscape.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653417780215"
                alt="leading_bit"
                width={354}
                height={207}
                layout="responsive"
              />
            </Fade>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default InvestClick;
