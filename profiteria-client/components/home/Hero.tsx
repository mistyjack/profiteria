import { Container } from "@components/ui";
import styles from "./Home.module.css";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <Container>
      <div className={`py-16 md:py-4 a-center-j-btw ${styles.hero}`}>
        <div className={`md:w-1/2`}>
          <h1 className={`mb-8 ${styles.hero_title}`}>
            The most profitable{" "}
            <span className={`${styles.bit_farm}`}>Bitcoin Farming</span>{" "}
            platform.
          </h1>
          <p className={`body1 mb-12 ${styles.hero_subtitle}`}>
            Get started with <span className="text-orange-red">profit</span>
            eria to have access to the best strategies for great returns.
          </p>
          <Link href="/signup">
            <a className="btn btn-orange block text-center btn-xl w-full sm:inline">
              Get Started
            </a>
          </Link>
        </div>
        <div className="md:w-1/2 none md:block">
          <Image
            src="https://ik.imagekit.io/o79mipqfj/hero_bit_nFp9nm8a5.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653583250532"
            alt="bitcoin platform"
            width={595}
            height={507}
            layout="responsive"
          />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
