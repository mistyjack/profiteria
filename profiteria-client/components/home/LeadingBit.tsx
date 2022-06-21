import { Container } from "@components/ui";
import styles from "./Home.module.css";
import Image from "next/image";
import Fade from "react-reveal/Fade";
import Link from "next/link";

const LeadingBit = () => {
  return (
    <section className="pt-12 md:pb-12 ash-gradient">
      <Container>
        <div className="a-center-j-btw flex-row-reverse flex-wrap">
          <div className="w-full md:w-5/12 md:pl-8 mb-4 md:mb-0">
            <div className={`max-w-sm`}>
              <Fade bottom>
                <h2>
                  The Leading{" "}
                  <span className="text-orange-red">bitcoin farming</span>{" "}
                  platform
                </h2>
              </Fade>
              <Fade bottom>
                <p className={`my-4 md:my-6 ${styles.lead_p}`}>
                  Increase your income with our unique farming plan.{" "}
                </p>
              </Fade>
              <Link href="/plans">
                <a className={`btn btn-orange btn-lg ${styles.btnLg}`}>
                  Invest Now
                </a>
              </Link>
            </div>
          </div>
          <div className="w-full hidden md:block max-w-sm md:max-w-3xl md:w-7/12">
            <Fade bottom>
              <Image
                src="https://ik.imagekit.io/o79mipqfj/leadling_bitFarm.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653417828526"
                alt="leading_bit"
                width={1200}
                height={778}
                layout="responsive"
              />
            </Fade>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LeadingBit;
