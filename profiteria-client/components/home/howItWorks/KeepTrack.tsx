import { Container } from "@components/ui";
import Image from "next/image";
import Fade from "react-reveal/Fade";
import styles from "../Home.module.css";

const KeepTrack = () => {
  return (
    <Container className="a-center-j-btw ash-gradient flex-wrap py-12">
      <div className="w-full md:pr-8 md:w-5/12">
        <div className="ml-auto">
          <Fade bottom>
            <h3 className="text-orange-red">Keep Track of your Development</h3>
          </Fade>
          <Fade bottom>
            <p className="my-8 max-w-sm">
              Unfortunately, at the moment , we are limited by the laws of how
              many investors can join a plan(a limited company). This means that
              the amount invested receives limited ROI of 20%.
            </p>
          </Fade>
        </div>
      </div>

      <div className=" w-full md:w-7/12">
        <Fade bottom>
          <div className={`p-4 rounded-lg ${styles.plans}`}>
            <Image
              src="https://ik.imagekit.io/o79mipqfj/keepTrack1_iRu3K2pMV.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654725923856"
              alt="leading_bit"
              width={573}
              height={351}
              layout="responsive"
            />
          </div>
        </Fade>
      </div>
    </Container>
  );
};

export default KeepTrack;
